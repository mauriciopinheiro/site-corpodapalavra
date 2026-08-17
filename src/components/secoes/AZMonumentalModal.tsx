import React, { useEffect } from 'react';
import { GrupoAZReal } from '../../dados/dadosAZReal';
import { GlifoSVG } from './GlifosSVG';
import { Sparkles, Quote, Minimize2 } from 'lucide-react';

interface AZMonumentalModalProps {
  grupo: GrupoAZReal | null;
  onFechar: () => void;
}

export const AZMonumentalModal: React.FC<AZMonumentalModalProps> = ({ grupo, onFechar }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFechar();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onFechar]);

  if (!grupo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-tinta/95 backdrop-blur-md flex flex-col justify-between p-6 sm:p-12 animate-fadeIn text-papel-claro select-none overflow-y-auto">
      {/* Topo do Modo Monumental */}
      <div className="w-full flex items-center justify-between border-b-2 border-papel/30 pb-4">
        <div className="flex items-center gap-3">
          <span className="bg-papel text-tinta px-3 py-1 font-mono text-xs font-black uppercase">
            MÓDULO #{String(grupo.id).padStart(2, '0')}
          </span>
          <span className="font-mono text-xs text-acento-amarelo uppercase font-bold tracking-widest">
            {grupo.conceito}
          </span>
        </div>

        <button
          onClick={onFechar}
          className="flex items-center gap-2 bg-papel-claro text-tinta px-4 py-2 border-2 border-papel font-mono text-xs uppercase font-bold hover:bg-acento-vermelho hover:text-white transition-all shadow-carimbo-branco"
          aria-label="Fechar visualização monumental"
        >
          <Minimize2 className="w-4 h-4" />
          <span className="hidden sm:inline">Retornar à Parede [ESC]</span>
        </button>
      </div>

      {/* Centro Monumental: O Glifo em Escala Gigantesca */}
      <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full">
        {/* Escultura Vetorial do Glifo */}
        <div className="lg:col-span-7 h-[360px] sm:h-[480px] bg-madeira border-4 border-papel shadow-carimbo-branco p-8 sm:p-12 flex items-center justify-center text-tinta relative overflow-hidden">
          <div className="absolute inset-0 textura-madeira opacity-40 pointer-events-none" />
          <div className="w-full h-full max-w-md max-h-md flex items-center justify-center">
            <GlifoSVG grupo={grupo.letras} className="w-full h-full scale-125" />
          </div>
        </div>

        {/* Laudo Curatorial e Monumento */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="font-mono text-xs uppercase text-papel/60 block">Fonte & Autoria:</span>
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight text-papel-claro mt-1">
              {grupo.fonte}
            </h2>
            <p className="font-mono text-xs text-acento-amarelo mt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {grupo.autorOuReferencia}
            </p>
          </div>

          <p className="font-corpo text-base text-papel/90 leading-relaxed border-l-2 border-papel/40 pl-4 py-1">
            {grupo.descricao}
          </p>

          {grupo.citacaoOuPensamento && (
            <div className="p-6 bg-tinta-suave border-2 border-papel/40 shadow-carimbo-branco space-y-2">
              <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-acento-vermelho font-bold">
                <Quote className="w-4 h-4" /> {grupo.autorCitacao || 'Voz da Exposição'}
              </div>
              <p className="font-serifa italic text-base sm:text-lg text-papel leading-snug">
                “{grupo.citacaoOuPensamento}”
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Rodapé do Monumento */}
      <div className="w-full border-t-2 border-papel/30 pt-4 flex items-center justify-between font-mono text-xs text-papel/60">
        <span>“O caractere permanece; o corpo muda.”</span>
        <span>oSERtipografia • Sesc Santo André</span>
      </div>
    </div>
  );
};
