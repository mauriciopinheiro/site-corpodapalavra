import React, { useRef } from 'react';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Stamp, Printer, Compass, Feather } from 'lucide-react';

export const EpilogoMemoriaPercurso: React.FC = () => {
  const { memoria, adicionarCarimbo } = useExposicao();
  const cartazRef = useRef<HTMLDivElement>(null);

  const carimbosDisponiveis = ['MATÉRIA', 'GESTO', 'TIPO', 'CORPO', 'SILÊNCIO', 'SESC ETA'];
  const imprimirCartaz = () => window.print();

  const tempoMinutos = Math.max(1, Math.round((Date.now() - memoria.tempoInicio) / 60000));
  const ultimoGlifo = memoria.glifosDissecados[memoria.glifosDissecados.length - 1] || 'P';
  const ultimoAutor = memoria.excertosLidos[memoria.excertosLidos.length - 1] || 'Paulo Freire';
  const ultimoMaterial = memoria.materiaisExplorados[memoria.materiaisExplorados.length - 1] || 'pedra';

  // Gerar path SVG a partir dos pontos reais desenhados pelo visitante no Prólogo
  const gerarPathGesto = () => {
    if (!memoria.gestoInicial || memoria.gestoInicial.length < 2) {
      return 'M 20 80 Q 150 20 280 80';
    }
    const [primeiro, ...resto] = memoria.gestoInicial;
    return `M ${primeiro.x % 300} ${primeiro.y % 120} ` + resto.map(p => `L ${p.x % 300} ${p.y % 120}`).join(' ');
  };

  return (
    <section id="epilogo" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <EtiquetaAtelier texto="Epílogo • O Corpo da sua Passagem" variante="escuro" />
          <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
            MEMÓRIA DO SEU PERCURSO
          </h2>
          <p className="font-serifa italic text-tinta-desbotada text-lg mt-2">
            “Antes, era pensamento. Agora teve corpo.”
          </p>
        </div>

        {/* Bancada de Carimbos */}
        <div className="bg-papel-claro border-2 border-tinta p-6 shadow-carimbo mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-tinta/20 pb-4 mb-4">
            <span className="font-mono text-xs uppercase font-bold text-tinta flex items-center gap-1.5">
              <Stamp className="w-4 h-4 text-acento-vermelho" /> Aplique Carimbos na sua Tiragem:
            </span>
            <span className="font-mono text-xs text-tinta-cinza">
              {memoria.carimbosAplicados.length} carimbos gravados
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {carimbosDisponiveis.map(carimbo => (
              <button
                key={carimbo}
                onClick={() => adicionarCarimbo(carimbo)}
                className="px-3.5 py-1.5 bg-madeira border-2 border-tinta font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-tinta hover:text-papel transition-all active:translate-x-0.5"
              >
                + Carimbar [{carimbo}]
              </button>
            ))}
          </div>
        </div>

        {/* Cartaz 100% Gerativo a Partir da Sessão do Visitante */}
        <div
          ref={cartazRef}
          className="max-w-3xl mx-auto bg-papel-claro border-4 border-tinta shadow-carimbo-lg p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 textura-papel opacity-40 pointer-events-none" />

          {/* Cabeçalho da Prova */}
          <div className="flex items-center justify-between border-b-2 border-tinta pb-4 mb-6 font-mono text-xs uppercase font-bold text-tinta">
            <span>PROVA DE PRELO • TIRAGEM ÚNICA #{memoria.marcasTotais}</span>
            <span>SESC SANTO ANDRÉ • ETA</span>
          </div>

          {/* Traço Real do Gesto Inicial do Visitante */}
          <div className="border-2 border-dashed border-tinta/30 p-4 mb-6 bg-papel">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase text-tinta-cinza pb-1 mb-2 border-b border-tinta/10">
              <span className="flex items-center gap-1"><Feather className="w-3 h-3 text-acento-vermelho" /> Seu Gesto Inaugural:</span>
              <span>Vetor Capturado</span>
            </div>
            <svg viewBox="0 0 300 100" className="w-full h-16 stroke-tinta fill-none stroke-[3] stroke-round">
              <path d={gerarPathGesto()} />
            </svg>
          </div>

          {/* Glifo e Matéria do Visitante */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
            <div className="sm:col-span-4 h-32 bg-madeira border-2 border-tinta shadow-carimbo flex items-center justify-center font-serifa text-7xl font-black text-tinta">
              {ultimoGlifo.slice(0, 3)}
            </div>
            <div className="sm:col-span-8 space-y-1">
              <span className="font-mono text-[10px] uppercase text-acento-vermelho font-bold block">
                SUBSTRATO PREDOMINANTE: {ultimoMaterial.toUpperCase()}
              </span>
              <h3 className="font-anton uppercase text-3xl text-tinta">
                corpoDApalavra
              </h3>
              <p className="font-serifa italic text-sm text-tinta-desbotada">
                Matriz talhada sob o pensamento de <strong className="text-tinta not-italic">{ultimoAutor}</strong> durante {tempoMinutos} min de imersão tátil.
              </p>
            </div>
          </div>

          {/* Carimbos Marcados */}
          <div className="border-t-2 border-dashed border-tinta/40 pt-4 mb-6">
            <span className="font-mono text-[10px] text-tinta-cinza uppercase block mb-2 font-bold">
              Marcas e Carimbos Físicos Impressos:
            </span>
            <div className="flex flex-wrap gap-2">
              {memoria.carimbosAplicados.map((c, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-tinta text-papel font-mono text-[11px] uppercase font-bold shadow-carimbo -rotate-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Rodapé e Autenticação */}
          <div className="flex items-center justify-between border-t-2 border-tinta pt-4 font-mono text-[11px] text-tinta-cinza uppercase">
            <span>Total de Marcas Físicas: {memoria.marcasTotais}</span>
            <span className="flex items-center gap-1"><Compass className="w-3 h-3" /> Gráfica Experimental × Estúdio Agudo</span>
          </div>
        </div>

        {/* Botão de Impressão */}
        <div className="text-center mt-8">
          <button
            onClick={imprimirCartaz}
            className="inline-flex items-center gap-2 bg-tinta text-papel-claro px-8 py-3.5 font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-acento-vermelho transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Salvar Prova de Prelo (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
