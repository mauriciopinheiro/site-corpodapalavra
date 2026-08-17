import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { FotoExposicao } from '../../tipos';

interface VisualizadorFotoProps {
  foto: FotoExposicao | null;
  onFechar: () => void;
  onAnterior?: () => void;
  onProxima?: () => void;
  indiceAtual?: number;
  totalFotos?: number;
}

export const VisualizadorFoto: React.FC<VisualizadorFotoProps> = ({
  foto,
  onFechar,
  onAnterior,
  onProxima,
  indiceAtual = 1,
  totalFotos = 32
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFechar();
      if (e.key === 'ArrowLeft' && onAnterior) onAnterior();
      if (e.key === 'ArrowRight' && onProxima) onProxima();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onFechar, onAnterior, onProxima]);

  if (!foto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-tinta/90 backdrop-blur-md animate-fadeIn">
      {/* Botão Fechar */}
      <button
        onClick={onFechar}
        className="absolute top-4 right-4 z-50 p-3 bg-papel-claro border-2 border-tinta text-tinta hover:bg-acento-vermelho hover:text-white transition-colors shadow-carimbo"
        aria-label="Fechar visualizador de imagem"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navegação Anterior / Próxima */}
      {onAnterior && (
        <button
          onClick={onAnterior}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-papel-claro border-2 border-tinta text-tinta hover:bg-tinta hover:text-papel transition-colors shadow-carimbo hidden sm:flex items-center justify-center"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onProxima && (
        <button
          onClick={onProxima}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-papel-claro border-2 border-tinta text-tinta hover:bg-tinta hover:text-papel transition-colors shadow-carimbo hidden sm:flex items-center justify-center"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Conteúdo Central */}
      <div className="max-w-4xl w-full bg-papel border-2 border-tinta shadow-carimbo-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Imagem em alta definição */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[65vh]">
          <img
            src={foto.url}
            alt={foto.titulo}
            className="max-h-full max-w-full object-contain select-none"
          />
        </div>

        {/* Legenda Editorial */}
        <div className="p-4 sm:p-6 bg-papel border-t-2 border-tinta flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-tinta text-papel-claro px-2 py-0.5 font-mono text-[10px] uppercase font-bold tracking-widest">
                FOTO {String(indiceAtual).padStart(2, '0')} / {String(totalFotos).padStart(2, '0')}
              </span>
              <span className="font-mono text-xs uppercase text-acento-vermelho font-bold flex items-center gap-1">
                <Tag className="w-3 h-3" /> {foto.categoria}
              </span>
            </div>
            <h3 className="font-serifa font-bold text-xl text-tinta">{foto.titulo}</h3>
            <p className="font-corpo text-xs sm:text-sm text-tinta-desbotada max-w-xl">
              {foto.descricao}
            </p>
          </div>

          <div className="font-mono text-[10px] text-tinta-cinza uppercase shrink-0 border-l-2 border-tinta/20 pl-3 hidden sm:block">
            <span>Sesc Santo André</span>
            <br />
            <span>corpoDApalavra</span>
          </div>
        </div>
      </div>
    </div>
  );
};
