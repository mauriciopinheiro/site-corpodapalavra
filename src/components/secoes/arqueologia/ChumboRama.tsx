import React, { useState } from 'react';
import { useExposicao } from '../../../contexto/ContextoExposicao';
import { Lock, Unlock, RotateCcw, Sparkles } from 'lucide-react';

export const ChumboRama: React.FC = () => {
  const { tocarSom, registrarMaterial } = useExposicao();
  const [letrasDisponiveis, setLetrasDisponiveis] = useState<string[]>(['G', 'E', 'S', 'T', 'O']);
  const [letrasNaRama, setLetrasNaRama] = useState<string[]>([]);
  const [travado, setTravado] = useState<boolean>(false);

  const encaixarTipo = (letra: string, idx: number) => {
    if (travado) return;
    tocarSom('chumbo');
    registrarMaterial('chumbo');
    setLetrasNaRama(prev => [...prev, letra]);
    setLetrasDisponiveis(prev => prev.filter((_, i) => i !== idx));
  };

  const travarRama = () => {
    tocarSom('chumbo');
    setTravado(!travado);
  };

  const reiniciar = () => {
    setLetrasDisponiveis(['G', 'E', 'S', 'T', 'O']);
    setLetrasNaRama([]);
    setTravado(false);
    tocarSom('papel');
  };

  return (
    <div className="relative w-full h-[320px] bg-[#222326] border-4 border-[#121314] shadow-carimbo-lg p-6 flex flex-col justify-between select-none overflow-hidden">
      <div className="flex items-center justify-between font-mono text-xs uppercase text-[#C2C5CC] border-b border-[#3D4047] pb-2">
        <span className="font-bold">Rama Tipográfica de Ferro & Tipos de Chumbo</span>
        <span className="text-acento-amarelo font-bold">{travado ? 'RAMA PRENSADA E TRAVADA' : 'CANALETA ABERTA'}</span>
      </div>

      {/* Canaleta Central da Rama */}
      <div className="relative my-auto flex flex-col items-center justify-center gap-4 py-2">
        {/* Gaveta / Rama de Ferro onde os tipos se travam */}
        <div className={`w-full max-w-md h-20 bg-[#16171A] border-4 ${travado ? 'border-acento-amarelo' : 'border-[#444852]'} p-2 flex items-center justify-center gap-2 shadow-inner transition-colors duration-200`}>
          {letrasNaRama.length === 0 ? (
            <span className="font-mono text-xs text-[#626673] uppercase">
              [ Clique nos tipos soltos abaixo para compor na rama ]
            </span>
          ) : (
            letrasNaRama.map((l, i) => (
              <div
                key={i}
                className="w-10 h-14 bg-[#4A4E59] border-2 border-[#828899] shadow-carimbo flex items-center justify-center font-anton text-2xl text-papel"
                style={{ transform: travado ? 'scale(0.98)' : 'scale(1)' }}
              >
                {l}
              </div>
            ))
          )}
        </div>

        {/* Caixa de Tipos Móveis Soltos */}
        <div className="flex items-center gap-2">
          {letrasDisponiveis.map((letra, idx) => (
            <button
              key={idx}
              onClick={() => encaixarTipo(letra, idx)}
              className="w-10 h-12 bg-[#363940] hover:bg-[#5C6270] border-2 border-[#6F7585] shadow-carimbo flex items-center justify-center font-anton text-xl text-papel transition-all active:translate-y-1"
              title="Encaixar tipo na rama"
            >
              {letra}
            </button>
          ))}
        </div>
      </div>

      {/* Controles de Travamento da Cunha */}
      <div className="flex items-center justify-between font-mono text-xs text-[#C2C5CC] pt-2 border-t border-[#3D4047]">
        <span className="flex items-center gap-1 font-bold">
          <Sparkles className="w-3.5 h-3.5 text-acento-amarelo" /> O chumbo exige ângulo reto e travamento sob cunha
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={travarRama}
            disabled={letrasNaRama.length === 0}
            className={`px-3 py-1 border font-bold uppercase flex items-center gap-1 transition-all ${
              travado
                ? 'bg-acento-amarelo text-tinta border-acento-amarelo'
                : 'bg-[#363940] text-papel border-[#6F7585] hover:bg-tinta'
            }`}
          >
            {travado ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
            <span>{travado ? 'Destravar' : 'Travar Rama'}</span>
          </button>
          <button onClick={reiniciar} className="hover:underline flex items-center gap-1 text-[11px]">
            <RotateCcw className="w-3 h-3" /> Esvaziar
          </button>
        </div>
      </div>
    </div>
  );
};
