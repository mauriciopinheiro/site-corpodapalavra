import React, { useState } from 'react';
import { OBRAS_ACERVO_ETA, ObraAcervoETA } from '../../dados/dadosObrasAcervo';
import { NUCLEOS_CURATORIAIS, NucleoCuratorial } from '../../dados/dadosNucleosCuratoriais';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Archive, Layers, Sparkles } from 'lucide-react';
import { useExposicao } from '../../contexto/ContextoExposicao';

export const CatalogoAcervoSection: React.FC = () => {
  const [nucleoAtivo, setNucleoAtivo] = useState<string>(NUCLEOS_CURATORIAIS[0].id);
  const [obraSelecionada, setObraSelecionada] = useState<ObraAcervoETA>(OBRAS_ACERVO_ETA[0]);
  const { tocarSom, registrarExcerto } = useExposicao();

  const curatorialAtual: NucleoCuratorial = NUCLEOS_CURATORIAIS.find(n => n.id === nucleoAtivo) || NUCLEOS_CURATORIAIS[0];

  const selecionarNucleo = (id: string) => {
    setNucleoAtivo(id);
    tocarSom('papel');
  };

  const selecionarObra = (obra: ObraAcervoETA) => {
    setObraSelecionada(obra);
    tocarSom('carimbo');
    registrarExcerto(obra.titulo);
  };

  return (
    <section id="acervo-catalogo" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-claro">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Acervo Físico & Núcleos Curatoriais" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              CATÁLOGO DE OBRAS & MATRIZES
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              Inventário completo dos 6 núcleos e das peças históricas expostas no Espaço de Tecnologias e Artes do Sesc Santo André.
            </p>
          </div>

          <div className="font-mono text-xs bg-tinta text-papel p-3 border-2 border-tinta shadow-carimbo space-y-1 shrink-0">
            <span className="font-bold uppercase flex items-center gap-1 text-acento-amarelo">
              <Archive className="w-3.5 h-3.5" /> Acervo ETA Sesc
            </span>
            <p className="text-[11px] text-papel/80">9 Obras Tombadas • 6 Núcleos (C-O-R-P-O-A)</p>
          </div>
        </div>

        {/* Os 6 Núcleos Curatoriais C-O-R-P-O-A */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase font-bold text-tinta-cinza block">
            Navegação pelos 6 Núcleos da Exposição (C-O-R-P-O-A):
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {NUCLEOS_CURATORIAIS.map(n => (
              <button
                key={n.id}
                onClick={() => selecionarNucleo(n.id)}
                className={`p-3 text-left border-2 border-tinta transition-all ${
                  nucleoAtivo === n.id
                    ? 'bg-tinta text-papel shadow-carimbo'
                    : 'bg-papel hover:bg-madeira/50 text-tinta'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="font-bold opacity-70">{n.codigo}</span>
                  <span className="font-anton text-lg text-acento-vermelho">{n.letraGuia}</span>
                </div>
                <div className="font-bold font-mono text-xs truncate">{n.titulo.split('(')[0]}</div>
                <div className="text-[10px] opacity-70 uppercase font-mono mt-0.5">{n.conceitoChave}</div>
              </button>
            ))}
          </div>

          {/* Destaque Curatorial do Núcleo Ativo */}
          <div className="bg-madeira/30 border-2 border-tinta p-6 shadow-carimbo space-y-2">
            <div className="flex items-center justify-between border-b border-tinta/20 pb-2">
              <h3 className="font-anton uppercase text-2xl text-tinta">{curatorialAtual.titulo}</h3>
              <span className="font-mono text-xs text-tinta font-bold bg-papel px-2 py-0.5 border border-tinta">
                LETRA GUIA: {curatorialAtual.letraGuia}
              </span>
            </div>
            <p className="font-serifa italic text-base sm:text-lg text-tinta">
              “{curatorialAtual.citacao}”
            </p>
            <p className="font-corpo text-xs sm:text-sm text-tinta leading-relaxed pt-1">
              {curatorialAtual.descricao}
            </p>
          </div>
        </div>

        {/* Grade do Acervo Tombado (ETA-CP-001 a 009) */}
        <div className="space-y-4 pt-4 border-t-2 border-tinta/20">
          <span className="font-mono text-xs uppercase font-bold text-tinta block flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-acento-vermelho" /> Peças e Instrumentos Catalogados (Tombo ETA-CP):
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lista das 9 Peças */}
            <div className="md:col-span-1 flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1">
              {OBRAS_ACERVO_ETA.map(obra => (
                <button
                  key={obra.id}
                  onClick={() => selecionarObra(obra)}
                  className={`p-3 text-left border-2 border-tinta font-mono text-xs transition-all ${
                    obraSelecionada.id === obra.id
                      ? 'bg-tinta text-papel shadow-carimbo font-bold'
                      : 'bg-papel hover:bg-madeira/40 text-tinta'
                  }`}
                >
                  <div className="flex justify-between text-[10px] opacity-70 mb-0.5">
                    <span>{obra.tombo}</span>
                    <span className="text-sm">{obra.simbolo}</span>
                  </div>
                  <div className="truncate font-bold">{obra.titulo}</div>
                  <div className="text-[10px] opacity-70 truncate">{obra.categoria}</div>
                </button>
              ))}
            </div>

            {/* Ficha da Peça Selecionada */}
            <div className="md:col-span-2 bg-papel border-2 border-tinta shadow-carimbo-lg p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start border-b-2 border-tinta pb-3">
                  <div>
                    <span className="font-mono text-xs text-acento-vermelho font-bold block">{obraSelecionada.tombo} • {obraSelecionada.categoria}</span>
                    <h4 className="font-anton uppercase text-2xl sm:text-3xl text-tinta mt-1">{obraSelecionada.titulo}</h4>
                  </div>
                  <span className="font-mono text-3xl bg-madeira p-2 border border-tinta">{obraSelecionada.simbolo}</span>
                </div>

                <p className="font-corpo text-sm text-tinta leading-relaxed pt-2">
                  {obraSelecionada.descricao}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 font-mono text-xs text-tinta border-t border-tinta/20">
                  <div>
                    <span className="text-tinta-cinza block text-[10px] uppercase">Materialidade:</span>
                    <span className="font-bold">{obraSelecionada.material}</span>
                  </div>
                  <div>
                    <span className="text-tinta-cinza block text-[10px] uppercase">Dimensões / Procedência:</span>
                    <span className="font-bold">{obraSelecionada.dimensoes}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-tinta/20 pt-3 flex items-center justify-between font-mono text-[11px] text-tinta-cinza">
                <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-acento-vermelho" /> {obraSelecionada.nucleo}</span>
                <span>Acervo Sesc Santo André</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
