import React from 'react';

interface GlifoSVGProps {
  grupo: string; // 'ab' | 'cd' | 'ef' | 'gh' | 'ij' | 'kl' | 'mno' | 'pq' | 'rs' | 'tu' | 'vw' | 'xyz'
  className?: string;
}

export const GlifoSVG: React.FC<GlifoSVGProps> = ({ grupo, className = 'w-full h-full' }) => {
  switch (grupo) {
    case 'ab':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* a brutalista em bloco de madeira maciça */}
          <path d="M15 85 L15 15 L55 15 L55 85 L40 85 L40 55 L28 55 L28 85 Z M28 42 L40 42 L40 28 L28 28 Z" />
          {/* b com bojo reto de corte bruto */}
          <path d="M70 15 L70 85 L115 85 C130 85 140 75 140 60 C140 50 132 45 122 43 C130 40 136 34 136 26 C136 17 128 15 112 15 Z M88 43 L108 43 C116 43 120 40 120 31 C120 23 116 23 108 23 L88 23 Z M88 77 L110 77 C118 77 122 74 122 62 C122 51 117 51 110 51 L88 51 Z" />
        </svg>
      );

    case 'cd':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* c com serifa clássica */}
          <path d="M65 30 C60 20 48 16 38 16 C22 16 12 28 12 50 C12 72 22 84 38 84 C50 84 62 76 66 65 L54 62 C50 70 44 74 38 74 C28 74 22 65 22 50 C22 35 28 26 38 26 C44 26 50 30 54 36 Z M65 22 L65 36 L52 28 Z" />
          {/* d com haste ascendente nobre */}
          <path d="M85 50 C85 30 96 16 112 16 C124 16 132 24 135 32 L135 15 L147 15 L147 84 L135 84 L135 70 C131 78 122 84 112 84 C96 84 85 70 85 50 Z M97 50 C97 66 103 74 114 74 C125 74 135 65 135 50 C135 35 125 26 114 26 C103 26 97 34 97 50 Z" />
        </svg>
      );

    case 'ef':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Fonte Seiva: traços botânicos e fluidos */}
          <path d="M15 85 L15 15 C15 15 45 12 58 20 C48 26 30 24 30 38 L54 38 C54 48 30 48 30 62 C45 62 55 58 64 68 C50 78 30 76 30 85 Z" />
          <path d="M85 85 L98 85 L98 48 C98 48 120 48 120 40 L98 40 L98 28 C98 18 108 12 125 14 C125 22 112 20 112 28 L138 28 C138 38 112 38 112 85 L125 85 L125 92 L75 92 Z" />
        </svg>
      );

    case 'gh':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* g de 2 andares humanista com orelha */}
          <path d="M50 18 C38 18 28 26 28 38 C28 48 36 54 48 55 C42 60 36 64 26 66 L26 74 C36 74 46 72 54 64 C62 72 70 76 70 84 C70 92 56 94 40 94 L40 99 C64 99 78 94 78 82 C78 70 66 64 58 60 C64 56 68 48 68 38 C68 28 62 18 50 18 Z M68 20 L76 14 L72 26 Z M50 24 C58 24 60 32 60 38 C60 46 56 50 50 50 C42 50 36 46 36 38 C36 30 42 24 50 24 Z" />
          {/* h com ombro arqueado */}
          <path d="M95 12 L105 12 L105 45 C110 38 118 34 128 34 C140 34 148 42 148 56 L148 88 L138 88 L138 58 C138 48 132 44 124 44 C114 44 105 52 105 64 L105 88 L95 88 Z" />
        </svg>
      );

    case 'ij':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Mecânica / Monospace com serifa de máquina */}
          <rect x="35" y="16" width="10" height="10" />
          <path d="M30 36 L50 36 M40 36 L40 80 M30 80 L50 80" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="square" />
          <rect x="110" y="16" width="10" height="10" />
          <path d="M100 36 L125 36 M115 36 L115 80 C115 90 105 95 90 92" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="square" />
        </svg>
      );

    case 'kl':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Bala New (Márcio Freitas) - Cortes geométricos agudos */}
          <path d="M20 15 L36 15 L36 48 L65 15 L85 15 L50 52 L88 85 L66 85 L36 57 L36 85 L20 85 Z" />
          <path d="M105 15 L121 15 L121 72 L150 72 L150 85 L105 85 Z" />
        </svg>
      );

    case 'mno':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Discórdia / Nego Bispo: Ritmo confluente afro-brasileiro */}
          <path d="M10 85 L22 85 L22 45 C22 36 28 32 36 32 C44 32 50 38 50 48 L50 85 L62 85 L62 45 C62 36 68 32 76 32 C84 32 90 38 90 48 L90 85 L102 85 L102 42 C102 26 90 20 76 20 C68 20 60 24 55 30 C50 24 42 20 34 20 C20 20 10 30 10 46 Z" />
          <path d="M125 20 C108 20 96 34 96 52 C96 70 108 86 125 86 C142 86 154 70 154 52 C154 34 142 20 125 20 Z M125 32 C134 32 140 40 140 52 C140 64 134 74 125 74 C116 74 110 64 110 52 C110 40 116 32 125 32 Z" />
        </svg>
      );

    case 'pq':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Adriane Text / Maria Firmina dos Reis - Serifa clássica literária */}
          <path d="M25 28 L37 28 L37 38 C42 30 50 25 60 25 C76 25 88 38 88 56 C88 74 76 86 60 86 C50 86 42 80 37 74 L37 100 L25 100 Z M37 56 C37 70 45 76 56 76 C66 76 74 68 74 56 C74 44 66 35 56 35 C45 35 37 42 37 56 Z" />
          <path d="M125 25 C108 25 96 38 96 56 C96 74 108 86 124 86 C134 86 142 80 147 72 L147 100 L159 100 L159 28 L147 28 L147 38 C142 30 134 25 125 25 Z M127 35 C138 35 147 44 147 56 C147 68 138 76 127 76 C116 76 108 68 108 56 C108 44 116 35 127 35 Z" />
        </svg>
      );

    case 'rs':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Sumô - Ultra Heavy Black / Massa Monumental */}
          <path d="M15 85 L42 85 L42 55 C46 58 52 60 62 60 L78 85 L105 85 L85 54 C98 50 106 38 106 24 C106 12 94 6 72 6 L15 6 Z M42 40 L42 22 L65 22 C72 22 76 25 76 31 C76 37 72 40 65 40 Z" />
          <path d="M110 70 C110 82 120 88 135 88 C150 88 158 80 158 70 C158 55 140 50 128 45 C115 40 112 34 112 28 C112 18 122 12 134 12 C146 12 155 18 156 26 L140 28 C138 24 135 22 132 22 C126 22 124 24 124 28 C124 35 135 38 145 42 C158 48 162 55 162 68 C162 82 148 95 132 95 C115 95 102 85 102 70 Z" />
        </svg>
      );

    case 'tu':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Condensada Arquitetural / Tony de Marco */}
          <path d="M20 15 L70 15 L70 28 L52 28 L52 85 L38 85 L38 28 L20 28 Z" />
          <path d="M88 15 L102 15 L102 65 C102 75 110 80 120 80 C130 80 138 75 138 65 L138 15 L152 15 L152 64 C152 82 138 90 120 90 C102 90 88 82 88 64 Z" />
        </svg>
      );

    case 'vw':
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Caligráfica / Roger Beatjesus - Inclinação e duto expressivo */}
          <path d="M15 20 L35 20 L55 75 L75 20 L92 20 L65 85 L45 85 Z" />
          <path d="M85 20 L102 20 L115 65 L130 20 L145 20 L158 65 L170 20 L185 20 L168 85 L150 85 L138 45 L124 85 L105 85 Z" transform="scale(0.85) translate(0, 5)" />
        </svg>
      );

    case 'xyz':
    default:
      return (
        <svg viewBox="0 0 160 100" className={className} fill="currentColor">
          {/* Matriz Experimental e Vazio */}
          <path d="M10 20 L30 20 L45 50 L60 20 L80 20 L55 60 L82 90 L62 90 L45 68 L28 90 L8 90 L35 58 Z" />
          <path d="M88 20 L105 20 L120 55 L135 20 L152 20 L128 72 L128 90 L112 90 L112 72 Z" />
        </svg>
      );
  }
};
