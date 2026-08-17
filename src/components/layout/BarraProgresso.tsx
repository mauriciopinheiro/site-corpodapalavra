import React from 'react';
import { useProgressoScroll } from '../../hooks/useProgressoScroll';

export const BarraProgresso: React.FC = () => {
  const progresso = useProgressoScroll();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-papel-escuro z-[100] pointer-events-none">
      <div
        className="h-full bg-tinta transition-all duration-75 ease-out"
        style={{ width: `${progresso}%` }}
      />
    </div>
  );
};
