import React, { useRef } from 'react';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Stamp, Printer } from 'lucide-react';

export const EpilogoMemoriaPercurso: React.FC = () => {
  const { memoria, adicionarCarimbo } = useExposicao();
  const cartazRef = useRef<HTMLDivElement>(null);

  const carimbosDisponiveis = ['MATÉRIA', 'GESTO', 'TIPO', 'CORPO', 'SILÊNCIO', 'SESC ETA'];

  const imprimirCartaz = () => {
    window.print();
  };

  const tempoMinutos = Math.max(1, Math.round((Date.now() - memoria.tempoInicio) / 60000));
  const ultimoGlifo = memoria.glifosDissecados[memoria.glifosDissecados.length - 1] || 'P';
  const ultimoAutor = memoria.excertosLidos[memoria.excertosLidos.length - 1] || 'Paulo Freire';

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

        {/* Bancada de Carimbos do Atelier */}
        <div className="bg-papel-claro border-2 border-tinta p-6 shadow-carimbo mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-tinta/20 pb-4 mb-4">
            <span className="font-mono text-xs uppercase font-bold text-tinta flex items-center gap-1.5">
              <Stamp className="w-4 h-4 text-acento-vermelho" /> Aplique Carimbos de Atelier na sua Prova de Prelo:
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
                className="px-3.5 py-1.5 bg-madeira border-2 border-tinta font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-tinta hover:text-papel transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                + Carimbar [{carimbo}]
              </button>
            ))}
          </div>
        </div>

        {/* O Cartaz Gerativo Único (Prova de Prelo da Sessão) */}
        <div
          ref={cartazRef}
          className="max-w-3xl mx-auto bg-papel-claro border-4 border-tinta shadow-carimbo-lg p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 textura-papel opacity-40 pointer-events-none" />

          {/* Cabeçalho do Cartaz */}
          <div className="flex items-center justify-between border-b-2 border-tinta pb-4 mb-8 font-mono text-xs uppercase font-bold text-tinta">
            <span>PROVA DE PRELO • TIRAGEM ÚNICA</span>
            <span>SESC SANTO ANDRÉ • ETA</span>
          </div>

          {/* Corpo do Cartaz: Glifo + Pensamento + Registro */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center mb-8">
            <div className="sm:col-span-4 h-36 bg-madeira border-2 border-tinta shadow-carimbo flex items-center justify-center font-serifa text-7xl font-black text-tinta">
              {ultimoGlifo}
            </div>
            <div className="sm:col-span-8 space-y-2">
              <span className="font-mono text-[10px] uppercase text-acento-vermelho font-bold block">
                MATRIZ SINTETIZADA NA SUA VISITA
              </span>
              <h3 className="font-anton uppercase text-3xl text-tinta">
                corpoDApalavra
              </h3>
              <p className="font-serifa italic text-base text-tinta-desbotada">
                Diálogo com o pensamento de <strong className="text-tinta not-italic">{ultimoAutor}</strong> registrado ao longo de {tempoMinutos} min de percurso visual e tátil.
              </p>
            </div>
          </div>

          {/* Carimbos Marcados na Folha */}
          <div className="border-t-2 border-dashed border-tinta/40 pt-4 mb-8">
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

          {/* Rodapé e Assinatura da Prova */}
          <div className="flex items-center justify-between border-t-2 border-tinta pt-4 font-mono text-[11px] text-tinta-cinza uppercase">
            <span>Total de Marcas: {memoria.marcasTotais}</span>
            <span>Autenticação: Gráfica Experimental × Estúdio Agudo</span>
          </div>
        </div>

        {/* Botão de Impressão */}
        <div className="text-center mt-8">
          <button
            onClick={imprimirCartaz}
            className="inline-flex items-center gap-2 bg-tinta text-papel-claro px-6 py-3 font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-acento-vermelho transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Salvar Prova de Prelo (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
