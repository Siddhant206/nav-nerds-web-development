import React, { forwardRef } from "react";
import { cn } from "@/component/lib/utils";

/**
 * Polymorphic typography system (JavaScript Version).
 * 
 * Semantic by default: <H1> renders <h1>, etc.
 * Overridable via `as` prop.
 */

// ─── H1 ───────────────────────────────────────────────────────────────────────

/**
 * Display heading — the largest typographic unit.
 * Fluid: clamp(2.25rem, 6vw, 3.75rem)
 */
export const H1 = forwardRef(function H1(
     { as, className, children, ...rest },
     ref
) {
     const Tag = as ?? "h1";
     return (
          <Tag
               ref={ref}
               className={cn(
                    "text-[clamp(2.25rem,6vw,3.75rem)]",
                    "font-light",
                    "tracking-[0.04em]",
                    "leading-none",
                    "uppercase",
                    "select-none",
                    className
               )}
               {...rest}
          >
               {children}
          </Tag>
     );
});

// ─── H2 ───────────────────────────────────────────────────────────────────────

/**
 * Section heading. Fluid: clamp(1.875rem, 4vw, 2.5rem)
 */
export const H2 = forwardRef(function H2(
     { as, className, children, ...rest },
     ref
) {
     const Tag = as ?? "h2";
     return (
          <Tag
               ref={ref}
               className={cn(
                    "text-[clamp(1.875rem,4vw,2.5rem)]",
                    "font-light",
                    "leading-tight",
                    className
               )}
               {...rest}
          >
               {children}
          </Tag>
     );
});

// ─── H3 ───────────────────────────────────────────────────────────────────────

/**
 * Sub-section heading. Fluid: clamp(1.5rem, 3vw, 1.4rem)
 */
export const H3 = forwardRef(function H3(
     { as, className, children, ...rest },
     ref
) {
     const Tag = as ?? "h3";
     return (
          <Tag
               ref={ref}
               className={cn(
                    "text-[clamp(1rem,3vw,1.3rem)]",
                    "font-semibold",
                    "tracking-[0.02em]",
                    "leading-snug",
                    className
               )}
               {...rest}
          >
               {children}
          </Tag>
     );
});

// ─── H4 ───────────────────────────────────────────────────────────────────────

export const H4 = forwardRef(function H4(
     { as, className, children, ...rest },
     ref
) {
     const Tag = as ?? "h4";
     return (
          <Tag
               ref={ref}
               className={cn(
                    "text-[clamp(1.25rem,2vw,1.5rem)]",
                    "font-normal",
                    "tracking-[0.02em]",
                    "leading-snug",
                    className
               )}
               {...rest}
          >
               {children}
          </Tag>
     );
});

// ─── H5 ───────────────────────────────────────────────────────────────────────

export const H5 = forwardRef(function H5(
     { as, className, children, ...rest },
     ref
) {
     const Tag = as ?? "h5";
     return (
          <Tag
               ref={ref}
               className={cn(
                    "text-[clamp(1.125rem,1.5vw,1.25rem)]",
                    "font-semibold",
                    "tracking-[0.02em]",
                    "leading-snug",
                    className
               )}
               {...rest}
          >
               {children}
          </Tag>
     );
});

// ─── P ────────────────────────────────────────────────────────────────────────

const pVariantStyles = {
  body: "text-base leading-relaxed tracking-wide",
  caption: "text-sm italic leading-relaxed tracking-wide",
  overline: "text-xs uppercase tracking-[0.18em] leading-none font-normal",
};

/**
 * Body text with variant support.
 *   variant="body" (default), "caption", "overline"
 */
export const P = forwardRef(function P(
     { as, variant = "body", className, children, ...rest },
     ref
) {
     const Tag = as ?? "p";
     return (
       <Tag
         ref={ref}
         className={cn(
           pVariantStyles[variant],
           className,
         )}
         {...rest}
       >
         {children}
       </Tag>
     );
});