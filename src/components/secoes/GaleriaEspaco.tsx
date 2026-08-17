import React, { useState } from 'react';
import { FOTOS_EXPOSICAO } from '../../dados/dadosFotos';
import { CategoriaFoto, FotoExposicao } from '../../tipos';
import { VisualizadorFoto } from './VisualizadorFoto';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Camera, Filter } from 'lucide-react';

export const GaleriaEspaco: React.FC = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<CategoriaFoto | 'todas'>('todas');
  const [fotoSelecionada, setFotoSelecionada] = useState<FotoExposicao | null>(null);

  const categorias: (CategoriaFoto | 'todas')[] = [
    'todas', 'matéria', 'tipo', 'gesto', 'leitura', 'impressão', 'espaço'
  ];

  const fotosFiltradas = categoriaAtiva === 'todas'
    ? FOTOS_EXPOSICAO
    : FOTOS_EXPOSICAO.filter(f => f.categoria === categoriaAtiva);

  const indiceAtual = fotoSelecionada
    ? FOTOS_EXPOSICAO.findIndex(f => f.id === fotoSelecionada.id)
    : -1;

  const proximaFoto = () => {
    if (indiceAtual >= 0 && indiceAtual < FOTOS_EXPOSICAO.length - 1) {
      setFotoSelecionada(FOTOS_EXPOSICAO[indiceAtual + 1]);
    } else {
      setFotoSelecionada(FOTOS_EXPOSICAO[0]);
    }
  };

  const anteriorFoto = () => {
    if (indiceAtual > 0) {
      setFotoSelecionada(FOTOS_EXPOSICAO[indiceAtual - 1]);
    } else {
      setFotoSelecionada(FOTOS_EXPOSICAO[FOTOS_EXPOSICAO.length - 1]);
    }
  };

  return (
    <section id="galeria" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-escuro">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Registro Documental" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              A EXPOSIÇÃO NO ESPAÇO
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              Catálogo visual com 32 fotografias reais da montagem no Espaço de Tecnologias e Artes do Sesc Santo André.
            </p>
          </div>

          {/* Filtros de Categoria */}
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

        {/* Grade Editorial Assimétrica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fotosFiltradas.map((foto, index) => {
            const isDestaque = foto.destaque || index % 7 === 0;
            return (
              <div
                key={foto.id}
                onClick={() => setFotoSelecionada(foto)}
                className={`group cursor-pointer border-2 border-tinta bg-papel-claro p-3 shadow-carimbo hover:shadow-carimbo-lg transition-all duration-300 ${
                  isDestaque ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                {/* Imagem */}
                <div className="relative overflow-hidden bg-tinta border border-tinta mb-3 aspect-[4/3] sm:aspect-auto sm:h-64 md:h-72">
                  <img
                    src={foto.url}
                    alt={foto.titulo}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  {/* Tag no canto da foto */}
                  <div className="absolute top-2 left-2 bg-tinta/90 text-papel px-2 py-0.5 font-mono text-[9px] uppercase font-bold tracking-wider">
                    {foto.categoria}
                  </div>
                </div>

                {/* Título e Descrição Resumida */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serifa font-bold text-base text-tinta group-hover:text-acento-vermelho transition-colors">
                      {foto.titulo}
                    </h3>
                    <p className="font-corpo text-xs text-tinta-cinza line-clamp-2 mt-0.5">
                      {foto.descricao}
                    </p>
                  </div>
                  <span className="w-6 h-6 rounded-full border border-tinta flex items-center justify-center shrink-0 group-hover:bg-tinta group-hover:text-white transition-colors">
                    <Camera className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <VisualizadorFoto
        foto={fotoSelecionada}
        onFechar={() => setFotoSelecionada(null)}
        onAnterior={anteriorFoto}
        onProxima={proximaFoto}
        indiceAtual={indiceAtual + 1}
        totalFotos={FOTOS_EXPOSICAO.length}
      />
    </section>
  );
};
