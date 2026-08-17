import React from 'react';
import { motion } from 'framer-motion';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';

export const ManifestoSection: React.FC = () => {
  const sequenciaEvolutiva = [
    { num: '01', estagio: 'pensamento', estilo: 'font-serifa italic font-light text-2xl md:text-4xl text-tinta-cinza', tag: 'abstração' },
    { num: '02', estagio: 'gesto', estilo: 'font-serifa font-normal text-3xl md:text-5xl text-tinta', tag: 'ação física' },
    { num: '03', estagio: 'sinal', estilo: 'font-mono uppercase font-bold text-2xl md:text-4xl text-acento-vermelho', tag: 'inscrição' },
    { num: '04', estagio: 'letra', estilo: 'font-serifa font-bold text-4xl md:text-6xl text-tinta', tag: 'morfologia' },
    { num: '05', estagio: 'palavra', estilo: 'font-anton uppercase tracking-wide text-5xl md:text-7xl text-tinta', tag: 'sintaxe' },
    { num: '06', estagio: 'corpo', estilo: 'font-anton uppercase tracking-tight text-6xl md:text-8xl lg:text-9xl text-tinta-pura underline decoration-madeira decoration-8', tag: 'matéria viva' }
  ];

  return (
    <section id="manifesto" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho do Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <EtiquetaAtelier texto="Manifesto Curatorial" variante="escuro" rotacao="-rotate-1" />
            <h2 className="font-serifa italic text-4xl sm:text-5xl md:text-6xl text-tinta mt-4 leading-tight">
              Mas o que é <br />
              <strong className="font-anton not-italic uppercase text-5xl sm:text-6xl md:text-7xl tracking-tighter block text-tinta">
                oSERgráfica?
              </strong>
            </h2>
            <div className="w-16 h-1 bg-acento-vermelho mt-6 mb-6" />
            <p className="font-corpo text-base md:text-lg text-tinta-desbotada leading-relaxed">
              A matéria da palavra impressa, gravada, talhada ou escrita à mão. O fazer gráfico como ponte que converte a mente em substância física tangível.
            </p>
          </div>

          {/* Citação Editorial em Bloco Tátil */}
          <div className="lg:col-span-7 bg-papel-claro p-6 sm:p-8 md:p-10 border-2 border-tinta shadow-carimbo-lg relative">
            <div className="absolute top-0 right-0 bg-tinta text-papel px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-widest">
              PRINCIPIUM
            </div>
            <p className="font-serifa text-2xl sm:text-3xl md:text-4xl text-tinta leading-snug mb-6">
              “A criatura humana encontra na mão um canal expressivo. O pensamento torna-se gesto. O gesto deixa marcas. A palavra ganha peso, textura, ritmo e espaço.”
            </p>
            <div className="flex items-center justify-between border-t border-tinta/20 pt-4 font-mono text-xs text-tinta-cinza uppercase">
              <span>André Bonani — Curadoria</span>
              <span>Gráfica Experimental</span>
            </div>
          </div>
        </div>

        {/* Sequência Progressiva: O Caminho da Matéria */}
        <div className="border-2 border-tinta bg-papel-claro p-6 md:p-10 shadow-carimbo">
          <div className="flex items-center justify-between border-b-2 border-tinta pb-4 mb-8 font-mono text-xs uppercase font-bold text-tinta">
            <span>Sequência Morfogenética do Tipo</span>
            <span className="hidden sm:inline">Metamorfose da Linguagem</span>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {sequenciaEvolutiva.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row items-baseline justify-between gap-2 md:gap-6 border-b border-tinta/10 pb-4 hover:pl-2 transition-all"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-mono text-xs md:text-sm font-bold text-tinta-cinza w-8 border-b border-tinta/30">
                    {item.num}
                  </span>
                  <span className={`${item.estilo} transition-transform group-hover:translate-x-2 duration-200`}>
                    {item.estagio}
                  </span>
                </div>
                <div className="flex items-center gap-3 self-end md:self-baseline">
                  <span className="font-mono text-[11px] uppercase bg-madeira/40 text-tinta px-2 py-0.5 border border-tinta/30">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-tinta-cinza hidden lg:inline">
                    {idx < sequenciaEvolutiva.length - 1 ? '→ transforma-se em' : '— materialização final'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bloco com foto real da montagem */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 border-2 border-tinta shadow-carimbo overflow-hidden bg-tinta">
            <img
              src="/assets/fotos/foto_exposicao_24.jpeg"
              alt="Módulo da Letra e do Pensamento na exposição corpoDApalavra"
              className="w-full h-72 md:h-96 object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="md:col-span-5 bg-madeira p-6 border-2 border-tinta shadow-carimbo">
            <span className="font-mono text-xs uppercase font-bold text-tinta block mb-2">
              FIG. 01 — REGISTRO EM ATELIER
            </span>
            <p className="font-corpo text-sm text-tinta leading-relaxed">
              O pensamento não permanece no éter; ele é entalhado em madeira de reflorestamento, prensado em matriz de chumbo e espalhado como mancha sobre a folha crua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
