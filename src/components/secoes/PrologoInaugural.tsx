import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { ArrowRight, Sparkles, RotateCcw } from 'lucide-react';

export const PrologoInaugural: React.FC = () => {
  const { prologoConcluido, concluirPrologo, tocarSom, gravarPontoGesto } = useExposicao();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [desenhando, setDesenhando] = useState(false);
  const [estagio, setEstagio] = useState<'silencio' | 'gesto' | 'letra' | 'corpo'>('silencio');
  const [pontos, setPontos] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const iniciarGesto = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setDesenhando(true);
    setEstagio('gesto');
    tocarSom('entalhe');
    desenhar(e);
  };

  const finalizarGesto = () => {
    setDesenhando(false);
    if (pontos.length > 5) {
      setTimeout(() => {
        setEstagio('letra');
        tocarSom('chumbo');
      }, 400);
      setTimeout(() => {
        setEstagio('corpo');
        tocarSom('madeira');
      }, 1600);
    }
  };

  const desenhar = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!desenhando && e.type !== 'mousedown' && e.type !== 'touchstart') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const novoPonto = { x, y };
    setPontos(prev => [...prev, novoPonto]);
    gravarPontoGesto(novoPonto);

    ctx.strokeStyle = '#0A0A0A';
    ctx.lineWidth = 14;
    ctx.beginPath();
    if (pontos.length > 0) {
      const ultimo = pontos[pontos.length - 1];
      ctx.moveTo(ultimo.x, ultimo.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const limparCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPontos([]);
    setEstagio('silencio');
    tocarSom('papel');
  };

  if (prologoConcluido) return null;

  return (
    <div className="fixed inset-0 z-50 bg-papel flex flex-col items-center justify-between p-6 select-none overflow-hidden">
      {/* Topo do Prólogo */}
      <div className="w-full max-w-4xl flex items-center justify-between font-mono text-xs uppercase text-tinta-cinza pt-2">
        <span className="font-bold tracking-widest text-tinta">PRÓLOGO • O SILÊNCIO DA MATÉRIA</span>
        <button
          onClick={concluirPrologo}
          className="underline hover:text-tinta text-tinta-cinza"
        >
          Pular para a Exposição [→]
        </button>
      </div>

      {/* Centro: Canvas de Gesto ou Morfogênese */}
      <div className="relative w-full max-w-2xl h-80 sm:h-96 my-auto flex items-center justify-center">
        {estagio === 'silencio' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute text-center space-y-2 pointer-events-none"
          >
            <p className="font-serifa italic text-2xl sm:text-3xl md:text-4xl text-tinta-desbotada">
              “Faça um gesto sobre a matéria.”
            </p>
            <span className="font-mono text-xs uppercase text-acento-vermelho font-bold block">
              [ Clique e arraste para riscar a primeira linha ]
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
          className={`w-full h-full cursor-crosshair border-2 border-dashed border-tinta/30 bg-papel-claro/50 transition-opacity ${
            estagio === 'corpo' ? 'opacity-20' : 'opacity-100'
          }`}
        />

        {/* Morfogênese: Letra e Revelação */}
        <AnimatePresence>
          {estagio === 'letra' && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="absolute font-serifa font-black text-9xl text-tinta pointer-events-none"
            >
              P
            </motion.div>
          )}

          {estagio === 'corpo' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-papel/95 border-2 border-tinta shadow-carimbo-lg space-y-4"
            >
              <span className="font-mono text-xs uppercase text-acento-vermelho font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Gesto Concluído
              </span>
              <h2 className="font-serifa italic text-3xl sm:text-4xl md:text-5xl text-tinta font-bold">
                “Você acabou de dar corpo a uma ideia.”
              </h2>
              <p className="font-corpo text-sm text-tinta max-w-md">
                O pensamento tornou-se gesto. O gesto deixou sua marca. A matéria da palavra começa aqui.
              </p>
              <button
                onClick={concluirPrologo}
                className="inline-flex items-center gap-2 bg-tinta text-papel-claro px-8 py-3.5 font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-acento-azul transition-all"
              >
                <span>Entrar no corpoDApalavra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Rodapé do Prólogo */}
      <div className="w-full max-w-4xl flex items-center justify-between font-mono text-xs text-tinta-cinza pb-2">
        <span>Sesc Santo André • Espaço de Tecnologias e Artes</span>
        {pontos.length > 0 && estagio !== 'corpo' && (
          <button
            onClick={limparCanvas}
            className="flex items-center gap-1 text-tinta hover:underline"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Limpar Matriz
          </button>
        )}
      </div>
    </div>
  );
};
