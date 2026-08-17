import React, { useState } from 'react';
import { DADOS_ARQUEOLOGIA_MATERIAIS, MaterialArqueologia } from '../../dados/dadosArqueologiaMateriais';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Sparkles, Activity } from 'lucide-react';
import { PedraEntalhe } from './arqueologia/PedraEntalhe';
import { ArgilaCuneiforme } from './arqueologia/ArgilaCuneiforme';
import { PergaminhoRolo } from './arqueologia/PergaminhoRolo';
import { PapelDobra3D } from './arqueologia/PapelDobra3D';
import { ChumboRama } from './arqueologia/ChumboRama';
import { TelaVariavel } from './arqueologia/TelaVariavel';

export const ArqueologiaMateriaisInterativa: React.FC = () => {
  const [materialAtivoId, setMaterialAtivoId] = useState<string>('pedra');
  const { tocarSom } = useExposicao();

  const mat: MaterialArqueologia = DADOS_ARQUEOLOGIA_MATERIAIS.find(m => m.id === materialAtivoId) || DADOS_ARQUEOLOGIA_MATERIAIS[0];

  const trocarMaterial = (id: string, som: 'chumbo' | 'papel' | 'pedra' | 'madeira' | 'entalhe') => {
    setMaterialAtivoId(id);
    tocarSom(som);
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
              Cada suporte impõe uma resistência física viva: a pedra resiste e lasca, a argila afunda, o pergaminho desenrola, o papel dobra, o chumbo trava e a tela muta.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 border-2 border-tinta p-1 bg-papel">
            {DADOS_ARQUEOLOGIA_MATERIAIS.map(m => (
              <button
                key={m.id}
                onClick={() => trocarMaterial(m.id, m.somAssociado)}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold transition-all ${
                  materialAtivoId === m.id ? 'bg-tinta text-papel-claro shadow-carimbo' : 'text-tinta hover:bg-madeira/40'
                }`}
              >
                {m.nome.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Laboratório Tátil com os 6 Motores de Física Real */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 flex flex-col justify-between">
            {mat.id === 'pedra' && <PedraEntalhe />}
            {mat.id === 'argila' && <ArgilaCuneiforme />}
            {mat.id === 'pergaminho' && <PergaminhoRolo />}
            {mat.id === 'papel' && <PapelDobra3D />}
            {mat.id === 'chumbo' && <ChumboRama />}
            {mat.id === 'tela' && <TelaVariavel />}
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
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

            <div className="p-4 bg-papel border-2 border-tinta shadow-carimbo font-mono text-xs flex items-center gap-2">
              <Activity className="w-4 h-4 text-acento-vermelho" />
              <span><strong>Ação:</strong> {mat.comportamentoInterativo}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
