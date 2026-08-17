import React, { useState } from 'react';
import { DADOS_LITERATURA, TrechoLiterario } from '../../dados/dadosLiteratura';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Eye, Type } from 'lucide-react';

export const PalavraComoImagem: React.FC = () => {
  const [autorAtivo, setAutorAtivo] = useState<string>(DADOS_LITERATURA[0].id);
  const [modoVisual, setModoVisual] = useState<'composicao' | 'convencional'>('composicao');

  const trechoAtual: TrechoLiterario = DADOS_LITERATURA.find(t => t.id === autorAtivo) || DADOS_LITERATURA[0];

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-claro overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Tipografia & Literatura" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              A PALAVRA COMO IMAGEM
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              O mesmo conteúdo verbal ganha diferentes vozes e corporeidade através da forma tipográfica, do ritmo e dos vazios da página.
            </p>
          </div>

          {/* Alternador de Modo: Composição Visual vs Texto Convencional */}
          <div className="flex items-center gap-2 border-2 border-tinta p-1 bg-papel">
            <button
              onClick={() => setModoVisual('composicao')}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase font-bold transition-all ${
                modoVisual === 'composicao' ? 'bg-tinta text-papel-claro shadow-carimbo' : 'text-tinta hover:bg-madeira/40'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Forma Visual</span>
            </button>
            <button
              onClick={() => setModoVisual('convencional')}
              className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs uppercase font-bold transition-all ${
                modoVisual === 'convencional' ? 'bg-tinta text-papel-claro shadow-carimbo' : 'text-tinta hover:bg-madeira/40'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>Leitura Linear</span>
            </button>
          </div>
        </div>

        {/* Abas dos Autores Brasileiros */}
        <div className="flex flex-wrap gap-2 mb-8">
          {DADOS_LITERATURA.map((item) => (
            <button
              key={item.id}
              onClick={() => setAutorAtivo(item.id)}
              className={`px-4 py-2 border-2 border-tinta font-mono text-xs uppercase font-bold transition-all ${
                autorAtivo === item.id
                  ? 'bg-tinta text-papel-claro shadow-carimbo'
                  : 'bg-papel hover:bg-madeira/50 text-tinta'
              }`}
            >
              <span>{item.autor}</span>
              <span className="opacity-60 ml-2 font-normal">({item.obra})</span>
            </button>
          ))}
        </div>

        {/* Canvas de Composição */}
        <div className="border-2 border-tinta bg-papel p-6 sm:p-10 md:p-14 shadow-carimbo-lg min-h-[420px] flex items-center justify-center relative">
          {/* Fundo com textura sutil */}
          <div className="absolute inset-0 textura-papel opacity-30 pointer-events-none" />

          {modoVisual === 'composicao' ? (
            /* Composição Tipográfica Não-Convencional */
            <div className="w-full flex flex-col gap-6 md:gap-10 relative z-10 select-none">
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
                {trechoAtual.camadasGraficas.map((camada, idx) => (
                  <div
                    key={idx}
                    className={`transition-transform hover:scale-105 duration-200 ${camada.estilo} ${camada.tamanho} ${camada.peso}`}
                  >
                    {camada.termo}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Modo de Leitura Convencional */
            <div className="max-w-2xl mx-auto text-left relative z-10">
              <span className="font-mono text-xs text-tinta-cinza uppercase block mb-3">
                {trechoAtual.obra} ({trechoAtual.ano}) — {trechoAtual.autor}
              </span>
              <p className="font-serifa text-2xl sm:text-3xl text-tinta leading-relaxed">
                “{trechoAtual.conteudoNormal}”
              </p>
            </div>
          )}

          {/* Etiqueta de Autoria no Canto */}
          <div className="absolute bottom-4 right-4 bg-madeira px-3 py-1 border border-tinta font-mono text-[10px] uppercase font-bold text-tinta">
            {trechoAtual.autor} — {trechoAtual.obra}
          </div>
        </div>
      </div>
    </section>
  );
};
