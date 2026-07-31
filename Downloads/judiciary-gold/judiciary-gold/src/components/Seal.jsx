/**
 * Seal — the recurring signature mark of the Judiciary Gold brand.
 * An original line-drawn medallion (not a copy of any external asset)
 * used in the navbar, hero, section dividers and footer so the brand
 * reads as a mark of certification rather than a generic logo.
 */
function Seal({ className = "h-10 w-10", animate = false }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={`${className} ${animate ? "animate-seal-in" : ""}`}
      role="img"
      aria-label="Judiciary Gold seal"
    >
      <circle cx="32" cy="32" r="30" stroke="#B8912F" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="24.5" stroke="#B8912F" strokeWidth="0.8" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const x1 = 32 + Math.cos(angle) * 27;
        const y1 = 32 + Math.sin(angle) * 27;
        const x2 = 32 + Math.cos(angle) * 29.5;
        const y2 = 32 + Math.sin(angle) * 29.5;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#B8912F"
            strokeWidth="0.9"
          />
        );
      })}
      <path
        d="M20 26h10M20 26c0 5.5-3 8-6 9.5M20 26c0 5.5 3 8 6 9.5"
        stroke="#B8912F"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M44 26h-10M44 26c0 5.5 3 8 6 9.5M44 26c0-.001-3 8-6 9.5"
        stroke="#B8912F"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line x1="32" y1="22" x2="32" y2="42" stroke="#B8912F" strokeWidth="1.2" />
      <rect x="27" y="42" width="10" height="2" rx="1" fill="#B8912F" />
      <text
        x="32"
        y="52"
        textAnchor="middle"
        fontSize="7.5"
        fill="#B8912F"
        fontFamily="Fraunces, serif"
        letterSpacing="1.5"
      >
        JG
      </text>
    </svg>
  );
}

export default Seal;
