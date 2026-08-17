import React, { useState } from 'react';
import { useExposicao } from '../../../contexto/ContextoExposicao';
import { Sliders, Sparkles, Grid } from 'lucide-react';

export const TelaVariavel: React.FC = () => {
  const { registrarMaterial } = useExposicao();
  const [peso, setPeso] = useState<number>(600);
  const [largura, setLargura] = useState<number>(100);
  const [inclinacao, setInclinacao] = useState<number>(0);
  const [modoPixel, setModoPixel] = useState<boolean>(false);

  const handleUpdate = () => {
    registrarMaterial('tela');
  };

  return (
    <div className="relative w-full h-[320px] bg-[#111] border-4 border-[#333] shadow-carimbo-lg p-6 flex flex-col justify-between select-none overflow-hidden text-white">
      <div className="flex items-center justify-between font-mono text-xs uppercase text-[#AAA] border-b border-[#333] pb-2">
        <span className="font-bold flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-acento-amarelo" /> Tipografia Variável Digital • Eixos Contínuos
        </span>
        <button
          onClick={() => setModoPixel(!modoPixel)}
          className={`px-2 py-0.5 border text-[10px] font-mono uppercase flex items-center gap-1 ${
            modoPixel ? 'bg-acento-amarelo text-black border-acento-amarelo font-bold' : 'border-[#555] text-[#AAA]'
          }`}
        >
          <Grid className="w-3 h-3" /> Grade de Pixel
        </button>
      </div>

      {/* Palavra Reativa em Tempo Real */}
      <div className="relative my-auto text-center py-2 overflow-hidden">
        <div
          className={`text-4xl sm:text-6xl text-white transition-transform duration-75 uppercase ${
            modoPixel ? 'font-mono tracking-widest' : 'font-corpo'
          }`}
          style={{
            fontWeight: peso,
            transform: `scaleX(${largura / 100}) skewX(${inclinacao}deg)`
          }}
        >
          MUTÁVEL
        </div>
      </div>

      {/* 3 Sliders de Eixos Variáveis */}
      <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#333] font-mono text-[10px] uppercase text-[#AAA]">
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Peso (wght):</span>
            <span className="font-bold text-white">{peso}</span>
          </div>
          <input
            type="range" min="100" max="900" value={peso}
            onChange={(e) => { setPeso(Number(e.target.value)); handleUpdate(); }}
            className="w-full accent-acento-amarelo"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Largura (wdth):</span>
            <span className="font-bold text-white">{largura}%</span>
          </div>
          <input
            type="range" min="60" max="140" value={largura}
            onChange={(e) => { setLargura(Number(e.target.value)); handleUpdate(); }}
            className="w-full accent-acento-amarelo"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Inclinação (slnt):</span>
            <span className="font-bold text-white">{inclinacao}°</span>
          </div>
          <input
            type="range" min="-15" max="15" value={inclinacao}
            onChange={(e) => { setInclinacao(Number(e.target.value)); handleUpdate(); }}
            className="w-full accent-acento-amarelo"
          />
        </div>
      </div>

      <div className="font-mono text-[10px] text-[#777] flex items-center justify-between pt-1 border-t border-[#222]">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-acento-amarelo" /> A tela desmaterializa a matriz e transforma o corpo em interpolação matemática contínua
        </span>
      </div>
    </div>
  );
};
