import React, { useRef, useState } from 'react';
import { ArrowDown, Feather, Sparkles, RotateCcw } from 'lucide-react';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { Ponto, reamostrarPontos, gerarPontosAlvoP, interpolarPontos, pontosParaSvgPath } from '../../servicos/transformadorP';

export const HeroSection: React.FC = () => {
  const { tocarSom, gravarPontoGesto } = useExposicao();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [desenhando, setDesenhando] = useState(false);
  const [pontos, setPontos] = useState<Ponto[]>([]);
  const [pontosMorfados, setPontosMorfados] = useState<Ponto[]>([]);
  const [morfado, setMorfado] = useState(false);
  const animRef = useRef<number | null>(null);

  const obterCoord = (e: React.PointerEvent<SVGSVGElement>): Ponto => {
    const svg = svgRef.current;
    if (!svg) return { x: 300, y: 150 };
    const r = svg.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 600;
    const y = ((e.clientY - r.top) / r.height) * 300;
    return { x, y };
  };

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    setDesenhando(true);
    setMorfado(false);
    tocarSom('entalhe');
    const pt = obterCoord(e);
    setPontos([pt]);
    setPontosMorfados([pt]);
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!desenhando) return;
    const pt = obterCoord(e);
    setPontos(prev => {
      const novos = [...prev, pt];
      setPontosMorfados(novos);
      gravarPontoGesto(pt);
      return novos;
    });
  };

  const onPointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!desenhando) return;
    setDesenhando(false);
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}

    if (pontos.length < 2) {
      const pt = pontos[0] || { x: 300, y: 150 };
      pontos.push({ x: pt.x + 15, y: pt.y + 15 });
    }

    const ptsOrig = reamostrarPontos(pontos, 64);
    const ptsAlvo = gerarPontosAlvoP(300, 150, 210, 64);
    let inicio: number | null = null;

    const animar = (agora: number) => {
      if (!inicio) inicio = agora;
      const prog = Math.min(1, (agora - inicio) / 1000);
      setPontosMorfados(interpolarPontos(ptsOrig, ptsAlvo, prog));

      if (prog < 1) {
        animRef.current = requestAnimationFrame(animar);
      } else {
        tocarSom('chumbo');
        setMorfado(true);
      }
    };
    animRef.current = requestAnimationFrame(animar);
  };

  const limpar = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setPontos([]);
    setPontosMorfados([]);
    setMorfado(false);
    tocarSom('papel');
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between px-4 md:px-8 py-8 border-b-2 border-tinta overflow-hidden bg-papel-claro">
      <div className="absolute inset-0 textura-papel opacity-40 pointer-events-none" />

      {/* Topo do Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-tinta/20 pb-3">
        <EtiquetaAtelier
          texto="Espaço de Tecnologias e Artes • Sesc Santo André"
          subtexto="Exposição de Artes Gráficas & Tipografia"
          variante="escuro"
        />
        <span className="font-mono text-[11px] uppercase text-tinta-cinza hidden sm:block">
          EXPOGRAFIA GESTUAL & TIPOGRÁFICA
        </span>
      </div>

      {/* Centro: Título Monumental + Bancada de Gesto & Tinta */}
      <div className="relative z-10 my-auto py-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Título Principal */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-baseline gap-3">
              <h1 className="font-serifa italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-tinta leading-none">
                corpo
              </h1>
              <span className="font-mono font-black text-2xl sm:text-4xl text-acento-vermelho border-b-4 border-acento-vermelho">
                DA
              </span>
            </div>
            <div className="font-anton text-tinta uppercase text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none">
              PALAVRA
            </div>
            <p className="font-serifa text-lg sm:text-2xl text-tinta-desbotada pt-2 max-w-xl">
              Quando a linguagem deixa de ser apenas abstração do pensamento e passa a <strong className="text-tinta underline decoration-acento-vermelho">ocupar o espaço físico</strong>.
            </p>
          </div>

          {/* Bancada Interativa de Gesto da Matéria */}
          <div className="lg:col-span-5 bg-papel border-2 border-tinta shadow-carimbo-lg p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase text-tinta font-bold border-b border-tinta/20 pb-2 mb-2">
              <span className="flex items-center gap-1"><Feather className="w-3.5 h-3.5 text-acento-vermelho" /> Bancada do Gesto</span>
              <span>{morfado ? 'Letra P Gravada' : 'Risque Livremente'}</span>
            </div>

            <div className="relative h-48 bg-papel-claro border border-dashed border-tinta/40 overflow-hidden cursor-crosshair">
              {pontos.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-center p-4 pointer-events-none">
                  <span className="font-mono text-xs text-tinta-cinza uppercase">
                    [ Risque com o mouse/dedo: o traço dobrará e virará um P ]
                  </span>
                </div>
              )}

              <svg
                ref={svgRef}
                viewBox="0 0 600 300"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                className="w-full h-full touch-none"
                style={{ touchAction: 'none' }}
              >
                {pontosMorfados.length > 1 && (
                  <path
                    d={pontosParaSvgPath(pontosMorfados)}
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth={morfado ? 20 : 16}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>

            <div className="flex items-center justify-between font-mono text-[10px] uppercase text-tinta-cinza pt-2">
              <span className="flex items-center gap-1">
                {morfado && <Sparkles className="w-3 h-3 text-acento-vermelho" />}
                {morfado ? 'Gesto convertido em matriz' : 'Do gesto nasce a letra'}
              </span>
              {pontos.length > 0 && (
                <button onClick={limpar} className="hover:text-tinta flex items-center gap-1 underline font-bold">
                  <RotateCcw className="w-3 h-3" /> Limpar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé do Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-4 border-t border-tinta/20">
        <a
          href="#manifesto"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-tinta hover:text-acento-vermelho transition-colors"
        >
          <span className="w-7 h-7 border-2 border-tinta flex items-center justify-center bg-papel shadow-carimbo">
            <ArrowDown className="w-3.5 h-3.5" />
          </span>
          <span>Explorar o percurso da exposição</span>
        </a>
        <span className="font-mono text-[10px] text-tinta-cinza uppercase hidden sm:block">
          Sesc Santo André • ETA
        </span>
      </div>
    </section>
  );
};
