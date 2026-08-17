import React from 'react';

interface EtiquetaAtelierProps {
  texto: string;
  subtexto?: string;
  variante?: 'escuro' | 'claro' | 'madeira' | 'vermelho';
  rotacao?: string; // ex: '-rotate-2' ou 'rotate-1'
  className?: string;
}

export const EtiquetaAtelier: React.FC<EtiquetaAtelierProps> = ({
  texto,
  subtexto,
  variante = 'escuro',
  rotacao = '',
  className = ''
}) => {
  const estilosVariante = {
    escuro: 'bg-tinta text-papel-claro border-tinta',
    claro: 'bg-papel-claro text-tinta border-tinta shadow-carimbo',
    madeira: 'bg-madeira text-tinta border-tinta shadow-carimbo',
    vermelho: 'bg-acento-vermelho text-white border-acento-vermelho shadow-carimbo'
  };

  return (
    <div
      className={`inline-flex flex-col px-2.5 py-1 border text-xs uppercase font-mono tracking-wider transition-transform ${estilosVariante[variante]} ${rotacao} ${className}`}
    >
      <span className="font-bold">{texto}</span>
      {subtexto && (
        <span className="text-[10px] opacity-80 normal-case tracking-normal">
          {subtexto}
        </span>
      )}
    </div>
  );
};
