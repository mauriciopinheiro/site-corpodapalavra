import React, { useState } from 'react';
import { DADOS_PLACAS_GRAFICAS } from '../../dados/dadosPlacasGraficas';
import { CategoriaPlaca, PlacaGrafica } from '../../tipos';
import { DiagramaPlacaSVG } from './DiagramaPlacaSVG';
import { VisualizadorPlaca } from './VisualizadorPlaca';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Compass, Filter } from 'lucide-react';

export const GaleriaEspaco: React.FC = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaPlaca | 'todas'>('todas');
  const [placaSelecionada, setPlacaSelecionada] = useState<PlacaGrafica | null>(null);

  const categorias: (CategoriaPlaca | 'todas')[] = [
    'todas', 'arquitetura', 'morfologia', 'matriz', 'processo', 'métrica', 'espaço'
  ];

  const placasFiltradas = categoriaAtiva === 'todas'
    ? DADOS_PLACAS_GRAFICAS
    : DADOS_PLACAS_GRAFICAS.filter(p => p.categoria === categoriaAtiva);

  const indiceAtual = placaSelecionada
    ? DADOS_PLACAS_GRAFICAS.findIndex(p => p.id === placaSelecionada.id)
    : -1;

  const proximaPlaca = () => {
    if (indiceAtual >= 0 && indiceAtual < DADOS_PLACAS_GRAFICAS.length - 1) {
      setPlacaSelecionada(DADOS_PLACAS_GRAFICAS[indiceAtual + 1]);
    } else {
      setPlacaSelecionada(DADOS_PLACAS_GRAFICAS[0]);
    }
  };

  const anteriorPlaca = () => {
    if (indiceAtual > 0) {
      setPlacaSelecionada(DADOS_PLACAS_GRAFICAS[indiceAtual - 1]);
    } else {
      setPlacaSelecionada(DADOS_PLACAS_GRAFICAS[DADOS_PLACAS_GRAFICAS.length - 1]);
    }
  };

  return (
    <section id="galeria" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-escuro">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Documentação Técnica & Expográfica" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              PRANCHAS E DIAGRAMAS DA EXPOSIÇÃO
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              12 pranchas conceituais com plantas baixas, esquemas de imposição, cotas métricas e estudos morfológicos da montagem no Sesc Santo André.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 border-2 border-tinta p-1 bg-papel">
            <span className="font-mono text-[10px] uppercase font-bold px-2 text-tinta-cinza flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filtro:
            </span>
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-3 py-1 font-mono text-xs uppercase font-bold transition-all ${
                  categoriaAtiva === cat
                    ? 'bg-tinta text-papel-claro shadow-carimbo'
                    : 'text-tinta hover:bg-madeira/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grade das 12 Pranchas Gráficas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {placasFiltradas.map(placa => (
            <div
              key={placa.id}
              onClick={() => setPlacaSelecionada(placa)}
              className="group cursor-pointer border-2 border-tinta bg-papel-claro p-4 shadow-carimbo hover:shadow-carimbo-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Moldura do Diagrama */}
              <div className="relative h-44 bg-papel border border-tinta mb-4 p-3 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full text-tinta group-hover:scale-105 transition-transform duration-300">
                  <DiagramaPlacaSVG tipo={placa.tipoDiagrama} />
                </div>
                <div className="absolute top-2 left-2 bg-tinta text-papel px-2 py-0.5 font-mono text-[9px] uppercase font-bold">
                  {placa.numero}
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-acento-vermelho uppercase font-bold block mb-1">
                  {placa.categoria}
                </span>
                <h3 className="font-anton uppercase text-xl text-tinta group-hover:text-acento-vermelho transition-colors">
                  {placa.titulo}
                </h3>
                <p className="font-corpo text-xs text-tinta-cinza line-clamp-2 mt-1">
                  {placa.descricao}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-tinta/20 flex items-center justify-between font-mono text-[10px] text-tinta uppercase font-bold">
                <span>Ver Prancha Técnica</span>
                <Compass className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <VisualizadorPlaca
        placa={placaSelecionada}
        onFechar={() => setPlacaSelecionada(null)}
        onAnterior={anteriorPlaca}
        onProxima={proximaPlaca}
        indiceAtual={indiceAtual + 1}
        totalPlacas={DADOS_PLACAS_GRAFICAS.length}
      />
    </section>
  );
};
