import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { ZoomIn, Sparkles, Compass } from 'lucide-react';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';

export const TransicaoLivroTipografia: React.FC = () => {
  const [escala, setEscala] = useState<number>(1);
  const { tocarSom, registrarGlifo } = useExposicao();

  const estagios = [
    { nivel: 1, nome: 'Página', legenda: 'A arquitetura do fólio aberto no espaço.' },
    { nivel: 2, nome: 'Linha', legenda: 'A cadência rítmica e a entrelinha contínua.' },
    { nivel: 3, nome: 'Palavra', legenda: 'O conjunto sintático "CORPO" antes da fragmentação.' },
    { nivel: 4, nome: 'Letra', legenda: 'O caractere capitular "P" isolado sob tensão ótica.' },
    { nivel: 5, nome: 'Contorno', legenda: 'A dissecação microscópica da haste, bojo e serifa.' }
  ];

  const mudarNivel = (novoNivel: number) => {
    setEscala(novoNivel);
    if (novoNivel <= 2) tocarSom('papel');
    else if (novoNivel <= 4) tocarSom('chumbo');
    else {
      tocarSom('entalhe');
      registrarGlifo('P-MICRO');
    }
  };

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-tinta text-papel-claro overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-papel/30">
          <div>
            <EtiquetaAtelier texto="Transição Cinematográfica Sem Cortes" variante="claro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-papel-claro mt-3 tracking-tight">
              DO CÓDICE AO GLIFO
            </h2>
            <p className="font-serifa italic text-papel/80 text-base sm:text-lg mt-2 max-w-2xl">
              Uma aproximação contínua na matéria: da página inteira à fibra da linha, da palavra à anatomia do tipo.
            </p>
          </div>

          {/* Seletor de Escala */}
          <div className="flex flex-wrap gap-1 border-2 border-papel p-1 bg-tinta-suave">
            {estagios.map(estagio => (
              <button
                key={estagio.nivel}
                onClick={() => mudarNivel(estagio.nivel)}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold transition-all ${
                  escala === estagio.nivel
                    ? 'bg-papel text-tinta shadow-carimbo-branco'
                    : 'text-papel/80 hover:bg-papel/20'
                }`}
              >
                {estagio.nivel}. {estagio.nome}
              </button>
            ))}
          </div>
        </div>

        {/* Visor de Zoom Óptico Cinematográfico */}
        <div className="relative min-h-[380px] bg-tinta-suave border-2 border-papel shadow-carimbo-branco p-6 sm:p-12 flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-4 left-4 font-mono text-[10px] uppercase text-papel/60 flex items-center gap-1">
            <ZoomIn className="w-3.5 h-3.5 text-acento-amarelo" />
            <span>Escala Óptica: {escala * 100}% • {estagios[escala - 1].nome}</span>
          </div>

          <div className="my-auto text-center">
            <AnimatePresence mode="wait">
              {escala === 1 && (
                <motion.div
                  key="pag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="w-56 h-72 bg-papel-claro text-tinta border-2 border-tinta p-6 shadow-carimbo mx-auto text-left space-y-2"
                >
                  <span className="font-mono text-[9px] text-tinta-cinza uppercase block border-b border-tinta/20 pb-1">FÓLIO 01</span>
                  <div className="space-y-1.5 pt-2">
                    <div className="h-2 bg-tinta/80 w-full" />
                    <div className="h-2 bg-tinta/60 w-5/6" />
                    <div className="h-2 bg-tinta/60 w-4/6" />
                  </div>
                  <div className="pt-6 font-serifa font-bold text-lg text-tinta">corpoDApalavra</div>
                </motion.div>
              )}

              {escala === 2 && (
                <motion.div
                  key="lin"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="border-y-2 border-dashed border-papel/40 py-6 px-4"
                >
                  <p className="font-serifa text-3xl sm:text-5xl text-papel tracking-wide">
                    O GESTO GRAVADO NA MANCHA DA PÁGINA
                  </p>
                </motion.div>
              )}

              {escala === 3 && (
                <motion.div
                  key="pal"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="border-2 border-papel p-6 bg-papel text-tinta shadow-carimbo-branco"
                >
                  <span className="font-anton uppercase text-6xl sm:text-8xl tracking-tight text-tinta">
                    CORPO
                  </span>
                </motion.div>
              )}

              {escala === 4 && (
                <motion.div
                  key="let"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="font-serifa font-black text-8xl sm:text-9xl text-acento-amarelo"
                >
                  P
                </motion.div>
              )}

              {escala === 5 && (
                <motion.div
                  key="con"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="space-y-4"
                >
                  <div className="font-mono text-sm uppercase text-acento-vermelho font-bold flex items-center justify-center gap-1">
                    <Compass className="w-4 h-4" /> Vértice de Armadilha de Tinta & Serifa Isolada
                  </div>
                  <div className="w-48 h-48 border-2 border-dashed border-acento-amarelo mx-auto flex items-center justify-center bg-papel text-tinta font-serifa font-black text-8xl shadow-carimbo-branco">
                    P
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full border-t border-papel/20 pt-3 flex items-center justify-between font-mono text-xs text-papel/80">
            <span className="italic font-serifa text-sm">{estagios[escala - 1].legenda}</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-acento-amarelo">
              <Sparkles className="w-3.5 h-3.5" /> Avance os níveis para penetrar no glifo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
