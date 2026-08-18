import React from 'react';
import { ArrowUp, Mail, UserCheck } from 'lucide-react';
import { AUTORIA_PROJETO_VIRTUAL } from '../../dados/dadosCreditos';

export const Rodape: React.FC = () => {
  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-tinta text-papel py-12 px-4 md:px-8 border-t-4 border-tinta selection:bg-papel selection:text-tinta">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-papel/20 pb-8">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serifa italic text-3xl sm:text-4xl text-papel">corpo</span>
            <span className="font-mono text-sm font-bold text-acento-vermelho">DA</span>
            <span className="font-anton text-4xl sm:text-5xl text-papel uppercase tracking-tight">palavra</span>
          </div>
          <p className="font-serifa italic text-sm text-papel/80 max-w-md">
            Exposição de Artes Gráficas e Tipografia • Espaço de Tecnologias e Artes do Sesc Santo André.
          </p>
        </div>

        {/* Autoria do Projeto Virtual no Rodapé */}
        <div className="bg-tinta-suave border border-papel/30 p-4 space-y-1 font-mono text-xs max-w-md">
          <span className="text-acento-amarelo font-bold uppercase flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5" /> Concepção & Implementação Virtual
          </span>
          <p className="font-bold text-papel text-sm">{AUTORIA_PROJETO_VIRTUAL.autor}</p>
          <p className="text-papel/70 text-[11px]">{AUTORIA_PROJETO_VIRTUAL.cargo}</p>
          <a
            href={`mailto:${AUTORIA_PROJETO_VIRTUAL.email}`}
            className="inline-flex items-center gap-1 text-acento-amarelo hover:underline pt-1 text-[11px]"
          >
            <Mail className="w-3 h-3" /> {AUTORIA_PROJETO_VIRTUAL.email}
          </a>
        </div>

        <button
          onClick={voltarAoTopo}
          className="self-start md:self-end inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-papel hover:text-acento-amarelo border border-papel/40 px-3 py-2 hover:border-papel transition-colors"
        >
          <span>Retornar ao Topo</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-papel/60">
        <span>© 2024–2026 Sesc São Paulo • Espaço de Tecnologias e Artes</span>
        <span>Tipografia como corpo, matéria, gesto, ritmo e espaço</span>
      </div>
    </footer>
  );
};
