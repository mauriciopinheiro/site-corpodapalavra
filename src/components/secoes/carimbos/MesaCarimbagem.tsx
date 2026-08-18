import React, { useRef, useState } from 'react';
import { MatrizCarimbo, CarimbadaInstancia, MATRIZES_CARIMBO } from '../../../dados/dadosCarimbos';
import { RotateCcw, Undo2, Download, Stamp } from 'lucide-react';
import { useExposicao } from '../../../contexto/ContextoExposicao';

interface PropsMesa {
  matrizSelecionada: MatrizCarimbo;
  corSelecionada: string;
  rotacao: number;
  escala: number;
  opacidade: number;
  carimbadas: CarimbadaInstancia[];
  onCarimbar: (nova: CarimbadaInstancia) => void;
  onDesfazer: () => void;
  onLimpar: () => void;
}

export const MesaCarimbagem: React.FC<PropsMesa> = ({
  matrizSelecionada,
  corSelecionada,
  rotacao,
  escala,
  opacidade,
  carimbadas,
  onCarimbar,
  onDesfazer,
  onLimpar
}) => {
  const { tocarSom, registrarExcerto } = useExposicao();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);

  const obterCoord = (e: React.PointerEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return { x: 300, y: 200 };
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 700;
    const y = ((e.clientY - rect.top) / rect.height) * 450;
    return { x: Math.round(x), y: Math.round(y) };
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    setCursorPos(obterCoord(e));
  };

  const handlePointerLeave = () => {
    setCursorPos(null);
  };

  const handleCarimbar = (e: React.PointerEvent<SVGSVGElement>) => {
    const coord = obterCoord(e);
    tocarSom('carimbo');
    registrarExcerto(`Carimbo-${matrizSelecionada.nome}`);

    const nova: CarimbadaInstancia = {
      id: `carimbo-${Date.now()}-${Math.random()}`,
      matrizId: matrizSelecionada.id,
      x: coord.x,
      y: coord.y,
      rotacao,
      escala,
      corHex: corSelecionada,
      opacidade,
      timestamp: Date.now()
    };
    onCarimbar(nova);
  };

  const exportarSVG = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `corpoDApalavra-gravura-carimbo-${Date.now()}.svg`;
    link.click();
    URL.revokeObjectURL(url);
    tocarSom('papel');
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Barra de Ações Superior */}
      <div className="flex items-center justify-between font-mono text-xs text-tinta-cinza">
        <span className="font-bold uppercase flex items-center gap-1.5 text-tinta">
          <Stamp className="w-4 h-4 text-acento-vermelho" /> Mesa de Impressão • {carimbadas.length} Marcas
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={onDesfazer}
            disabled={carimbadas.length === 0}
            className="flex items-center gap-1 px-2.5 py-1 border border-tinta/40 bg-papel hover:border-tinta disabled:opacity-30 transition-all"
          >
            <Undo2 className="w-3.5 h-3.5" /> Desfazer
          </button>
          <button
            onClick={onLimpar}
            disabled={carimbadas.length === 0}
            className="flex items-center gap-1 px-2.5 py-1 border border-tinta/40 bg-papel hover:border-tinta disabled:opacity-30 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Limpar Papel
          </button>
          <button
            onClick={exportarSVG}
            disabled={carimbadas.length === 0}
            className="flex items-center gap-1 px-3 py-1 bg-tinta text-papel font-bold shadow-carimbo hover:bg-acento-azul disabled:opacity-30 transition-all"
          >
            <Download className="w-3.5 h-3.5" /> Salvar Gravura
          </button>
        </div>
      </div>

      {/* Papel de Trabalho Interativo */}
      <div className="relative w-full h-[380px] sm:h-[450px] bg-[#F7F4EC] border-4 border-tinta shadow-carimbo-lg overflow-hidden cursor-none select-none">
        <div className="absolute inset-0 textura-papel opacity-60 pointer-events-none" />

        {/* Linhas guias de prelo */}
        <div className="absolute inset-x-8 top-1/2 h-[1px] border-b border-dashed border-tinta/20 pointer-events-none" />
        <div className="absolute inset-y-8 left-1/2 w-[1px] border-r border-dashed border-tinta/20 pointer-events-none" />

        <svg
          ref={svgRef}
          viewBox="0 0 700 450"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onPointerDown={handleCarimbar}
          className="w-full h-full touch-none"
        >
          {/* Todas as marcas carimbadas no papel */}
          {carimbadas.map(c => {
            const mat = MATRIZES_CARIMBO.find(m => m.id === c.matrizId);
            if (!mat) return null;
            return (
              <g
                key={c.id}
                transform={`translate(${c.x}, ${c.y}) rotate(${c.rotacao}) scale(${c.escala}) translate(${-mat.largura / 2}, ${-mat.altura / 2})`}
                opacity={c.opacidade}
              >
                <path d={mat.svgPath} fill={c.corHex} stroke={c.corHex} strokeWidth="1.5" />
              </g>
            );
          })}

          {/* Fantasma do carimbo acompanhando o cursor */}
          {cursorPos && (
            <g
              transform={`translate(${cursorPos.x}, ${cursorPos.y}) rotate(${rotacao}) scale(${escala}) translate(${-matrizSelecionada.largura / 2}, ${-matrizSelecionada.altura / 2})`}
              opacity={0.45}
              className="pointer-events-none"
            >
              <path d={matrizSelecionada.svgPath} fill={corSelecionada} stroke={corSelecionada} strokeWidth="2" strokeDasharray="3 3" />
            </g>
          )}
        </svg>

        {carimbadas.length === 0 && !cursorPos && (
          <div className="absolute inset-0 flex items-center justify-center text-center p-6 pointer-events-none">
            <span className="font-mono text-xs uppercase text-tinta-cinza bg-papel/80 p-3 border border-dashed border-tinta/40">
              [ Mova o mouse sobre a folha e clique para carimbar as matrizes ]
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
