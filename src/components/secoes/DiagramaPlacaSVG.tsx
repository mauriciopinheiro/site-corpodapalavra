import React from 'react';

interface DiagramaPlacaSVGProps {
  tipo: string;
  className?: string;
}

export const DiagramaPlacaSVG: React.FC<DiagramaPlacaSVGProps> = ({ tipo, className = 'w-full h-full' }) => {
  switch (tipo) {
    case 'grade-36':
      return (
        <svg viewBox="0 0 240 120" className={className} fill="none" stroke="currentColor">
          {/* Grade 3x12 do painel */}
          {Array.from({ length: 3 }).map((_, r) =>
            Array.from({ length: 12 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={10 + c * 18}
                y={15 + r * 30}
                width="16"
                height="26"
                strokeWidth="1.2"
                className="fill-madeira/30 hover:fill-tinta hover:stroke-papel transition-colors"
              />
            ))
          )}
          <line x1="5" y1="110" x2="235" y2="110" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
      );

    case 'metricas':
      return (
        <svg viewBox="0 0 240 120" className={className} stroke="currentColor" fill="none">
          <line x1="10" y1="20" x2="230" y2="20" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="10" y1="45" x2="230" y2="45" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="10" y1="85" x2="230" y2="85" strokeWidth="2" />
          <line x1="10" y1="105" x2="230" y2="105" strokeWidth="1" strokeDasharray="2 2" />
          <text x="60" y="85" fill="currentColor" fontSize="56" fontFamily="serif" fontWeight="bold">hgb</text>
        </svg>
      );

    case 'dobra-livro':
      return (
        <svg viewBox="0 0 240 120" className={className} stroke="currentColor" fill="none">
          <polygon points="20,95 60,30 110,95" strokeWidth="1.5" className="fill-madeira/20" />
          <polygon points="110,95 160,30 200,95" strokeWidth="1.5" className="fill-madeira/40" />
          <line x1="60" y1="30" x2="160" y2="30" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="60" cy="30" r="3" fill="currentColor" />
          <circle cx="110" cy="95" r="3" fill="currentColor" />
          <circle cx="160" cy="30" r="3" fill="currentColor" />
        </svg>
      );

    case 'rama-prelo':
      return (
        <svg viewBox="0 0 240 120" className={className} stroke="currentColor" fill="none">
          <rect x="20" y="15" width="200" height="90" strokeWidth="3" className="fill-tinta/5" />
          <rect x="35" y="25" width="170" height="70" strokeWidth="1" strokeDasharray="2 2" />
          <rect x="45" y="35" width="25" height="50" strokeWidth="1.5" className="fill-tinta text-papel" />
          <rect x="75" y="35" width="25" height="50" strokeWidth="1.5" className="fill-tinta text-papel" />
          <rect x="105" y="35" width="40" height="50" strokeWidth="1.5" className="fill-tinta text-papel" />
          <polygon points="175,40 195,50 175,60" fill="currentColor" />
        </svg>
      );

    case 'escala-aurea':
      return (
        <svg viewBox="0 0 240 120" className={className} stroke="currentColor" fill="none">
          <rect x="25" y="15" width="90" height="90" strokeWidth="1.5" />
          <rect x="125" y="15" width="90" height="90" strokeWidth="1.5" />
          <rect x="50" y="35" width="55" height="55" strokeWidth="1" className="fill-tinta/10" />
          <rect x="135" y="35" width="55" height="55" strokeWidth="1" className="fill-tinta/10" />
          <line x1="25" y1="15" x2="115" y2="105" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="125" y1="105" x2="215" y2="15" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>
      );

    case 'fontes-brasil':
      return (
        <svg viewBox="0 0 240 120" className={className} fill="currentColor">
          <text x="20" y="45" fontSize="24" fontFamily="serif" fontStyle="italic">Seiva</text>
          <text x="130" y="45" fontSize="24" fontFamily="sans-serif" fontWeight="900">BALA</text>
          <text x="20" y="95" fontSize="22" fontFamily="monospace">Discórdia</text>
          <text x="140" y="95" fontSize="28" fontFamily="Impact">SUMÔ</text>
        </svg>
      );

    case 'contraforma':
      return (
        <svg viewBox="0 0 240 120" className={className} fill="currentColor">
          <path d="M70 20 C35 20 20 45 20 65 C20 85 35 105 70 105 C105 105 120 85 120 65 C120 45 105 20 70 20 Z M70 38 C88 38 96 50 96 65 C96 80 88 88 70 88 C52 88 44 80 44 65 C44 50 52 38 70 38 Z" />
          <circle cx="170" cy="65" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" fill="none" />
        </svg>
      );

    case 'tinta-pressao':
      return (
        <svg viewBox="0 0 240 120" className={className} fill="none" stroke="currentColor">
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={i}
              x1="20"
              y1={20 + i * 9}
              x2="220"
              y2={20 + i * 9}
              strokeWidth={1 + i * 1.2}
              className="stroke-tinta"
            />
          ))}
        </svg>
      );

    case 'costura':
      return (
        <svg viewBox="0 0 240 120" className={className} fill="none" stroke="currentColor">
          <line x1="30" y1="60" x2="210" y2="60" strokeWidth="2" />
          <path d="M40 30 L60 90 L80 30 L100 90 L120 30 L140 90 L160 30 L180 90 L200 30" strokeWidth="2" className="stroke-acento-vermelho" />
          {Array.from({ length: 9 }).map((_, i) => (
            <circle key={i} cx={40 + i * 20} cy={i % 2 === 0 ? 30 : 90} r="3.5" className="fill-tinta" />
          ))}
        </svg>
      );

    case 'registro':
      return (
        <svg viewBox="0 0 240 120" className={className} stroke="currentColor" fill="none">
          <circle cx="120" cy="60" r="35" strokeWidth="1.5" />
          <circle cx="120" cy="60" r="20" strokeWidth="1" />
          <line x1="60" y1="60" x2="180" y2="60" strokeWidth="1.5" />
          <line x1="120" y1="10" x2="120" y2="110" strokeWidth="1.5" />
          <rect x="100" y="40" width="40" height="40" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>
      );

    case 'silencio':
    default:
      return (
        <svg viewBox="0 0 240 120" className={className} stroke="currentColor" fill="none">
          <rect x="20" y="15" width="200" height="90" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="120" cy="60" r="4" fill="currentColor" />
        </svg>
      );
  }
};
