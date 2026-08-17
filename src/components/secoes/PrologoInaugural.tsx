import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { Ponto, reamostrarPontos, gerarPontosAlvoP, interpolarPontos, pontosParaSvgPath } from '../../servicos/transformadorP';
import { ArrowRight, Sparkles, RotateCcw, Feather } from 'lucide-react';

export const PrologoInaugural: React.FC = () => {
  const { prologoConcluido, concluirPrologo, tocarSom, gravarPontoGesto } = useExposicao();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [desenhando, setDesenhando] = useState(false);
  const [estagio, setEstagio] = useState<'silencio' | 'gesto' | 'morfando' | 'corpo'>('silencio');
  const [pontos, setPontos] = useState<Ponto[]>([]);
  const [pontosMorfados, setPontosMorfados] = useState<Ponto[]>([]);
  const animRef = useRef<number | null>(null);

  const obterCoord = (e: React.PointerEvent<SVGSVGElement>): Ponto => {
    const svg = svgRef.current;
    if (!svg) return { x: 300, y: 175 };
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 600;
    const y = ((e.clientY - rect.top) / rect.height) * 350;
    return { x: Math.max(10, Math.min(590, x)), y: Math.max(10, Math.min(340, y)) };
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (estagio === 'morfando' || estagio === 'corpo') return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignora se não for suportado
    }
    setDesenhando(true);
    setEstagio('gesto');
    tocarSom('entalhe');
    const pt = obterCoord(e);
    setPontos([pt]);
    setPontosMorfados([pt]);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!desenhando) return;
    const pt = obterCoord(e);
    setPontos(prev => {
      const novos = [...prev, pt];
      setPontosMorfados(novos);
      gravarPontoGesto(pt);
      return novos;
    });
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!desenhando) return;
    setDesenhando(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignora
    }

    if (pontos.length < 2) {
      // Se deu só um clique, cria um segundo ponto para formar o traço
      const pt = pontos[0] || { x: 300, y: 175 };
      pontos.push({ x: pt.x + 10, y: pt.y + 10 });
    }

    setEstagio('morfando');
    const ptsOrig = reamostrarPontos(pontos, 64);
    const ptsAlvo = gerarPontosAlvoP(300, 175, 230, 64);
    let inicio: number | null = null;

    const animar = (agora: number) => {
      if (!inicio) inicio = agora;
      const prog = Math.min(1, (agora - inicio) / 1100);
      const atual = interpolarPontos(ptsOrig, ptsAlvo, prog);
      setPontosMorfados(atual);

      if (prog < 1) {
        animRef.current = requestAnimationFrame(animar);
      } else {
        tocarSom('chumbo');
        setTimeout(() => setEstagio('corpo'), 300);
      }
    };
    animRef.current = requestAnimationFrame(animar);
  };

  const limpar = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setPontos([]);
    setPontosMorfados([]);
    setEstagio('silencio');
    tocarSom('papel');
  };

  if (prologoConcluido) return null;

  return (
    <div className="fixed inset-0 z-50 bg-papel flex flex-col items-center justify-between p-4 sm:p-6 select-none overflow-hidden">
      <div className="w-full max-w-4xl flex items-center justify-between font-mono text-xs uppercase text-tinta-cinza pt-2">
        <span className="font-bold tracking-widest text-tinta flex items-center gap-1.5">
          <Feather className="w-4 h-4 text-acento-vermelho" /> PRÓLOGO • O GESTO TRANSFORMA-SE EM LETRA
        </span>
        <button onClick={concluirPrologo} className="underline hover:text-tinta text-tinta-cinza font-bold">
          Pular para a Exposição [→]
        </button>
      </div>

      <div className="relative w-full max-w-2xl h-80 sm:h-96 my-auto flex items-center justify-center">
        {estagio === 'silencio' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute text-center space-y-2 pointer-events-none z-10">
            <p className="font-serifa italic text-2xl sm:text-3xl md:text-4xl text-tinta-desbotada">
              “Faça qualquer risco sobre a matéria.”
            </p>
            <span className="font-mono text-xs uppercase text-acento-vermelho font-bold block">
              [ Risque com o mouse ou dedo: o traço dobrará e virará um P ]
            </span>
          </motion.div>
        )}

        <svg
          ref={svgRef}
          viewBox="0 0 600 350"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="w-full h-full cursor-crosshair border-2 border-dashed border-tinta/30 bg-papel-claro/50 touch-none shadow-carimbo"
          style={{ touchAction: 'none' }}
        >
          {pontosMorfados.length > 1 && (
            <path
              d={pontosParaSvgPath(pontosMorfados)}
              fill="none"
              stroke="#0A0A0A"
              strokeWidth={estagio === 'corpo' ? 22 : 18}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>

        <AnimatePresence>
          {estagio === 'corpo' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-papel/95 border-2 border-tinta shadow-carimbo-lg space-y-4 z-20"
            >
              <span className="font-mono text-xs uppercase text-acento-vermelho font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Metamorfose Concluída
              </span>
              <h2 className="font-serifa italic text-3xl sm:text-4xl md:text-5xl text-tinta font-bold">
                “Você acabou de dar corpo a uma ideia.”
              </h2>
              <p className="font-corpo text-sm text-tinta max-w-md">
                O seu risco livre dobrou-se, esticou-se e converteu-se na matriz da letra. A matéria da palavra começa aqui.
              </p>
              <div className="flex items-center gap-3">
                <button onClick={limpar} className="px-4 py-3 bg-papel border-2 border-tinta font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-madeira">
                  Tentar Outro Risco
                </button>
                <button onClick={concluirPrologo} className="inline-flex items-center gap-2 bg-tinta text-papel-claro px-6 py-3 font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-acento-azul transition-all">
                  <span>Entrar na Exposição</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full max-w-4xl flex items-center justify-between font-mono text-xs text-tinta-cinza pb-2">
        <span>Sesc Santo André • Espaço de Tecnologias e Artes</span>
        {pontos.length > 0 && estagio !== 'morfando' && estagio !== 'corpo' && (
          <button onClick={limpar} className="flex items-center gap-1 text-tinta hover:underline">
            <RotateCcw className="w-3.5 h-3.5" /> Limpar Risco
          </button>
        )}
      </div>
    </div>
  );
};
