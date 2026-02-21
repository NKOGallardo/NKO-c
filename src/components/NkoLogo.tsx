const NkoLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
    <text
      x="24"
      y="28"
      textAnchor="middle"
      fill="currentColor"
      fontFamily="JetBrains Mono, monospace"
      fontWeight="600"
      fontSize="16"
    >
      &lt;/&gt;
    </text>
  </svg>
);

export default NkoLogo;
