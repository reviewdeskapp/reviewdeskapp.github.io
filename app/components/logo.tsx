/**
 * ReviewDesk app mark, recreated from the shipping macOS AppIcon:
 * a charcoal tile with a three-row review checklist, each row led by a
 * status dot (done / in progress / blocked) beside a white bar.
 */
export function Logo({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label="ReviewDesk"
    >
      <rect width="512" height="512" rx="114" fill="#262529" />
      {/* row 1 - done */}
      <circle cx="150" cy="180" r="26" fill="#3fb950" />
      <rect x="205" y="162" width="205" height="36" rx="18" fill="#ffffff" />
      {/* row 2 - in progress */}
      <circle cx="150" cy="256" r="26" fill="#e3b341" />
      <rect x="205" y="238" width="150" height="36" rx="18" fill="#ffffff" />
      {/* row 3 - blocked */}
      <circle cx="150" cy="332" r="26" fill="#e5534b" />
      <rect x="205" y="314" width="190" height="36" rx="18" fill="#ffffff" />
    </svg>
  );
}
