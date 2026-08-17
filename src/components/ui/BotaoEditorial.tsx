import React from 'react';

interface BotaoEditorialProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variante?: 'primario' | 'secundario' | 'madeira' | 'fantasma';
  tamanho?: 'sm' | 'md' | 'lg';
  icone?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const BotaoEditorial: React.FC<BotaoEditorialProps> = ({
  children,
  onClick,
  href,
  variante = 'primario',
  tamanho = 'md',
  icone,
  className = '',
  target,
  rel
}) => {
  const estilosVariante = {
    primario: 'bg-tinta text-papel-claro border-2 border-tinta hover:bg-papel hover:text-tinta shadow-carimbo active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
    secundario: 'bg-papel-claro text-tinta border-2 border-tinta hover:bg-tinta hover:text-papel-claro shadow-carimbo active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
    madeira: 'bg-madeira text-tinta border-2 border-tinta hover:bg-madeira-escura shadow-carimbo active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
    fantasma: 'bg-transparent text-tinta border-b-2 border-tinta hover:bg-tinta hover:text-papel-claro transition-colors'
  };

  const estilosTamanho = {
    sm: 'px-3 py-1.5 text-xs font-mono tracking-wider',
    md: 'px-5 py-2.5 text-sm font-mono tracking-wider',
    lg: 'px-7 py-3.5 text-base font-mono tracking-widest'
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 uppercase font-bold transition-all select-none cursor-pointer ${estilosVariante[variante]} ${estilosTamanho[tamanho]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} target={target} rel={rel}>
        <span>{children}</span>
        {icone && <span className="inline-block transition-transform group-hover:translate-x-1">{icone}</span>}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} type="button">
      <span>{children}</span>
      {icone && <span className="inline-block transition-transform group-hover:translate-x-1">{icone}</span>}
    </button>
  );
};
