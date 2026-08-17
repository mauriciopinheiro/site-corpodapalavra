import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { PlacaGrafica } from '../../tipos';
import { DiagramaPlacaSVG } from './DiagramaPlacaSVG';

interface VisualizadorPlacaProps {
  placa: PlacaGrafica | null;
  onFechar: () => void;
  onAnterior?: () => void;
  onProxima?: () => void;
  indiceAtual?: number;
  totalPlacas?: number;
}

export const VisualizadorPlaca: React.FC<VisualizadorPlacaProps> = ({
  placa,
  onFechar,
  onAnterior,
  onProxima,
  indiceAtual = 1,
  totalPlacas = 12
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

  if (!placa) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-tinta/90 backdrop-blur-md animate-fadeIn">
      <button
        onClick={onFechar}
        className="absolute top-4 right-4 z-50 p-3 bg-papel-claro border-2 border-tinta text-tinta hover:bg-acento-vermelho hover:text-white transition-colors shadow-carimbo"
        aria-label="Fechar visualizador"
      >
        <X className="w-6 h-6" />
      </button>

      {onAnterior && (
        <button
          onClick={onAnterior}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-papel-claro border-2 border-tinta text-tinta hover:bg-tinta hover:text-papel transition-colors shadow-carimbo hidden sm:flex items-center justify-center"
          aria-label="Placa anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onProxima && (
        <button
          onClick={onProxima}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-papel-claro border-2 border-tinta text-tinta hover:bg-tinta hover:text-papel transition-colors shadow-carimbo hidden sm:flex items-center justify-center"
          aria-label="Próxima placa"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <div className="max-w-4xl w-full bg-papel border-2 border-tinta shadow-carimbo-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Diagrama Vetorial em Alta Resolução */}
        <div className="relative flex-1 bg-papel-claro border-b-2 border-tinta flex items-center justify-center p-8 min-h-[300px] max-h-[60vh] overflow-hidden">
          <div className="absolute inset-0 textura-papel opacity-30 pointer-events-none" />
          <div className="w-full max-w-xl h-64 text-tinta">
            <DiagramaPlacaSVG tipo={placa.tipoDiagrama} />
          </div>
        </div>

        {/* Informações Técnicas da Placa */}
        <div className="p-6 bg-papel flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-tinta text-papel-claro px-2 py-0.5 font-mono text-[10px] uppercase font-bold tracking-widest">
                {placa.numero} ({String(indiceAtual).padStart(2, '0')} / {String(totalPlacas).padStart(2, '0')})
              </span>
              <span className="font-mono text-xs uppercase text-acento-vermelho font-bold flex items-center gap-1">
                <Tag className="w-3 h-3" /> {placa.categoria}
              </span>
            </div>
            <h3 className="font-anton uppercase text-2xl text-tinta">{placa.titulo}</h3>
            <p className="font-mono text-xs text-tinta-cinza">{placa.subtitulo}</p>
            <p className="font-corpo text-xs sm:text-sm text-tinta-desbotada max-w-xl pt-1">
              {placa.descricao}
            </p>
          </div>

          <div className="font-mono text-[10px] text-tinta-cinza uppercase shrink-0 border-l-2 border-tinta/20 pl-3 hidden sm:block">
            <span>Sesc Santo André • ETA</span>
            <br />
            <span>Expografia GamaH & Agudo</span>
          </div>
        </div>
      </div>
    </div>
  );
};
