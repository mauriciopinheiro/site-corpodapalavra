import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Rodape: React.FC = () => {
  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-papel-escuro border-t-2 border-tinta pt-12 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Título & Declaração de Matéria */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <div className="flex items-baseline gap-1">
            <span className="font-serifa italic text-2xl lowercase">corpo</span>
            <span className="font-mono text-xs font-bold uppercase text-tinta-cinza">DA</span>
            <span className="font-anton text-4xl uppercase tracking-tighter">palavra</span>
          </div>
          <p className="font-serifa italic text-tinta-desbotada text-base max-w-md">
            “A palavra ganha corpo quando a matéria do mundo acolhe o traço humano.”
          </p>
          <div className="font-mono text-xs uppercase text-tinta-cinza space-y-1">
            <p>Espaço de Tecnologias e Artes — ETA</p>
            <p>Sesc Santo André — São Paulo, Brasil</p>
          </div>
        </div>

        {/* Links Rápidos */}
        <div className="md:col-span-4 flex flex-col gap-2 font-mono text-xs uppercase">
          <span className="font-bold border-b border-tinta/30 pb-1 mb-1 text-tinta">Índice Geral</span>
          <a href="#sobre" className="hover:text-acento-vermelho transition-colors">Sobre a Exposição</a>
          <a href="#manifesto" className="hover:text-acento-vermelho transition-colors">Manifesto oSERgráfica</a>
          <a href="#dois-seres" className="hover:text-acento-vermelho transition-colors">oSERlivro & oSERtipografia</a>
          <a href="#parede" className="hover:text-acento-vermelho transition-colors">Parede Modular de 36 Blocos</a>
          <a href="#galeria" className="hover:text-acento-vermelho transition-colors">Galeria Documental</a>
          <a href="#creditos" className="hover:text-acento-vermelho transition-colors">Ficha Técnica & Créditos</a>
        </div>

        {/* Voltar ao topo */}
        <div className="md:col-span-2 flex md:justify-end">
          <button
            onClick={voltarAoTopo}
            className="flex items-center gap-2 font-mono text-xs uppercase font-bold border-2 border-tinta bg-papel-claro p-3 shadow-carimbo hover:bg-tinta hover:text-papel transition-all"
            aria-label="Voltar ao início da página"
          >
            <span>Topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Linha final */}
      <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-tinta/20 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[11px] text-tinta-cinza uppercase">
        <span>Gráfica Experimental × Estúdio Agudo × GamaH × Sesc Santo André</span>
        <span>© Todos os direitos reservados aos autores e curadores</span>
      </div>
    </footer>
  );
};
