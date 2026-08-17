import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { Ponto, reamostrarPontos, gerarPontosAlvoP, interpolarPontos } from '../../servicos/transformadorP';
import { ArrowRight, Sparkles, RotateCcw, Feather } from 'lucide-react';

export const PrologoInaugural: React.FC = () => {
  const { prologoConcluido, concluirPrologo, tocarSom, gravarPontoGesto } = useExposicao();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [desenhando, setDesenhando] = useState(false);
  const [estagio, setEstagio] = useState<'silencio' | 'gesto' | 'morfando' | 'corpo'>('silencio');
  const [pontos, setPontos] = useState<Ponto[]>([]);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    cv.width = cv.offsetWidth * window.devicePixelRatio;
    cv.height = cv.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const desenharCaminho = (pts: Ponto[], espessura = 16) => {
    const cv = canvasRef.current;
    if (!cv || pts.length < 2) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.strokeStyle = '#0A0A0A';
    ctx.lineWidth = espessura;
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.stroke();
  };

  const obterCoord = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>): Ponto => {
    const cv = canvasRef.current;
    if (!cv) return { x: 0, y: 0 };
    const r = cv.getBoundingClientRect();
    const cx = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const cy = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    return { x: cx - r.left, y: cy - r.top };
  };

  const iniciarGesto = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (estagio === 'morfando') return;
    setDesenhando(true);
    setEstagio('gesto');
    tocarSom('entalhe');
    const pt = obterCoord(e);
    setPontos([pt]);
  };

  const desenhar = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!desenhando) return;
    const pt = obterCoord(e);
    setPontos(prev => {
      const novos = [...prev, pt];
      desenharCaminho(novos, 16);
      gravarPontoGesto(pt);
      return novos;
    });
  };

  const finalizarGesto = () => {
    if (!desenhando || pontos.length < 3) {
      setDesenhando(false);
      return;
    }
    setDesenhando(false);
    setEstagio('morfando');
    const cv = canvasRef.current;
    if (!cv) return;

    const ptsOrig = reamostrarPontos(pontos, 64);
    const ptsAlvo = gerarPontosAlvoP(cv.offsetWidth / 2, cv.offsetHeight / 2, 200, 64);
    let inicio: number | null = null;

    const animar = (agora: number) => {
      if (!inicio) inicio = agora;
      const progresso = Math.min(1, (agora - inicio) / 1200);
      desenharCaminho(interpolarPontos(ptsOrig, ptsAlvo, progresso), 16 + progresso * 4);

      if (progresso < 1) {
        animFrameRef.current = requestAnimationFrame(animar);
      } else {
        tocarSom('chumbo');
        setTimeout(() => setEstagio('corpo'), 350);
      }
    };
    animFrameRef.current = requestAnimationFrame(animar);
  };

  const limpar = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    const cv = canvasRef.current;
    if (cv) {
      const ctx = cv.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, cv.width, cv.height);
    }
    setPontos([]);
    setEstagio('silencio');
    tocarSom('papel');
  };

  if (prologoConcluido) return null;

  return (
    <div className="fixed inset-0 z-50 bg-papel flex flex-col items-center justify-between p-6 select-none overflow-hidden">
      <div className="w-full max-w-4xl flex items-center justify-between font-mono text-xs uppercase text-tinta-cinza pt-2">
        <span className="font-bold tracking-widest text-tinta flex items-center gap-1.5">
          <Feather className="w-4 h-4 text-acento-vermelho" /> PRÓLOGO • O GESTO TRANSFORMA-SE EM LETRA
        </span>
        <button onClick={concluirPrologo} className="underline hover:text-tinta text-tinta-cinza">
          Pular [→]
        </button>
      </div>

      <div className="relative w-full max-w-2xl h-80 sm:h-96 my-auto flex items-center justify-center">
        {estagio === 'silencio' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute text-center space-y-2 pointer-events-none">
            <p className="font-serifa italic text-2xl sm:text-3xl md:text-4xl text-tinta-desbotada">
              “Faça qualquer risco sobre a matéria.”
            </p>
            <span className="font-mono text-xs uppercase text-acento-vermelho font-bold block">
              [ Risque livremente: qualquer traço dobrará e virará um P ]
            </span>
          </motion.div>
        )}

        <canvas
          ref={canvasRef}
          onMouseDown={iniciarGesto}
          onMouseMove={desenhar}
          onMouseUp={finalizarGesto}
          onTouchStart={iniciarGesto}
          onTouchMove={desenhar}
          onTouchEnd={finalizarGesto}
          className="w-full h-full cursor-crosshair border-2 border-dashed border-tinta/30 bg-papel-claro/50"
        />

        <AnimatePresence>
          {estagio === 'corpo' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-papel/95 border-2 border-tinta shadow-carimbo-lg space-y-4"
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
