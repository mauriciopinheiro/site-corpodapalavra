import React, { useState } from 'react';
import { useExposicao } from '../../../contexto/ContextoExposicao';
import { Scroll, Sparkles } from 'lucide-react';

export const PergaminhoRolo: React.FC = () => {
  const { tocarSom, registrarMaterial } = useExposicao();
  const [extensao, setExtensao] = useState<number>(45);

  const handleScrollChange = (val: number) => {
    setExtensao(val);
    if (val % 15 === 0) tocarSom('papel');
    registrarMaterial('pergaminho');
  };

  return (
    <div className="relative w-full h-[320px] bg-[#EAE2D3] border-4 border-[#8C7A60] shadow-carimbo-lg p-6 flex flex-col justify-between select-none overflow-hidden">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between font-mono text-xs uppercase text-[#5C4D38] border-b border-[#8C7A60]/40 pb-2">
        <span className="font-bold flex items-center gap-1">
          <Scroll className="w-3.5 h-3.5" /> Rotulus Medieval • Pele de Vitelo Esticada
        </span>
        <span>Desenrolado: {extensao}%</span>
      </div>

      {/* Rolo de Pergaminho Animado que se Estica e Revela a Iluminura */}
      <div className="relative my-auto flex items-center justify-center overflow-hidden py-4">
        <div
          className="bg-[#F7F2E7] border-y-2 border-[#8C7A60] shadow-carimbo transition-all duration-150 p-6 flex items-center justify-start overflow-hidden"
          style={{ width: `${Math.max(30, extensao)}%`, minWidth: '180px' }}
        >
          <div className="whitespace-nowrap font-serifa italic text-2xl sm:text-3xl text-[#2B2318] leading-none">
            <span className="text-4xl text-acento-vermelho font-black not-italic mr-2">I</span>
            n principio erat Verbum et Verbum erat apud Deum
          </div>
        </div>

        {/* Cilindro da extremidade do rolo */}
        <div className="w-6 h-36 bg-[#8C7A60] border-2 border-[#5C4D38] rounded-r-md shadow-carimbo flex items-center justify-center -ml-1 z-10 shrink-0">
          <div className="w-1.5 h-28 bg-[#5C4D38] rounded-full" />
        </div>
      </div>

      {/* Controle Físico de Tração do Rolo */}
      <div className="space-y-2 pt-2 border-t border-[#8C7A60]/40 font-mono text-xs text-[#5C4D38]">
        <div className="flex justify-between items-center">
          <label className="font-bold uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-acento-vermelho" /> Arraste para desenrolar o manuscrito:
          </label>
          <span className="text-xs font-bold">{extensao}%</span>
        </div>
        <input
          type="range"
          min="20"
          max="100"
          value={extensao}
          onChange={(e) => handleScrollChange(Number(e.target.value))}
          className="w-full accent-[#5C4D38] cursor-ew-resize"
        />
      </div>
    </div>
  );
};
