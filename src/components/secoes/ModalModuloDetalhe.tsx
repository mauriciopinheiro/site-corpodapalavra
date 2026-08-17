import React from 'react';
import { X, Sparkles, Quote, BookOpen } from 'lucide-react';
import { ModuloMadeiraData } from '../../tipos';

interface ModalModuloDetalheProps {
  modulo: ModuloMadeiraData | null;
  onFechar: () => void;
}

export const ModalModuloDetalhe: React.FC<ModalModuloDetalheProps> = ({ modulo, onFechar }) => {
  if (!modulo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tinta/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-papel border-2 border-tinta shadow-carimbo-lg p-6 sm:p-8">
        {/* Botão Fechar */}
        <button
          onClick={onFechar}
          className="absolute top-4 right-4 p-2 bg-papel-claro border-2 border-tinta hover:bg-tinta hover:text-papel-claro transition-colors shadow-carimbo"
          aria-label="Fechar detalhe do módulo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cabeçalho */}
        <div className="flex items-center gap-3 font-mono text-xs text-tinta uppercase font-bold border-b-2 border-tinta pb-3 mb-6">
          <span className="bg-tinta text-papel px-2 py-0.5">MÓDULO #{String(modulo.id).padStart(2, '0')}</span>
          <span>LINHA {modulo.linha} × COLUNA {modulo.coluna}</span>
          <span className="text-acento-vermelho ml-auto">{modulo.categoria}</span>
        </div>

        {/* Caractere Gigante em Foco */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <div className="w-32 h-32 flex items-center justify-center bg-madeira border-2 border-tinta shadow-carimbo shrink-0 textura-madeira">
            <span className="text-7xl font-serifa font-bold text-tinta leading-none">
              {modulo.letra}
            </span>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="font-mono text-xs text-tinta-cinza uppercase">Conceito Tipográfico</span>
            <h3 className="font-anton uppercase text-4xl text-tinta tracking-tight">
              {modulo.termo}
            </h3>
            {modulo.autorOuFonte && (
              <p className="font-mono text-xs text-tinta-desbotada flex items-center gap-1 justify-center sm:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-acento-vermelho" />
                {modulo.autorOuFonte}
              </p>
            )}
          </div>
        </div>

        {/* Descrição e Detalhe Anatômico */}
        <div className="space-y-4 border-t-2 border-tinta/20 pt-4 mb-6">
          <div>
            <span className="font-mono text-[11px] uppercase font-bold text-tinta-cinza block mb-1">
              Definição & Função
            </span>
            <p className="font-corpo text-base text-tinta leading-relaxed">
              {modulo.descricao}
            </p>
          </div>

          {modulo.detalheAnatomico && (
            <div className="p-3 bg-madeira/30 border-l-4 border-tinta">
              <span className="font-mono text-[10px] uppercase font-bold text-tinta block mb-0.5">
                Pormenor Construtivo
              </span>
              <p className="font-corpo text-xs text-tinta italic">
                {modulo.detalheAnatomico}
              </p>
            </div>
          )}

          {modulo.citacao && (
            <div className="p-4 bg-papel-claro border-2 border-tinta shadow-carimbo">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold text-acento-vermelho mb-1">
                <Quote className="w-3.5 h-3.5" /> Excerto Literário
              </div>
              <p className="font-serifa italic text-sm text-tinta">
                {modulo.citacao}
              </p>
            </div>
          )}
        </div>

        {/* Rodapé do Modal */}
        <div className="flex items-center justify-between border-t-2 border-tinta pt-4 font-mono text-xs text-tinta-cinza uppercase">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" /> oSERtipografia — Sesc Santo André
          </span>
          <button
            onClick={onFechar}
            className="font-bold underline hover:text-tinta text-tinta"
          >
            Fechar janela [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
