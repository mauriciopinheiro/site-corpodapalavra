import React, { useState } from 'react';
import { DADOS_ARQUEOLOGIA_MATERIAIS, MaterialArqueologia } from '../../dados/dadosArqueologiaMateriais';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Hammer, Sparkles } from 'lucide-react';

export const ArqueologiaMateriaisInterativa: React.FC = () => {
  const [materialAtivoId, setMaterialAtivoId] = useState<string>('pedra');
  const [impactosPedra, setImpactosPedra] = useState<number>(0);
  const [pressaoArgila, setPressaoArgila] = useState<number>(0);
  const [pesoDigital, setPesoDigital] = useState<number>(500);
  const { tocarSom, registrarExcerto } = useExposicao();

  const mat: MaterialArqueologia = DADOS_ARQUEOLOGIA_MATERIAIS.find(m => m.id === materialAtivoId) || DADOS_ARQUEOLOGIA_MATERIAIS[0];

  const handleInteragir = () => {
    tocarSom(mat.somAssociado);
    registrarExcerto(`Arqueologia-${mat.nome}`);
    if (mat.id === 'pedra') setImpactosPedra(prev => prev + 1);
    if (mat.id === 'argila') setPressaoArgila(prev => (prev + 20) % 100);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-claro">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Arqueologia dos Substratos Gráficos" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              ARQUEOLOGIA DOS MATERIAIS
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              Cada suporte impõe uma resistência física e molda a anatomia da letra: a pedra resiste, a argila deforma, o papel dobra, o chumbo encaixa e a tela muta.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 border-2 border-tinta p-1 bg-papel">
            {DADOS_ARQUEOLOGIA_MATERIAIS.map(m => (
              <button
                key={m.id}
                onClick={() => {
                  setMaterialAtivoId(m.id);
                  tocarSom(m.somAssociado);
                }}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold transition-all ${
                  materialAtivoId === m.id ? 'bg-tinta text-papel-claro shadow-carimbo' : 'text-tinta hover:bg-madeira/40'
                }`}
              >
                {m.nome.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Laboratório Tátil */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div
            onClick={handleInteragir}
            className="lg:col-span-7 min-h-[340px] bg-papel border-2 border-tinta shadow-carimbo-lg p-6 sm:p-10 flex flex-col justify-between relative select-none cursor-pointer overflow-hidden"
          >
            <div className="flex items-center justify-between font-mono text-xs uppercase text-tinta-cinza border-b border-tinta/20 pb-2">
              <span>Substrato: {mat.nome}</span>
              <span className="text-acento-vermelho font-bold">Verbo: {mat.verboFisico}</span>
            </div>

            <div className="my-auto text-center py-4">
              {mat.id === 'pedra' && (
                <div className="space-y-3">
                  <div className="text-7xl sm:text-8xl font-serifa font-bold text-tinta tracking-widest relative inline-block">
                    ROMA
                    {impactosPedra > 0 && (
                      <span className="absolute -top-3 -right-6 text-xs font-mono bg-acento-vermelho text-white px-2 py-0.5 shadow-carimbo">
                        {impactosPedra} GOLPES
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-tinta-cinza">[ Toque para bater o cinzel e entalhar a pedra ]</p>
                </div>
              )}

              {mat.id === 'argila' && (
                <div className="space-y-3">
                  <div className="text-6xl sm:text-7xl font-mono font-bold text-tinta" style={{ letterSpacing: `${pressaoArgila / 10}px` }}>
                    楔形文字
                  </div>
                  <p className="font-mono text-xs text-tinta-cinza">[ Toque para afundar o estilete na argila ]</p>
                </div>
              )}

              {mat.id === 'pergaminho' && (
                <div className="space-y-3">
                  <div className="text-4xl sm:text-6xl font-serifa italic text-tinta border-y-2 border-tinta py-3">
                    Sicut in caelo et in terra
                  </div>
                  <p className="font-mono text-xs text-tinta-cinza">[ Toque para esticar o pergaminho e fluir a pena ]</p>
                </div>
              )}

              {mat.id === 'papel' && (
                <div className="space-y-3">
                  <div className="inline-block p-4 bg-papel-claro border-2 border-dashed border-tinta rotate-2 shadow-carimbo">
                    <span className="text-3xl sm:text-5xl font-serifa font-bold text-tinta">Dobra & Códice</span>
                  </div>
                  <p className="font-mono text-xs text-tinta-cinza">[ Toque para vincar o papel e criar páginas ]</p>
                </div>
              )}

              {mat.id === 'chumbo' && (
                <div className="space-y-3">
                  <div className="inline-flex gap-1.5 p-2.5 bg-tinta text-papel border-2 border-tinta shadow-carimbo">
                    {['G', 'U', 'T', 'E', 'N', 'B', 'E', 'R', 'G'].map((l, i) => (
                      <span key={i} className="px-1.5 py-0.5 bg-tinta-suave border border-papel font-anton text-xl">{l}</span>
                    ))}
                  </div>
                  <p className="font-mono text-xs text-tinta-cinza">[ Toque para travar os tipos na rama ]</p>
                </div>
              )}

              {mat.id === 'tela' && (
                <div className="space-y-3">
                  <div className="text-6xl sm:text-7xl font-corpo text-tinta" style={{ fontWeight: pesoDigital }}>
                    VARIÁVEL
                  </div>
                  <div className="max-w-xs mx-auto" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="range" min="100" max="900" value={pesoDigital}
                      onChange={(e) => setPesoDigital(Number(e.target.value))}
                      className="w-full accent-tinta"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="font-mono text-[11px] text-tinta border-t border-tinta/20 pt-2 flex items-center gap-1 font-bold">
              <Hammer className="w-3.5 h-3.5 text-acento-vermelho" /> {mat.comportamentoInterativo}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-madeira p-6 border-2 border-tinta shadow-carimbo">
              <div className="flex items-center justify-between font-mono text-xs text-tinta border-b border-tinta pb-2 mb-3">
                <span className="font-bold uppercase">Era Histórica:</span>
                <span className="bg-tinta text-papel px-2 py-0.5">{mat.era}</span>
              </div>
              <h3 className="font-anton uppercase text-3xl text-tinta tracking-tight">{mat.nome}</h3>
              <p className="font-serifa italic text-sm text-tinta mt-2 leading-relaxed">“{mat.conceito}”</p>
            </div>

            <div className="bg-papel-claro p-6 border-2 border-tinta shadow-carimbo space-y-2">
              <span className="font-mono text-xs uppercase font-bold text-acento-vermelho flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Consequência Morfológica
              </span>
              <p className="font-corpo text-xs text-tinta leading-relaxed">{mat.descricaoMorfologica}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
