import React, { useState } from 'react';
import { useExposicao } from '../../../contexto/ContextoExposicao';
import { Layers, Sparkles, RotateCcw } from 'lucide-react';

export const PapelDobra3D: React.FC = () => {
  const { tocarSom, registrarMaterial } = useExposicao();
  const [faseDobra, setFaseDobra] = useState<number>(0);

  const fases = [
    { nome: 'Plano (1 Folha)', paginas: '2 Páginas Abertas', desc: 'A folha de papel cru sem vincos.' },
    { nome: 'Primeiro Vinco (In-Folio)', paginas: '4 Páginas', desc: 'Dobra central dividindo o plano ao meio.' },
    { nome: 'Segundo Vinco (In-Quarto)', paginas: '8 Páginas', desc: 'Dobra perpendicular formando o primeiro caderno.' },
    { nome: 'Terceiro Vinco (In-Octavo)', paginas: '16 Páginas (Códice)', desc: 'Caderno completo pronto para encadernação e costura.' }
  ];

  const avancarDobra = () => {
    tocarSom('papel');
    registrarMaterial('papel');
    setFaseDobra(prev => (prev + 1) % fases.length);
  };

  return (
    <div
      onClick={avancarDobra}
      className="relative w-full h-[320px] bg-papel-claro border-4 border-tinta shadow-carimbo-lg p-6 flex flex-col justify-between select-none cursor-pointer overflow-hidden"
    >
      <div className="flex items-center justify-between font-mono text-xs uppercase text-tinta border-b border-tinta/30 pb-2">
        <span className="font-bold flex items-center gap-1">
          <Layers className="w-3.5 h-3.5 text-acento-azul" /> Mecânica da Dobra & Códice
        </span>
        <span className="bg-tinta text-papel px-2 py-0.5 font-bold">FASE {faseDobra + 1} / 4</span>
      </div>

      {/* Simulação Visual Tridimensional da Folha Dobrada com Vincos */}
      <div className="relative my-auto flex items-center justify-center py-4">
        {faseDobra === 0 && (
          <div className="w-64 h-36 bg-papel border-2 border-tinta shadow-carimbo flex items-center justify-center p-4">
            <span className="font-serifa text-2xl font-bold text-tinta">Folha Aberta (Plano)</span>
          </div>
        )}

        {faseDobra === 1 && (
          <div className="flex shadow-carimbo">
            <div className="w-32 h-36 bg-papel border-y-2 border-l-2 border-r border-tinta p-3">
              <span className="font-mono text-xs font-bold block">PÁG 01</span>
            </div>
            <div className="w-32 h-36 bg-papel-escuro border-y-2 border-r-2 border-l border-tinta p-3 -rotate-3 origin-left">
              <span className="font-mono text-xs font-bold block">PÁG 02</span>
            </div>
          </div>
        )}

        {faseDobra === 2 && (
          <div className="w-32 h-36 bg-papel border-2 border-tinta shadow-carimbo p-3 space-y-1 rotate-2">
            <span className="font-mono text-[10px] text-acento-vermelho font-bold block">IN-QUARTO</span>
            <span className="font-serifa font-bold text-lg text-tinta block">4 Fólios</span>
            <div className="h-1 bg-tinta/30 w-full" />
            <div className="h-1 bg-tinta/30 w-3/4" />
          </div>
        )}

        {faseDobra === 3 && (
          <div className="w-24 h-36 bg-madeira border-2 border-tinta shadow-carimbo p-3 text-center flex flex-col justify-between -rotate-3">
            <span className="font-mono text-[9px] bg-tinta text-papel uppercase font-bold">CÓDICE</span>
            <span className="font-serifa font-black text-2xl text-tinta">16p</span>
            <span className="font-mono text-[8px] text-tinta-cinza">Costura</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between font-mono text-xs text-tinta pt-2 border-t border-tinta/30">
        <span className="flex items-center gap-1 font-bold">
          <Sparkles className="w-3.5 h-3.5 text-acento-vermelho" /> {fases[faseDobra].nome}: {fases[faseDobra].desc}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setFaseDobra(0);
            tocarSom('papel');
          }}
          className="hover:underline flex items-center gap-1 text-[11px]"
        >
          <RotateCcw className="w-3 h-3" /> Desdobrar
        </button>
      </div>
    </div>
  );
};
