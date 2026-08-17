import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';

export const HeroSection: React.FC = () => {
  const letrasPalavra = ['p', 'a', 'l', 'a', 'v', 'r', 'a'];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between px-4 md:px-8 py-8 border-b-2 border-tinta overflow-hidden bg-papel-claro">
      {/* Textura de fundo e marcas de registro gráfico */}
      <div className="absolute inset-0 textura-papel opacity-40 pointer-events-none" />
      <div className="absolute top-8 right-8 hidden md:flex flex-col items-end gap-1 font-mono text-[11px] text-tinta-cinza uppercase">
        <span>[ REG. 01/2024 ]</span>
        <span>ETA SESC SANTO ANDRÉ</span>
        <span>EXPOGRÁFICA MODULAR</span>
      </div>

      {/* Cruz de registro de impressão (canto superior esquerdo) */}
      <div className="absolute top-4 left-4 w-4 h-4 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-tinta" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-tinta" />
      </div>

      {/* Bloco Superior: Título Monumental & Composição Tipográfica */}
      <div className="relative z-10 my-auto pt-6">
        <div className="max-w-7xl mx-auto">
          {/* Tag de Abertura */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <EtiquetaAtelier
              texto="Exposição de Artes Gráficas & Tipografia"
              subtexto="Espaço de Tecnologias e Artes — Sesc Santo André"
              variante="escuro"
              rotacao="-rotate-1"
            />
          </motion.div>

          {/* Título Principal: corpoDApalavra */}
          <div className="flex flex-col select-none">
            {/* Linha 1: corpoDA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-baseline gap-2 md:gap-4 pl-1"
            >
              <span className="font-serifa italic font-normal text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-tinta leading-none">
                corpo
              </span>
              <span className="font-mono font-bold text-lg sm:text-2xl md:text-4xl text-acento-vermelho uppercase tracking-widest border-b-2 border-acento-vermelho">
                DA
              </span>
            </motion.div>

            {/* Linha 2: palavra (Letras entrando como composição de tipos móveis) */}
            <div className="flex flex-wrap items-baseline overflow-hidden -mt-2 sm:-mt-4 md:-mt-6">
              {letrasPalavra.map((letra, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 80, opacity: 0, rotate: index % 2 === 0 ? 3 : -3 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + index * 0.08,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className="font-anton text-tinta uppercase texto-monumental leading-[0.8] hover:text-acento-vermelho transition-colors cursor-default"
                >
                  {letra}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Frase Conceitual e Placa Expositiva */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 md:mt-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="md:col-span-7"
            >
              <p className="font-serifa text-xl sm:text-2xl md:text-3xl lg:text-4xl text-tinta leading-snug">
                Quando a linguagem deixa de ser apenas lida e passa a <strong className="font-bold underline decoration-acento-vermelho decoration-2">ocupar o espaço</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="md:col-span-5 bg-madeira p-4 md:p-5 border-2 border-tinta shadow-carimbo rotate-1"
            >
              <div className="flex items-center justify-between border-b border-tinta pb-2 mb-2 font-mono text-[11px] uppercase font-bold text-tinta">
                <span>MATÉRIA & GESTO</span>
                <span>GRÁFICA EXPERIMENTAL</span>
              </div>
              <p className="font-corpo text-xs md:text-sm text-tinta leading-relaxed">
                Tipografia como corpo vivo: tipos móveis de madeira, papéis artesanais, matrizes de impressão e arquitetura editorial em diálogo com o pensamento humano.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Barra Inferior com CTA de Exploração */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-tinta/30"
      >
        <a
          href="#manifesto"
          className="group inline-flex items-center gap-3 font-mono text-xs md:text-sm uppercase font-bold text-tinta hover:text-acento-vermelho transition-colors"
        >
          <span className="w-8 h-8 rounded-full border-2 border-tinta flex items-center justify-center group-hover:bg-tinta group-hover:text-papel-claro transition-all">
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </span>
          <span>explorar a exposição</span>
        </a>

        <span className="font-mono text-[11px] uppercase text-tinta-cinza hidden sm:inline-block">
          Deslize para iniciar o percurso ↓
        </span>
      </motion.div>
    </section>
  );
};
