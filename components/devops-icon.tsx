import React from "react";

export function DevOpsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="48"
      height="48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Gear icon */}
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5V3" />
      <path d="M12 21v-2" />
      <path d="M16.95 7.05L18.36 5.64" />
      <path d="M5.64 18.36l1.41-1.41" />
      <path d="M19 12h2" />
      <path d="M3 12h2" />
      <path d="M16.95 16.95l1.41 1.41" />
      <path d="M5.64 5.64l1.41 1.41" />

      {/* Infinity symbol for continuous integration/deployment */}
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M8.46 15.54a5 5 0 0 1 0-7.08" />
    </svg>
  );
}

export default DevOpsIcon;
