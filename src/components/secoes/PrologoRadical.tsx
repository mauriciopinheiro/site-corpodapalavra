import React, { useRef, useState, useEffect } from 'react';
import { useExposicao, PontoGesto } from '../../contexto/ContextoExposicao';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

export const PrologoRadical: React.FC = () => {
  const { concluirPrologo, gravarPontoGesto, tocarSom, audioAtivo, alternarAudio } = useExposicao();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [desenhando, setDesenhando] = useState(false);
  const [pontos, setPontos] = useState<PontoGesto[]>([]);
  const [fase, setFase] = useState<'vazio' | 'desenhando' | 'transformando' | 'revelado'>('vazio');
  const [progressoMorph, setProgressoMorph] = useState(0);

  // Redimensiona o canvas para preencher a tela
  useEffect(() => {
    const ajustarTamanho = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    ajustarTamanho();
    window.addEventListener('resize', ajustarTamanho);
    return () => window.removeEventListener('resize', ajustarTamanho);
  }, []);

  // Animação de morphing do gesto para o glifo P
  useEffect(() => {
    if (fase === 'transformando') {
      let frame = 0;
      const totalFrames = 45;
      const timer = setInterval(() => {
        frame++;
        setProgressoMorph(frame / totalFrames);
        if (frame >= totalFrames) {
          clearInterval(timer);
          setFase('revelado');
          tocarSom('chumbo');
        }
      }, 20);
      return () => clearInterval(timer);
    }
  }, [fase]);

  const obterCoord = (e: React.PointerEvent<HTMLCanvasElement>): PontoGesto => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (fase === 'transformando' || fase === 'revelado') return;
    setDesenhando(true);
    setFase('desenhando');
    const p = obterCoord(e);
    setPontos([p]);
    gravarPontoGesto(p);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!desenhando) return;
    const p = obterCoord(e);
    setPontos(prev => [...prev, p]);
    gravarPontoGesto(p);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && pontos.length > 0) {
      const ult = pontos[pontos.length - 1];
      ctx.beginPath();
      ctx.moveTo(ult.x, ult.y);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = '#0D0D0D';
      ctx.lineWidth = Math.min(18, Math.max(6, 12 - pontos.length * 0.05));
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
  };

  const handlePointerUp = () => {
    if (!desenhando || pontos.length < 3) {
      setDesenhando(false);
      return;
    }
    setDesenhando(false);
    tocarSom('entalhe');
    setFase('transformando');
  };

  return (
    <div
      role="region"
      aria-label="Abertura Imersiva: Do Gesto à Palavra"
      className="fixed inset-0 z-50 bg-[#F7F4EC] text-tinta flex flex-col items-center justify-between select-none overflow-hidden"
    >
      <div className="absolute inset-0 textura-papel opacity-70 pointer-events-none" />

      {/* Botão de acessibilidade / pular introdução */}
      <div className="w-full max-w-7xl mx-auto p-4 flex justify-between items-center z-20 font-mono text-xs">
        <button
          onClick={concluirPrologo}
          className="bg-papel/80 px-3 py-1.5 border border-tinta/30 hover:border-tinta focus:ring-2 focus:ring-tinta text-tinta-cinza hover:text-tinta transition-all"
        >
          [ Pular Introdução e Entrar na Exposição ]
        </button>

        <button
          onClick={alternarAudio}
          className="p-1.5 border border-tinta/30 hover:border-tinta bg-papel/80 text-tinta transition-colors"
          aria-label={audioAtivo ? 'Desativar áudio' : 'Ativar áudio'}
        >
          {audioAtivo ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-acento-vermelho" />}
        </button>
      </div>

      {/* Canvas interativo do Gesto no Vazio */}
      <div className="relative w-full h-full flex-1 flex items-center justify-center">
        {fase === 'vazio' && (
          <div className="absolute text-center pointer-events-none z-10 animate-pulse">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-tinta/60 bg-papel/90 px-4 py-2 border border-dashed border-tinta/30">
              [ faça uma marca no vazio com o mouse ou dedo ]
            </span>
          </div>
        )}

        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
        />

        {/* Revelação Cinematográfica da Identidade após o Gesto */}
        {(fase === 'transformando' || fase === 'revelado') && (
          <div
            style={{ opacity: Math.min(1, progressoMorph * 1.5) }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-auto bg-[#F7F4EC]/90 backdrop-blur-sm transition-all duration-700"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-acento-vermelho font-bold mb-4">
              Do gesto nasce a letra. Da letra, a palavra. Da palavra, o corpo.
            </span>

            {/* Letra Monumental Transmutada */}
            <div className="flex items-baseline justify-center gap-2 sm:gap-3 py-4">
              <span className="font-serifa italic text-5xl sm:text-7xl md:text-8xl text-tinta lowercase">
                corpo
              </span>
              <span className="font-mono text-xl sm:text-3xl md:text-4xl font-bold uppercase text-acento-vermelho tracking-widest">
                DA
              </span>
              <span className="font-anton text-6xl sm:text-8xl md:text-9xl text-tinta uppercase tracking-tight">
                palavra
              </span>
            </div>

            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-xl max-w-xl mt-4">
              Tipografia como matéria, gesto, ritmo e espaço.
            </p>

            {fase === 'revelado' && (
              <div className="mt-8 animate-fade-in">
                <button
                  onClick={concluirPrologo}
                  autoFocus
                  className="inline-flex items-center gap-3 bg-tinta text-papel px-8 py-4 font-mono text-sm uppercase font-bold tracking-wider shadow-carimbo-lg hover:bg-acento-azul hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Explorar a Exposição</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Rodapé institucional discreto do Prólogo */}
      <div className="w-full max-w-7xl mx-auto p-4 flex justify-between items-center z-20 font-mono text-[11px] text-tinta-cinza">
        <span>Espaço de Tecnologias e Artes • Sesc Santo André</span>
        <span>Concepção do Projeto Virtual: Maurício Pinheiro</span>
      </div>
    </div>
  );
};
