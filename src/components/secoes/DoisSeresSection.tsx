import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { DobraLivroInterativa } from './DobraLivroInterativa';

export const DoisSeresSection: React.FC = () => {
  return (
    <section id="dois-seres" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-escuro">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <EtiquetaAtelier texto="Os Dois Eixos da Exposição" variante="escuro" />
          <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-4 tracking-tight">
            DOIS SERES, UMA SÓ MATÉRIA
          </h2>
          <p className="font-serifa italic text-tinta-desbotada text-lg mt-3">
            O livro como arquitetura do tempo e a tipografia como presença pura no espaço.
          </p>
        </div>

        {/* 1. Experiência da Dobra e Virada do Livro */}
        <DobraLivroInterativa />

        {/* 2. Grid Comparativo oSERlivro & oSERtipografia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* oSERlivro */}
          <div className="border-2 border-tinta bg-papel-claro p-6 sm:p-8 flex flex-col justify-between shadow-carimbo-lg relative">
            <div className="flex items-center justify-between border-b-2 border-tinta pb-3 mb-6">
              <span className="font-mono text-xs uppercase font-bold text-tinta flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-acento-azul" /> NÚCLEO I
              </span>
              <span className="font-mono text-[10px] bg-madeira px-2 py-0.5 border border-tinta uppercase font-bold">
                OBJETO & MEMÓRIA
              </span>
            </div>

            <div>
              <h3 className="font-serifa text-4xl sm:text-5xl text-tinta mb-4">
                o<span className="italic font-bold">SER</span>livro
              </h3>
              <p className="font-corpo text-sm sm:text-base text-tinta mb-6 leading-relaxed">
                O livro como objeto, tecnologia ancestral e território gráfico. Maquetes, ferramentas e processos que revelam a anatomia da página e a encadernação artesanal.
              </p>

              <div className="border-2 border-tinta shadow-carimbo overflow-hidden mb-6 bg-tinta">
                <img
                  src="/assets/fotos/foto_exposicao_07.jpeg"
                  alt="Mesa de processos gráficos do núcleo oSERlivro"
                  className="w-full h-52 object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t-2 border-tinta flex justify-end">
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 bg-tinta text-papel-claro px-5 py-2.5 font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-acento-azul transition-all"
              >
                <span>Explorar Acervo oSERlivro</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* oSERtipografia */}
          <div className="border-2 border-tinta bg-tinta text-papel-claro p-6 sm:p-8 flex flex-col justify-between shadow-carimbo-lg relative">
            <div className="flex items-center justify-between border-b-2 border-papel/30 pb-3 mb-6">
              <span className="font-mono text-xs uppercase font-bold text-papel flex items-center gap-2">
                <Layers className="w-4 h-4 text-acento-amarelo" /> NÚCLEO II
              </span>
              <span className="font-mono text-[10px] bg-acento-vermelho text-white px-2 py-0.5 border border-papel uppercase font-bold">
                PAINEL 36 MÓDULOS
              </span>
            </div>

            <div>
              <h3 className="font-serifa text-4xl sm:text-5xl text-papel-claro mb-4">
                o<span className="italic font-bold">SER</span>tipografia
              </h3>
              <p className="font-corpo text-sm sm:text-base text-papel/90 mb-6 leading-relaxed">
                A letra liberta-se da leitura e passa a atuar como forma escultórica, massa preta e silêncio. Um painel de 36 módulos de madeira em 3 linhas concebido pelo Estúdio Agudo e Gráfica Experimental.
              </p>

              <div className="border-2 border-papel shadow-carimbo-branco overflow-hidden mb-6 bg-papel">
                <img
                  src="/assets/fotos/foto_exposicao_01.jpeg"
                  alt="Painel de 36 módulos de madeira da exposição oSERtipografia"
                  className="w-full h-52 object-cover contrast-125 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t-2 border-papel/30 flex justify-end">
              <a
                href="#az-modular"
                className="inline-flex items-center gap-2 bg-papel text-tinta px-5 py-2.5 font-mono text-xs uppercase font-bold shadow-carimbo-branco hover:bg-acento-amarelo hover:text-tinta transition-all"
              >
                <span>Explorar oSERtipografia (A–Z)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
