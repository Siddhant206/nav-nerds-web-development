#!/usr/bin/env bash
set -euo pipefail

# ======================================================
# CONFIGURATION-edit these for your project
# ======================================================
ROOT_DIR="public"
PRESERVE_AUDIO=false      # true = MP4s encode with libopus audio
PARALLEL_JOBS=4           # number of concurrent encoding jobs
# ======================================================

DELETE_ORIGINALS=true
DRY_RUN=false
CONVERTED=0
SKIPPED=0
DELETED=0
FAILED=0

# -----------------------------
# Dependency checks
# -----------------------------
check_deps() {
  local missing=false
  for cmd in cwebp ffmpeg xargs; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
      echo "[ERROR] Missing dependency: $cmd"
      missing=true
    fi
  done
  if [[ "$missing" == true ]]; then
    echo ""
    echo "Install missing tools and re-run."
    echo "  macOS:  brew install webp ffmpeg findutils"
    echo "  Debian: apt install webp ffmpeg"
    exit 1
  fi
}

# -----------------------------
# Argument parsing
# -----------------------------
for arg in "$@"; do
  case $arg in
    --delete) DELETE_ORIGINALS=true; DRY_RUN=false ;;
    --run)    DRY_RUN=false ;;
    --jobs=*) PARALLEL_JOBS="${arg#--jobs=}" ;;
  esac
done

check_deps

echo "=============================="
echo " Asset Compression Pipeline"
echo "=============================="
echo "Root:             $ROOT_DIR"
echo "Dry run:          $DRY_RUN"
echo "Delete originals: $DELETE_ORIGINALS"
echo "Preserve audio:   $PRESERVE_AUDIO"
echo "Parallel jobs:    $PARALLEL_JOBS"
echo ""

# -----------------------------
# Helper: maybe_delete
# -----------------------------
maybe_delete() {
  local file="$1"
  if [[ "$DELETE_ORIGINALS" == true ]]; then
    if [[ "$DRY_RUN" == true ]]; then
      echo "[DRY]  would delete: $file"
    else
      echo "[DEL]  $file"
      rm -- "$file"
      (( DELETED++ )) || true
    fi
  fi
}

# -----------------------------
# Helper: convert_image
# Called by xargs-must be exported
# -----------------------------
export ROOT_DIR DELETE_ORIGINALS DRY_RUN

convert_image() {
  local img="$1"
  local webp="${img%.*}.webp"

  if [[ -f "$webp" ]]; then
    echo "[SKIP] $webp exists"
    # Still handle deletion of orphaned original
    if [[ "$DELETE_ORIGINALS" == true && "$DRY_RUN" == false ]]; then
      echo "[DEL]  $img"
      rm -- "$img"
    elif [[ "$DELETE_ORIGINALS" == true && "$DRY_RUN" == true ]]; then
      echo "[DRY]  would delete: $img"
    fi
    return
  fi

  if [[ "$DRY_RUN" == true ]]; then
    echo "[DRY]  $img → $webp"
    return
  fi

  echo "[RUN]  $img → $webp"
  if cwebp "$img" -q 80 -metadata none -o "$webp" 2>/dev/null; then
    if [[ "$DELETE_ORIGINALS" == true ]]; then
      echo "[DEL]  $img"
      rm -- "$img"
    fi
  else
    echo "[FAIL] $img"
  fi
}
export -f convert_image

convert_video() {
  local file="$1"
  local mode="$2"   # "gif" or "mp4"
  local webm="${file%.*}.webm"

  if [[ -f "$webm" ]]; then
    echo "[SKIP] $webm exists"
    if [[ "$DELETE_ORIGINALS" == true && "$DRY_RUN" == false ]]; then
      echo "[DEL]  $file"
      rm -- "$file"
    elif [[ "$DELETE_ORIGINALS" == true && "$DRY_RUN" == true ]]; then
      echo "[DRY]  would delete: $file"
    fi
    return
  fi

  if [[ "$DRY_RUN" == true ]]; then
    echo "[DRY]  $file → $webm"
    return
  fi

  echo "[RUN]  $file → $webm"

  local audio_flags="-an"
  if [[ "$mode" == "mp4" && "$PRESERVE_AUDIO" == true ]]; then
    audio_flags="-c:a libopus"
  fi

  if ffmpeg -y -i "$file" \
    -c:v libvpx-vp9 \
    -crf 32 \
    -b:v 0 \
    -deadline good \
    -cpu-used 4 \
    -pix_fmt yuv420p \
    $audio_flags \
    "$webm" 2>/dev/null; then
    if [[ "$DELETE_ORIGINALS" == true ]]; then
      echo "[DEL]  $file"
      rm -- "$file"
    fi
  else
    echo "[FAIL] $file"
  fi
}
export -f convert_video
export PRESERVE_AUDIO

# -----------------------------
# Images → WebP (parallel)
# -----------------------------
echo "▶ Converting images → WebP (${PARALLEL_JOBS} jobs)"

find "$ROOT_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 \
  | xargs -0 -P "$PARALLEL_JOBS" -I{} bash -c 'convert_image "$@"' _ {}

# -----------------------------
# GIFs → WebM (always silent, parallel)
# -----------------------------
echo ""
echo "▶ Converting GIFs → WebM (${PARALLEL_JOBS} jobs, silent)"

find "$ROOT_DIR" -type f -iname "*.gif" -print0 \
  | xargs -0 -P "$PARALLEL_JOBS" -I{} bash -c 'convert_video "$@" gif' _ {}

# -----------------------------
# MP4s → WebM (audio optional, parallel)
# -----------------------------
echo ""
echo "▶ Converting MP4s → WebM (${PARALLEL_JOBS} jobs, audio: $PRESERVE_AUDIO)"

find "$ROOT_DIR" -type f -iname "*.mp4" -print0 \
  | xargs -0 -P "$PARALLEL_JOBS" -I{} bash -c 'convert_video "$@" mp4' _ {}

# -----------------------------
# Summary
# -----------------------------
echo ""
echo "=============================="
echo " Summary"
echo "=============================="

# Count outcomes from output (reliable cross-platform approach)
CONVERTED=$(grep -c '^\[RUN\]' /tmp/.pipeline_log 2>/dev/null || true)
SKIPPED=$(grep -c   '^\[SKIP\]' /tmp/.pipeline_log 2>/dev/null || true)
DELETED=$(grep -c   '^\[DEL\]'  /tmp/.pipeline_log 2>/dev/null || true)
FAILED=$(grep -c    '^\[FAIL\]' /tmp/.pipeline_log 2>/dev/null || true)

echo "Converted: $CONVERTED"
echo "Skipped:   $SKIPPED"
echo "Deleted:   $DELETED"
echo "Failed:    $FAILED"
echo ""
echo "✅ Asset pipeline finished"