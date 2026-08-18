import React from 'react';
import { MATRIZES_CARIMBO, ALMOFADAS_TINTA, MatrizCarimbo } from '../../../dados/dadosCarimbos';
import { RotateCw } from 'lucide-react';

interface PropsBandeja {
  matrizSelecionada: MatrizCarimbo;
  onSelecionarMatriz: (m: MatrizCarimbo) => void;
  corSelecionada: string;
  onSelecionarCor: (hex: string) => void;
  rotacao: number;
  onGirar: () => void;
  escala: number;
  onAlterarEscala: (esc: number) => void;
  opacidade: number;
  onAlterarOpacidade: (op: number) => void;
}

export const BandejaMatrizes: React.FC<PropsBandeja> = ({
  matrizSelecionada,
  onSelecionarMatriz,
  corSelecionada,
  onSelecionarCor,
  rotacao,
  onGirar,
  escala,
  onAlterarEscala,
  opacidade,
  onAlterarOpacidade
}) => {
  return (
    <div className="bg-papel border-2 border-tinta shadow-carimbo p-4 sm:p-5 flex flex-col gap-5">
      {/* 1. Almofadas de Tinta Pigmentar */}
      <div>
        <span className="font-mono text-xs uppercase font-bold text-tinta-cinza block mb-2">
          1. Almofada de Tinta (Pigmento):
        </span>
        <div className="flex flex-wrap gap-2">
          {ALMOFADAS_TINTA.map(almofada => (
            <button
              key={almofada.id}
              onClick={() => onSelecionarCor(almofada.corHex)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 border-2 text-xs font-mono font-bold transition-all ${
                corSelecionada === almofada.corHex
                  ? 'border-tinta shadow-carimbo scale-105 bg-papel-claro'
                  : 'border-tinta/30 hover:border-tinta bg-papel'
              }`}
            >
              <span className="w-4 h-4 rounded-full border border-tinta/40 shadow-inner" style={{ backgroundColor: almofada.corHex }} />
              <span className="text-tinta">{almofada.nome}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Seleção de Matrizes de Carimbo */}
      <div>
        <span className="font-mono text-xs uppercase font-bold text-tinta-cinza block mb-2">
          2. Matriz Gravada do Atelier:
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {MATRIZES_CARIMBO.map(matriz => {
            const ativa = matrizSelecionada.id === matriz.id;
            return (
              <button
                key={matriz.id}
                onClick={() => onSelecionarMatriz(matriz)}
                className={`p-2 border-2 flex flex-col items-center justify-between min-h-[85px] transition-all ${
                  ativa
                    ? 'border-tinta bg-madeira shadow-carimbo font-bold'
                    : 'border-tinta/20 bg-papel-claro hover:border-tinta'
                }`}
                title={matriz.descricao}
              >
                <svg width="40" height="40" viewBox={`0 0 ${matriz.largura} ${matriz.altura}`} className="my-auto">
                  <path d={matriz.svgPath} fill={corSelecionada} stroke={corSelecionada} strokeWidth="2" />
                </svg>
                <span className="font-mono text-[9px] uppercase text-tinta text-center leading-tight line-clamp-1">
                  {matriz.nome}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Controles Físicos do Bloco (Girar, Escala, Pressão) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-tinta/20 font-mono text-xs">
        {/* Rotação */}
        <div className="flex items-center justify-between sm:flex-col sm:items-start gap-1">
          <span className="text-tinta-cinza uppercase font-bold">Giro ({rotacao}°):</span>
          <button
            onClick={onGirar}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-papel-claro border-2 border-tinta shadow-carimbo font-bold text-tinta hover:bg-madeira transition-all"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Girar +45°</span>
          </button>
        </div>

        {/* Escala */}
        <div className="flex items-center justify-between sm:flex-col sm:items-start gap-1">
          <span className="text-tinta-cinza uppercase font-bold">Escala ({Math.round(escala * 100)}%):</span>
          <div className="flex gap-1">
            {[0.7, 1.0, 1.4].map(esc => (
              <button
                key={esc}
                onClick={() => onAlterarEscala(esc)}
                className={`px-2 py-1 border font-bold ${
                  escala === esc ? 'bg-tinta text-papel border-tinta' : 'bg-papel border-tinta/40 hover:border-tinta text-tinta'
                }`}
              >
                {esc === 0.7 ? 'P' : esc === 1.0 ? 'M' : 'G'}
              </button>
            ))}
          </div>
        </div>

        {/* Pressão de Tinta */}
        <div className="flex items-center justify-between sm:flex-col sm:items-start gap-1">
          <span className="text-tinta-cinza uppercase font-bold">Carga de Tinta:</span>
          <div className="flex gap-1">
            {[1.0, 0.75, 0.45].map(op => (
              <button
                key={op}
                onClick={() => onAlterarOpacidade(op)}
                className={`px-2 py-1 border font-bold ${
                  opacidade === op ? 'bg-tinta text-papel border-tinta' : 'bg-papel border-tinta/40 hover:border-tinta text-tinta'
                }`}
              >
                {op === 1.0 ? '100%' : op === 0.75 ? '75%' : '45%'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
