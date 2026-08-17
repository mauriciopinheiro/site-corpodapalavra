import React, { useState } from 'react';
import { useExposicao } from '../../../contexto/ContextoExposicao';
import { Hammer, Sparkles, RotateCcw } from 'lucide-react';

interface Lasca {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const PedraEntalhe: React.FC = () => {
  const { tocarSom, registrarMaterial } = useExposicao();
  const [golpes, setGolpes] = useState<number>(0);
  const [sulcos, setSulcos] = useState<{ x: number; y: number }[]>([]);
  const [lascas, setLascas] = useState<Lasca[]>([]);

  const baterCinzel = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    tocarSom('pedra');
    registrarMaterial('pedra');
    setGolpes(prev => prev + 1);
    setSulcos(prev => [...prev, { x, y }]);

    // Gerar partículas/lascas que voam com o impacto
    const novasLascas: Lasca[] = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      vx: (Math.random() - 0.5) * 120,
      vy: (Math.random() - 0.7) * 100
    }));
    setLascas(novasLascas);
    setTimeout(() => setLascas([]), 600);
  };

  const limpar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGolpes(0);
    setSulcos([]);
    tocarSom('papel');
  };

  return (
    <div
      onClick={baterCinzel}
      className="relative w-full h-[320px] bg-[#3A3835] border-4 border-[#22201E] shadow-carimbo-lg p-6 flex flex-col justify-between select-none cursor-crosshair overflow-hidden group"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #4A4743 0%, #2A2825 100%)'
      }}
    >
      {/* Informação Superior */}
      <div className="flex items-center justify-between font-mono text-xs uppercase text-[#B8B4AE] border-b border-[#55524D] pb-2 z-10">
        <span className="flex items-center gap-1.5 text-acento-amarelo font-bold">
          <Hammer className="w-3.5 h-3.5" /> Golpeie para entalhar
        </span>
        <span>{golpes} Golpes de Cinzel</span>
      </div>

      {/* Bloco de Mármore com as Inscrições Entalhadas em Sulcos Reais */}
      <div className="relative my-auto text-center z-10">
        <div
          className="text-6xl sm:text-8xl font-serifa font-black tracking-widest text-[#1F1D1B] transition-all duration-200"
          style={{
            textShadow: golpes > 0
              ? `inset 2px 2px 4px #000, 1px 1px 0px rgba(255,255,255,${Math.min(0.8, golpes * 0.1)})`
              : 'none',
            color: golpes > 3 ? '#151413' : '#33312E'
          }}
        >
          IMPERIUM
        </div>
        <p className="font-mono text-xs text-[#9E9A93] mt-2">
          {golpes === 0 ? '[ Toque em qualquer ponto da pedra para bater o cinzel ]' : 'Sulco triangular em V esculpido sob resistência mineral'}
        </p>
      </div>

      {/* Sulcos e marcas de impacto reais */}
      {sulcos.map((s, idx) => (
        <div
          key={idx}
          className="absolute w-3 h-3 bg-[#181615] rounded-full border border-white/20 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ left: s.x, top: s.y, boxShadow: 'inset 1px 1px 2px #000' }}
        />
      ))}

      {/* Partículas de pedra voando */}
      {lascas.map(l => (
        <div
          key={l.id}
          className="absolute w-1.5 h-1.5 bg-[#D4CFCA] pointer-events-none rounded-sm transition-all duration-500"
          style={{
            left: l.x + l.vx,
            top: l.y + l.vy,
            opacity: 0.8
          }}
        />
      ))}

      {/* Rodapé e Reset */}
      <div className="flex items-center justify-between font-mono text-[11px] text-[#A8A49D] pt-2 border-t border-[#55524D] z-10">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-acento-vermelho" /> A serifa romana nasceu do corte do cinzel
        </span>
        {golpes > 0 && (
          <button onClick={limpar} className="hover:text-white flex items-center gap-1 underline">
            <RotateCcw className="w-3 h-3" /> Restaurar Bloco
          </button>
        )}
      </div>
    </div>
  );
};
