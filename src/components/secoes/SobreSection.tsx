import React from 'react';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Compass, Sparkles, Feather } from 'lucide-react';

export const SobreSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-claro">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Coluna Esquerda: Texto Conceitual */}
          <div className="lg:col-span-7">
            <EtiquetaAtelier texto="Conceito da Exposição" variante="escuro" />
            <h2 className="font-serifa italic text-4xl sm:text-5xl md:text-6xl text-tinta mt-4 mb-6 leading-tight">
              A matéria viva da linguagem: onde o pensamento ganha forma
            </h2>

            <div className="space-y-4 font-corpo text-base md:text-lg text-tinta leading-relaxed">
              <p>
                A exposição <strong>corpoDApalavra</strong> parte da relação indissociável entre <em>linguagem, livro, tipografia, artes gráficas e pensamento humano</em>. A ideia central é investigar como o fazer gráfico consegue materializar a linguagem — uma abstração da mente — por meio de tipos móveis, livros, impressos, ferramentas, formas, texturas e composições espaciais.
              </p>
              <p className="text-tinta-desbotada">
                O projeto se desdobra a partir de quatro pilares conceituais: <strong>corpoDApalavra</strong>, <strong>oSERgráfica</strong>, <strong>oSERlivro</strong> e <strong>oSERtipografia</strong>, integrando a pesquisa poética do Estúdio Agudo e da Gráfica Experimental ao espaço expográfico arquitetado por GamaH no Sesc Santo André.
              </p>
            </div>

            {/* Destaques conceituais em 3 caixas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-papel border-2 border-tinta shadow-carimbo">
                <Compass className="w-5 h-5 text-acento-vermelho mb-2" />
                <h4 className="font-anton uppercase text-sm text-tinta">Gesto & Matéria</h4>
                <p className="font-mono text-[11px] text-tinta-cinza mt-1">A mão que corta, grava e compõe tipos no espaço.</p>
              </div>

              <div className="p-4 bg-papel border-2 border-tinta shadow-carimbo">
                <Feather className="w-5 h-5 text-acento-azul mb-2" />
                <h4 className="font-anton uppercase text-sm text-tinta">Voz Tipográfica</h4>
                <p className="font-mono text-[11px] text-tinta-cinza mt-1">Fontes brasileiras e contrastes expressivos.</p>
              </div>

              <div className="p-4 bg-papel border-2 border-tinta shadow-carimbo">
                <Sparkles className="w-5 h-5 text-acento-amarelo mb-2" />
                <h4 className="font-anton uppercase text-sm text-tinta">Arquitetura do Livro</h4>
                <p className="font-mono text-[11px] text-tinta-cinza mt-1">O livro como território e objeto tridimensional.</p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Fotografia Real do Mural e Placa Conceitual */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-2 border-tinta bg-tinta p-2 shadow-carimbo-lg">
              <img
                src="/assets/fotos/foto_exposicao_11.jpeg"
                alt="Vista geral da exposição corpoDApalavra no Sesc Santo André"
                className="w-full h-80 object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              <div className="p-3 bg-papel border-t-2 border-tinta font-mono text-xs text-tinta flex justify-between">
                <span>VISTA GERAL — ESPAÇO DE TECNOLOGIAS E ARTES</span>
                <span className="font-bold">SESC SANTO ANDRÉ</span>
              </div>
            </div>

            <div className="bg-madeira p-6 border-2 border-tinta shadow-carimbo">
              <span className="font-mono text-xs uppercase font-bold text-tinta block mb-2">
                Curadoria & Parceria Criativa
              </span>
              <p className="font-serifa italic text-sm text-tinta">
                “A tipografia não é neutra: ela carrega o peso, o ritmo e o tempo da cultura em cada uma de suas curvas e arestas.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
