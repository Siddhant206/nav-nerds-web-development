import React from "react";

// Microsoft Dynamics 365 Official Ribbon Spiral SVGs & Partner Stickers
export const BCIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="url(#bc-grad1)" />
    <circle cx="20" cy="20" r="10" fill="url(#bc-grad2)" />
    <path d="M23 16C23 14.3431 21.6569 13 20 13C18.3431 13 17 14.3431 17 16H23Z" fill="#D2F6F9" />
    <path d="M23 24C23 25.6569 21.6569 27 20 27C18.3431 27 17 25.6569 17 24H23Z" fill="#82EBF1" />
    <circle cx="16" cy="20" r="2.5" fill="#9DF3F9" />
    <circle cx="24" cy="20" r="2.5" fill="#9DF3F9" />
    <defs>
      <linearGradient id="bc-grad1" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A2AD" />
        <stop offset="1" stopColor="#006C74" />
      </linearGradient>
      <linearGradient id="bc-grad2" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2CE2ED" />
        <stop offset="1" stopColor="#00AAB7" />
      </linearGradient>
    </defs>
  </svg>
);

export const FinanceIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#fin-bg)" />
    <path d="M12 26C12 21 16 17 21 17H28V23C28 26.5 25 29 21 29H15C13.3431 29 12 27.6569 12 26Z" fill="url(#fin-grad1)" />
    <path d="M28 14C28 19 24 23 19 23H12V17C12 13.5 15 11 19 11H25C26.6569 11 28 12.3431 28 14Z" fill="url(#fin-grad2)" />
    <defs>
      <linearGradient id="fin-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0E7A4A" stopOpacity="0.12" />
        <stop offset="1" stopColor="#10B981" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="fin-grad1" x1="12" y1="17" x2="28" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#107C41" />
        <stop offset="1" stopColor="#14B866" />
      </linearGradient>
      <linearGradient id="fin-grad2" x1="12" y1="11" x2="28" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2CE28A" />
        <stop offset="1" stopColor="#189C57" />
      </linearGradient>
    </defs>
  </svg>
);

export const SupplyChainIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#sc-bg)" />
    <path d="M12 25C12 19.5 16.5 15 22 15C25.5 15 28 17.5 28 20V26C28 27.5 26.5 29 24 29H16C13.8 29 12 27.2 12 25Z" fill="url(#sc-grad1)" />
    <path d="M28 15C28 20.5 23.5 25 18 25C14.5 25 12 22.5 12 20V14C12 12.5 13.5 11 16 11H24C26.2 11 28 12.8 28 15Z" fill="url(#sc-grad2)" />
    <defs>
      <linearGradient id="sc-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0078D4" stopOpacity="0.12" />
        <stop offset="1" stopColor="#0284C7" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="sc-grad1" x1="12" y1="15" x2="28" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0078D4" />
        <stop offset="1" stopColor="#005A9E" />
      </linearGradient>
      <linearGradient id="sc-grad2" x1="12" y1="11" x2="28" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#50E6FF" />
        <stop offset="1" stopColor="#0094C6" />
      </linearGradient>
    </defs>
  </svg>
);

export const HumanResourceIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#hr-bg)" />
    <path d="M13 25C13 19.5 17.5 15 23 15C26 15 28 17 28 20V25C28 27.2 26.2 29 24 29H17C14.8 29 13 27.2 13 25Z" fill="url(#hr-grad1)" />
    <path d="M27 15C27 20.5 22.5 25 17 25C14 25 12 23 12 20V15C12 12.8 13.8 11 16 11H23C25.2 11 27 12.8 27 15Z" fill="url(#hr-grad2)" />
    <defs>
      <linearGradient id="hr-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7C3AED" stopOpacity="0.12" />
        <stop offset="1" stopColor="#9333EA" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="hr-grad1" x1="13" y1="15" x2="28" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6D28D9" />
        <stop offset="1" stopColor="#4C1D95" />
      </linearGradient>
      <linearGradient id="hr-grad2" x1="12" y1="11" x2="27" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C084FC" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
);

export const CommerceIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#com-bg)" />
    <path d="M13 14H27L25 24C24.5 26.5 22.5 28 20 28C17.5 28 15.5 26.5 15 24L13 14Z" fill="url(#com-grad1)" />
    <path d="M15 14L17 21C17.5 23 19 24.5 20.5 24.5C22 24.5 23.5 23 24 21L26 14H15Z" fill="url(#com-grad2)" />
    <defs>
      <linearGradient id="com-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" stopOpacity="0.15" />
        <stop offset="1" stopColor="#D97706" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="com-grad1" x1="13" y1="14" x2="27" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="com-grad2" x1="15" y1="14" x2="26" y2="24.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCD34D" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>
);

export const ProjectOpsIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#pj-bg)" />
    <path d="M13 25C13 20 17 16 22 16H27V21C27 25.5 23.5 29 19 29H15C13.8 29 13 28.2 13 27V25Z" fill="url(#pj-grad1)" />
    <path d="M27 15C27 20 23 24 18 24H13V19C13 14.5 16.5 11 21 11H25C26.2 11 27 11.8 27 13V15Z" fill="url(#pj-grad2)" />
    <defs>
      <linearGradient id="pj-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E11D48" stopOpacity="0.12" />
        <stop offset="1" stopColor="#BE123C" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="pj-grad1" x1="13" y1="16" x2="27" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BE123C" />
        <stop offset="1" stopColor="#881337" />
      </linearGradient>
      <linearGradient id="pj-grad2" x1="13" y1="11" x2="27" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FB7185" />
        <stop offset="1" stopColor="#E11D48" />
      </linearGradient>
    </defs>
  </svg>
);

export const SalesIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#sales-bg)" />
    <path d="M12 25C12 19 17 14 23 14C26 14 28 16 28 19V25C28 27.2 26.2 29 24 29H16C13.8 29 12 27.2 12 25Z" fill="url(#sales-grad1)" />
    <path d="M28 15C28 21 23 26 17 26C14 26 12 24 12 21V15C12 12.8 13.8 11 16 11H24C26.2 11 28 12.8 28 15Z" fill="url(#sales-grad2)" />
    <defs>
      <linearGradient id="sales-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" stopOpacity="0.12" />
        <stop offset="1" stopColor="#3B82F6" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="sales-grad1" x1="12" y1="14" x2="28" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1D4ED8" />
        <stop offset="1" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="sales-grad2" x1="12" y1="11" x2="28" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
  </svg>
);

export const MarketingIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#mkt-bg)" />
    <path d="M12 14L24 11V29L12 26V14Z" fill="url(#mkt-grad1)" />
    <path d="M24 16L29 18V22L24 24V16Z" fill="url(#mkt-grad2)" />
    <defs>
      <linearGradient id="mkt-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EA580C" stopOpacity="0.12" />
        <stop offset="1" stopColor="#F97316" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="mkt-grad1" x1="12" y1="11" x2="24" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EA580C" />
        <stop offset="1" stopColor="#C2410C" />
      </linearGradient>
      <linearGradient id="mkt-grad2" x1="24" y1="16" x2="29" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FB923C" />
        <stop offset="1" stopColor="#EA580C" />
      </linearGradient>
    </defs>
  </svg>
);

export const FieldServiceIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#fs-bg)" />
    <path d="M20 11L28 15.5V24.5L20 29L12 24.5V15.5L20 11Z" fill="url(#fs-grad1)" />
    <path d="M20 11L28 15.5L20 20L12 15.5L20 11Z" fill="url(#fs-grad2)" />
    <defs>
      <linearGradient id="fs-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D97706" stopOpacity="0.12" />
        <stop offset="1" stopColor="#F59E0B" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="fs-grad1" x1="12" y1="11" x2="28" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B45309" />
        <stop offset="1" stopColor="#78350F" />
      </linearGradient>
      <linearGradient id="fs-grad2" x1="12" y1="11" x2="28" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

export const CustomerServiceIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#cs-bg)" />
    <path d="M20 28C20 28 12 23 12 17C12 14.2 14.2 12 17 12C18.6 12 20 13 20 13C20 13 21.4 12 23 12C25.8 12 28 14.2 28 17C28 23 20 28 20 28Z" fill="url(#cs-grad1)" />
    <defs>
      <linearGradient id="cs-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" stopOpacity="0.15" />
        <stop offset="1" stopColor="#A855F7" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="cs-grad1" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C084FC" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
  </svg>
);

export const CustomerEngagementIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="url(#ce-bg)" />
    <circle cx="20" cy="16" r="4.5" fill="url(#ce-grad1)" />
    <path d="M13 28C13 24 16 22 20 22C24 22 27 24 27 28H13Z" fill="url(#ce-grad2)" />
    <defs>
      <linearGradient id="ce-bg" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0EA5E9" stopOpacity="0.15" />
        <stop offset="1" stopColor="#0284C7" stopOpacity="0.06" />
      </linearGradient>
      <linearGradient id="ce-grad1" x1="15.5" y1="11.5" x2="24.5" y2="20.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="ce-grad2" x1="13" y1="22" x2="27" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#0369A1" />
      </linearGradient>
    </defs>
  </svg>
);

// Company By Size Modern Badges
export const StartupIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#00A2AD" fillOpacity="0.12" />
    <path d="M21 11L13 22H19L18 29L27 18H20L21 11Z" fill="url(#su-grad)" />
    <defs>
      <linearGradient id="su-grad" x1="13" y1="11" x2="27" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1DCCD8" />
        <stop offset="1" stopColor="#0094C6" />
      </linearGradient>
    </defs>
  </svg>
);

export const SmallBusinessIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#7C3AED" fillOpacity="0.12" />
    <path d="M12 17L14 12H26L28 17V26C28 27.1 27.1 28 26 28H14C12.9 28 12 27.1 12 26V17Z" fill="url(#sb-grad)" />
    <rect x="17" y="21" width="6" height="7" rx="1" fill="#FFFFFF" fillOpacity="0.9" />
    <defs>
      <linearGradient id="sb-grad" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
  </svg>
);

export const MidSizeIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#F59E0B" fillOpacity="0.12" />
    <circle cx="16" cy="17" r="3.5" fill="#F59E0B" />
    <circle cx="24" cy="17" r="3.5" fill="#D97706" />
    <path d="M11 27C11 24 13.5 22 17 22C18.5 22 19.8 22.4 20.8 23.2C21.8 22.4 23.1 22 24.6 22C28.1 22 30.6 24 30.6 27H11Z" fill="url(#ms-grad)" />
    <defs>
      <linearGradient id="ms-grad" x1="11" y1="22" x2="30.6" y2="27" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

export const EnterpriseIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#0284C7" fillOpacity="0.12" />
    <rect x="12" y="15" width="8" height="13" rx="1.5" fill="url(#ent-grad1)" />
    <rect x="21" y="11" width="8" height="17" rx="1.5" fill="url(#ent-grad2)" />
    <rect x="14" y="18" width="1.5" height="1.5" fill="#FFFFFF" />
    <rect x="17" y="18" width="1.5" height="1.5" fill="#FFFFFF" />
    <rect x="14" y="21" width="1.5" height="1.5" fill="#FFFFFF" />
    <rect x="17" y="21" width="1.5" height="1.5" fill="#FFFFFF" />
    <rect x="23" y="14" width="1.5" height="1.5" fill="#FFFFFF" />
    <rect x="26" y="14" width="1.5" height="1.5" fill="#FFFFFF" />
    <rect x="23" y="17" width="1.5" height="1.5" fill="#FFFFFF" />
    <rect x="26" y="17" width="1.5" height="1.5" fill="#FFFFFF" />
    <defs>
      <linearGradient id="ent-grad1" x1="12" y1="15" x2="20" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#0369A1" />
      </linearGradient>
      <linearGradient id="ent-grad2" x1="21" y1="11" x2="29" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
  </svg>
);

// Integration Partner Stickers
export const ContiniaIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#0F172A" fillOpacity="0.06" />
    <path d="M14 13H26V18L19 23L14 20V13Z" fill="#1E3A8A" />
    <path d="M14 20L19 23L26 28H14V20Z" fill="#2563EB" />
  </svg>
);

export const InsightWorksIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#059669" fillOpacity="0.08" />
    <circle cx="20" cy="20" r="8" stroke="url(#iw-grad)" strokeWidth="3.5" fill="none" />
    <defs>
      <linearGradient id="iw-grad" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="0.5" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
  </svg>
);

export const SanaIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#DC2626" fillOpacity="0.08" />
    <path d="M25 14C22 12 17 13 15 16C13 19 14 22 17 23L23 25C26 26 27 28 25 30C23 32 18 31 15 28" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const TaskletIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#15803D" fillOpacity="0.08" />
    <path d="M20 11L28 15.5V24.5L20 29L12 24.5V15.5L20 11Z" fill="#16A34A" />
    <path d="M20 11L28 15.5L20 20L12 15.5L20 11Z" fill="#4ADE80" />
    <path d="M20 20V29L28 24.5V15.5L20 20Z" fill="#15803D" />
  </svg>
);

export const ShopifyIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#95BF47" fillOpacity="0.12" />
    <path d="M24 13L21.5 11H18.5L16 13H14L15.5 28H24.5L26 13H24ZM18.5 13H21.5L22.5 15H17.5L18.5 13Z" fill="#95BF47" />
    <path d="M21.5 17L18.5 20L20 25L23 20L21.5 17Z" fill="#5E8E3E" />
  </svg>
);

export const YavrioIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#10B981" fillOpacity="0.1" />
    <path d="M14 14L20 26L26 14H22L20 20L18 14H14Z" fill="#10B981" />
  </svg>
);

// Data & AI Solutions Icons
export const FabricIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#00A2AD" fillOpacity="0.1" />
    <path d="M13 14C13 14 18 12 23 15C28 18 28 24 25 27C22 30 16 28 14 24" stroke="url(#fab-grad)" strokeWidth="4" strokeLinecap="round" />
    <defs>
      <linearGradient id="fab-grad" x1="13" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1DCCD8" />
        <stop offset="1" stopColor="#007D85" />
      </linearGradient>
    </defs>
  </svg>
);

export const PowerBIIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#F59E0B" fillOpacity="0.1" />
    <rect x="12" y="21" width="3.5" height="8" rx="1" fill="#F59E0B" />
    <rect x="18" y="16" width="3.5" height="13" rx="1" fill="#D97706" />
    <rect x="24" y="11" width="3.5" height="18" rx="1" fill="#B45309" />
  </svg>
);

export const CopilotIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#6366F1" fillOpacity="0.1" />
    <path d="M14 22C14 18 17 15 21 15H25C26.5 15 27.5 16 27.5 17.5V19C27.5 23 24.5 26 20.5 26H16.5C15 26 14 25 14 23.5V22Z" fill="url(#cp-grad1)" />
    <path d="M26 18C26 22 23 25 19 25H15C13.5 25 12.5 24 12.5 22.5V21C12.5 17 15.5 14 19.5 14H23.5C25 14 26 15 26 16.5V18Z" fill="url(#cp-grad2)" />
    <defs>
      <linearGradient id="cp-grad1" x1="14" y1="15" x2="27.5" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="0.5" stopColor="#6366F1" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient id="cp-grad2" x1="12.5" y1="14" x2="26" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

export const AzureAIIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#0284C7" fillOpacity="0.1" />
    <path d="M13 26L21 12H27L19 26H13Z" fill="url(#az-grad1)" />
    <path d="M22 17L25 21L18 26H27L22 17Z" fill="url(#az-grad2)" />
    <defs>
      <linearGradient id="az-grad1" x1="13" y1="12" x2="27" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0078D4" />
        <stop offset="1" stopColor="#005A9E" />
      </linearGradient>
      <linearGradient id="az-grad2" x1="18" y1="17" x2="27" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#50E6FF" />
        <stop offset="1" stopColor="#0078D4" />
      </linearGradient>
    </defs>
  </svg>
);

// Legacy Dynamics SVGs
export const DynamicsNAVIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#0E7490" fillOpacity="0.1" />
    <path d="M12 28L20 12L28 28H23L20 22L17 28H12Z" fill="url(#nav-grad)" />
    <text x="14" y="27" fontSize="7" fontWeight="bold" fill="#0E7490">NAV</text>
    <defs>
      <linearGradient id="nav-grad" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4" />
        <stop offset="1" stopColor="#0E7490" />
      </linearGradient>
    </defs>
  </svg>
);

export const DynamicsCRMIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#B91C1C" fillOpacity="0.1" />
    <path d="M12 28L20 12L28 28H23L20 22L17 28H12Z" fill="url(#crm-grad)" />
    <text x="14" y="27" fontSize="7" fontWeight="bold" fill="#B91C1C">CRM</text>
    <defs>
      <linearGradient id="crm-grad" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EF4444" />
        <stop offset="1" stopColor="#B91C1C" />
      </linearGradient>
    </defs>
  </svg>
);

export const DynamicsAXIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#D97706" fillOpacity="0.1" />
    <path d="M12 28L20 12L28 28H23L20 22L17 28H12Z" fill="url(#ax-grad)" />
    <text x="15" y="27" fontSize="7" fontWeight="bold" fill="#D97706">AX</text>
    <defs>
      <linearGradient id="ax-grad" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
    </defs>
  </svg>
);

export const DynamicsGPIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#047857" fillOpacity="0.1" />
    <path d="M12 28L20 12L28 28H23L20 22L17 28H12Z" fill="url(#gp-grad)" />
    <text x="15" y="27" fontSize="7" fontWeight="bold" fill="#047857">GP</text>
    <defs>
      <linearGradient id="gp-grad" x1="12" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
    </defs>
  </svg>
);

export const DynamicsERPIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#2563EB" fillOpacity="0.1" />
    <path d="M13 25C13 19.5 17.5 15 23 15C26 15 28 17 28 20V25C28 27.2 26.2 29 24 29H17C14.8 29 13 27.2 13 25Z" fill="url(#erp-grad)" />
    <defs>
      <linearGradient id="erp-grad" x1="13" y1="15" x2="28" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
  </svg>
);

export const DynamicsFOIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#7C3AED" fillOpacity="0.1" />
    <path d="M13 25C13 20 17 16 22 16H27V21C27 25.5 23.5 29 19 29H15C13.8 29 13 28.2 13 27V25Z" fill="url(#fo-grad)" />
    <defs>
      <linearGradient id="fo-grad" x1="13" y1="16" x2="27" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
  </svg>
);

// Power Platform & Intelligent Apps SVGs
export const PowerAppsIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#742774" fillOpacity="0.1" />
    <path d="M16 11L11 20L16 29H24L29 20L24 11H16Z" fill="#742774" />
    <path d="M19 14L15 20L19 26H23L27 20L23 14H19Z" fill="#C83B92" />
    <path d="M22 17L19 20L22 23H24L26 20L24 17H22Z" fill="#FF92BE" />
  </svg>
);

export const PowerAutomateIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#0078D4" fillOpacity="0.1" />
    <path d="M12 27L20 13L28 27H21L17 20L15 27H12Z" fill="url(#pa-grad1)" />
    <path d="M18 20L22 13L28 23L25 27L18 20Z" fill="url(#pa-grad2)" />
    <defs>
      <linearGradient id="pa-grad1" x1="12" y1="13" x2="28" y2="27" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0078D4" />
        <stop offset="1" stopColor="#005A9E" />
      </linearGradient>
      <linearGradient id="pa-grad2" x1="18" y1="13" x2="28" y2="27" gradientUnits="userSpaceOnUse">
        <stop stopColor="#50E6FF" />
        <stop offset="1" stopColor="#0094C6" />
      </linearGradient>
    </defs>
  </svg>
);

export const PowerVirtualAgentsIcon = () => (
  <svg className="w-10 h-10 shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="10" fill="#0284C7" fillOpacity="0.1" />
    <path d="M14 17C14 14.8 15.8 13 18 13H22C24.2 13 26 14.8 26 17V23C26 25.2 24.2 27 22 27H18C15.8 27 14 25.2 14 23V17Z" fill="url(#pva-grad)" />
    <circle cx="17.5" cy="18" r="1.5" fill="#FFFFFF" />
    <circle cx="22.5" cy="18" r="1.5" fill="#FFFFFF" />
    <path d="M17 22H23" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    <defs>
      <linearGradient id="pva-grad" x1="14" y1="13" x2="26" y2="27" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0284C7" />
      </linearGradient>
    </defs>
  </svg>
);
