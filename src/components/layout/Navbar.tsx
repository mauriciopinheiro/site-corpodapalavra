import React, { useState } from 'react';
import { Menu, X, Volume2, VolumeX, Eye, Sparkles, MapPin, Stamp } from 'lucide-react';
import { useExposicao } from '../../contexto/ContextoExposicao';

export const Navbar: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const { modo, alternarModo, audioAtivo, alternarAudio } = useExposicao();

  const linksNav = [
    { label: 'sobre', href: '#sobre' },
    { label: 'oSERgráfica', href: '#manifesto' },
    { label: 'oSERlivro', href: '#dois-seres' },
    { label: 'materiais', href: '#materiais' },
    { label: 'carimbos', href: '#carimbos' },
    { label: 'A–Z real', href: '#az-modular' },
    { label: '12 excertos', href: '#literatura-12' },
    { label: 'acervo', href: '#acervo-catalogo' },
    { label: 'anatomia', href: '#anatomia' },
    { label: 'pranchas', href: '#galeria' },
    { label: 'créditos', href: '#creditos' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-papel/95 backdrop-blur-sm border-b-2 border-tinta">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
        {/* Logo / Título Conceitual */}
        <a
          href="#"
          className="group flex items-baseline gap-1 text-tinta select-none shrink-0"
          aria-label="corpoDApalavra - Início"
        >
          <span className="font-serifa italic font-normal text-lg sm:text-xl md:text-2xl lowercase tracking-tight">corpo</span>
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-tinta-cinza">DA</span>
          <span className="font-anton text-xl sm:text-2xl md:text-3xl uppercase tracking-tighter group-hover:text-acento-vermelho transition-colors">palavra</span>
        </a>

        {/* Links de navegação Desktop */}
        <nav className="hidden xl:flex items-center gap-3 2xl:gap-5" aria-label="Navegação Principal">
          {linksNav.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] 2xl:text-xs uppercase tracking-wider text-tinta hover:text-acento-vermelho hover:underline underline-offset-4 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controles de Modo LER/EXP, Som, Carimbos e Visite */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href="#carimbos"
            className="hidden lg:inline-flex items-center gap-1 px-2 py-1 border-2 border-tinta bg-papel-claro font-mono text-[11px] uppercase font-bold text-tinta hover:bg-madeira transition-all shadow-carimbo"
            title="Abrir Atelier de Carimbos"
          >
            <Stamp className="w-3.5 h-3.5 text-acento-vermelho" />
            <span>Atelier</span>
          </a>

          <button
            onClick={alternarModo}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 border-2 border-tinta font-mono text-[10px] sm:text-xs uppercase font-bold transition-all ${
              modo === 'ler'
                ? 'bg-madeira text-tinta shadow-carimbo'
                : 'bg-tinta text-papel-claro shadow-carimbo'
            }`}
            aria-label={`Modo atual: ${modo}`}
          >
            {modo === 'ler' ? <Eye className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5 text-acento-amarelo" />}
            <span className="hidden xs:inline">{modo === 'ler' ? 'MODO: LER' : 'MODO: EXP'}</span>
          </button>

          <button
            onClick={alternarAudio}
            className="p-1 sm:p-1.5 border-2 border-tinta bg-papel-claro text-tinta hover:bg-madeira transition-colors"
            aria-label={audioAtivo ? 'Desativar sons' : 'Ativar sons'}
          >
            {audioAtivo ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 text-acento-vermelho" />}
          </button>

          <a
            href="#visite"
            className="hidden sm:inline-flex items-center gap-1 bg-papel text-tinta border-2 border-tinta px-2.5 py-1 font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-tinta hover:text-papel-claro transition-all"
          >
            <MapPin className="w-3 h-3" />
            <span>visite</span>
          </a>

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="xl:hidden p-1.5 text-tinta border-2 border-tinta bg-papel hover:bg-tinta hover:text-papel transition-colors"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuAberto ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Drawer Mobile */}
      {menuAberto && (
        <div
          role="dialog"
          aria-modal="true"
          className="xl:hidden fixed inset-x-0 top-[53px] bg-papel border-b-2 border-tinta p-5 shadow-carimbo-lg z-50 max-h-[85vh] overflow-y-auto"
        >
          <ul className="flex flex-col gap-2">
            {linksNav.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="font-mono text-xs uppercase text-tinta flex items-center justify-between p-2 hover:bg-madeira/30 border-l-2 border-transparent hover:border-tinta"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-tinta-cinza">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
