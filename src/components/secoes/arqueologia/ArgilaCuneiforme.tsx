import React, { useState } from 'react';
import { useExposicao } from '../../../contexto/ContextoExposicao';
import { RotateCcw, Sparkles } from 'lucide-react';

interface ImpressaoCunha {
  id: number;
  x: number;
  y: number;
  rotacao: number;
  tipo: 'cunha' | 'traco';
}

export const ArgilaCuneiforme: React.FC = () => {
  const { tocarSom, registrarMaterial } = useExposicao();
  const [impressoes, setImpressoes] = useState<ImpressaoCunha[]>([
    { id: 1, x: 80, y: 120, rotacao: 0, tipo: 'cunha' },
    { id: 2, x: 120, y: 120, rotacao: 45, tipo: 'traco' },
    { id: 3, x: 160, y: 120, rotacao: -30, tipo: 'cunha' }
  ]);

  const afundarEstilete = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    tocarSom('entalhe');
    registrarMaterial('argila');

    const nova: ImpressaoCunha = {
      id: Date.now(),
      x,
      y,
      rotacao: Math.floor(Math.random() * 4) * 45,
      tipo: Math.random() > 0.4 ? 'cunha' : 'traco'
    };

    setImpressoes(prev => [...prev, nova]);
  };

  const limpar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImpressoes([]);
    tocarSom('papel');
  };

  return (
    <div
      onClick={afundarEstilete}
      className="relative w-full h-[320px] bg-[#9C6D48] border-4 border-[#5E3E24] shadow-carimbo-lg p-6 flex flex-col justify-between select-none cursor-pointer overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(ellipse at center, #A8764F 0%, #7A4E2C 100%)'
      }}
    >
      <div className="flex items-center justify-between font-mono text-xs uppercase text-[#F3DFC8] border-b border-[#5E3E24] pb-2 z-10">
        <span className="font-bold">Tablete de Barro Úmido • Mesopotâmia</span>
        <span>{impressoes.length} Incisões Cuneiformes</span>
      </div>

      <div className="relative my-auto text-center z-10 pointer-events-none">
        <p className="font-serifa italic text-xl sm:text-2xl text-[#3D2514] font-bold">
          {impressoes.length < 5 ? '[ Toque para afundar o estilete de cana na argila mole ]' : 'A forma triangular nasce da seção da haste de junco'}
        </p>
      </div>

      {/* Incisões Cuneiformes Reais Renderizadas como Cunhas Tridimensionais */}
      {impressoes.map(imp => (
        <div
          key={imp.id}
          className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: imp.x,
            top: imp.y,
            transform: `translate(-50%, -50%) rotate(${imp.rotacao}deg)`
          }}
        >
          {imp.tipo === 'cunha' ? (
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <polygon points="5,5 35,20 5,35 12,20" fill="#3D2514" />
              <polygon points="5,5 35,20 12,20" fill="#25160C" />
              <polygon points="5,35 35,20 12,20" fill="#5E3E24" />
            </svg>
          ) : (
            <svg width="40" height="12" viewBox="0 0 50 15" fill="none">
              <polygon points="2,7 12,2 45,7 12,12" fill="#3D2514" />
              <polygon points="2,7 12,2 45,7" fill="#25160C" />
            </svg>
          )}
        </div>
      ))}

      <div className="flex items-center justify-between font-mono text-[11px] text-[#F3DFC8] pt-2 border-t border-[#5E3E24] z-10">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-acento-amarelo" /> A plasticidade da argila impede curvas e exige cunhas
        </span>
        {impressoes.length > 0 && (
          <button onClick={limpar} className="hover:underline flex items-center gap-1">
            <RotateCcw className="w-3 h-3" /> Alisar Argila
          </button>
        )}
      </div>
    </div>
  );
};
