import React from 'react';
import { motion } from 'framer-motion';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Sparkles, Hammer } from 'lucide-react';

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
            <EtiquetaAtelier texto="Manifesto Curatorial" variante="escuro" />
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

        {/* Sequência Progressiva */}
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

        {/* Bloco de Gravura e Matriz (100% Gráfico, sem fotos) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 border-2 border-tinta shadow-carimbo bg-tinta text-papel p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-papel/20 pb-3 mb-6 font-mono text-xs uppercase text-acento-amarelo">
              <span className="flex items-center gap-1.5 font-bold"><Hammer className="w-4 h-4" /> Matriz de Tipos Móveis</span>
              <span>Oficina Tipográfica</span>
            </div>
            <div className="my-auto py-4">
              <div className="font-serifa italic text-4xl sm:text-5xl text-papel-claro leading-none">
                pensamento ➔ gesto ➔ matriz ➔ corpo
              </div>
            </div>
            <div className="pt-4 border-t border-papel/20 font-mono text-[10px] text-papel/60 uppercase">
              Gravação em madeira de topo & clichês de chumbo mineral
            </div>
          </div>

          <div className="md:col-span-5 bg-madeira p-6 border-2 border-tinta shadow-carimbo flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-tinta block mb-2">
                FIG. I — MATÉRIA & ATELIER
              </span>
              <p className="font-corpo text-sm text-tinta leading-relaxed">
                O pensamento não permanece no éter; ele é entalhado em madeira de reflorestamento, prensado em matriz de chumbo e espalhado como mancha viva sobre a folha crua.
              </p>
            </div>
            <div className="pt-4 border-t border-tinta font-mono text-[11px] uppercase text-tinta flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-acento-vermelho" />
              <span>Espaço de Tecnologias e Artes • Sesc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
