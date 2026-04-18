export default function AcaiBerry({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="berry1" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#7a3580"/>
          <stop offset="100%" stopColor="#4a1650"/>
        </radialGradient>
        <radialGradient id="berry2" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#6d2d70"/>
          <stop offset="100%" stopColor="#3d1245"/>
        </radialGradient>
        <radialGradient id="berry3" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#7a3580"/>
          <stop offset="100%" stopColor="#4a1650"/>
        </radialGradient>
      </defs>
      {/* Bottom-left berry */}
      <circle cx="22" cy="40" r="12" fill="url(#berry1)"/>
      {/* Bottom-right berry */}
      <circle cx="42" cy="40" r="12" fill="url(#berry2)"/>
      {/* Top berry sitting between the two */}
      <circle cx="32" cy="24" r="12" fill="url(#berry3)"/>
      {/* Leaf sprig – two small pointed leaves angled up-right */}
      <path d="M38 16 C42 10, 50 8, 52 6 C48 10, 46 14, 40 18 Z" fill="#4a8b2c"/>
      <path d="M40 14 C46 12, 50 14, 54 12 C50 16, 44 16, 40 18 Z" fill="#3d7524"/>
      {/* Thin stem connecting leaves to berry */}
      <line x1="38" y1="18" x2="44" y2="10" stroke="#3d7524" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
