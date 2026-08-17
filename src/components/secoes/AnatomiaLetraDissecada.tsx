import React, { useState } from 'react';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { DADOS_PARTES_ANATOMICAS, ParteAnatomica } from '../../dados/dadosPartesAnatomicas';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Scissors, Sparkles, ZoomIn } from 'lucide-react';

export const AnatomiaLetraDissecada: React.FC = () => {
  const [parteAtiva, setParteAtiva] = useState<ParteAnatomica>('bojo');
  const { tocarSom, registrarGlifo } = useExposicao();

  const handleSelecionarParte = (parte: ParteAnatomica) => {
    setParteAtiva(parte);
    tocarSom('entalhe');
    registrarGlifo(`P-${parte.toUpperCase()}`);
  };

  const infoAtual = DADOS_PARTES_ANATOMICAS[parteAtiva];

  return (
    <section id="anatomia" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Dissecação Morfológica em Tempo Real" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              ANATOMIA DO CORPO DA LETRA
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              Selecione as partes anatômicas para dissecar fisicamente o glifo em SVG: linhas-guia, cotas métricas, armadilhas de tinta e contraformas.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 border-2 border-tinta p-1 bg-papel-claro">
            {(['tudo', 'haste', 'bojo', 'serifa', 'armadilha', 'contraforma'] as ParteAnatomica[]).map(p => (
              <button
                key={p}
                onClick={() => handleSelecionarParte(p)}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold transition-all ${
                  parteAtiva === p ? 'bg-tinta text-papel-claro shadow-carimbo' : 'text-tinta hover:bg-madeira/40'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Diagrama de Dissecação do Glifo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 relative h-[400px] sm:h-[480px] bg-papel-claro border-2 border-tinta shadow-carimbo-lg flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 textura-papel opacity-30 pointer-events-none" />

            <div className="absolute top-[16%] left-0 right-0 border-b border-dashed border-tinta/30 flex justify-end pr-3 font-mono text-[10px] text-tinta-cinza uppercase">
              Cap-Height (Altura das Maiúsculas)
            </div>
            <div className="absolute bottom-[20%] left-0 right-0 border-b-2 border-tinta/40 flex justify-end pr-3 font-mono text-[10px] text-tinta-cinza uppercase">
              Baseline (Linha de Base 0.00mm)
            </div>

            <svg viewBox="0 0 300 350" className="w-72 sm:w-96 md:w-[420px] h-full select-none">
              <path
                d="M50 50 L115 50 L115 65 L95 65 L95 80 L50 80 Z"
                className={`cursor-pointer transition-all duration-300 ${
                  parteAtiva === 'serifa' || parteAtiva === 'tudo' ? 'fill-tinta stroke-acento-vermelho stroke-2' : 'fill-tinta/20'
                }`}
                onClick={() => handleSelecionarParte('serifa')}
              />
              <path
                d="M65 65 L95 65 L95 270 L65 270 Z"
                className={`cursor-pointer transition-all duration-300 ${
                  parteAtiva === 'haste' || parteAtiva === 'tudo' ? 'fill-tinta stroke-acento-vermelho stroke-2' : 'fill-tinta/20'
                }`}
                onClick={() => handleSelecionarParte('haste')}
              />
              <path
                d="M45 270 L115 270 L115 285 L45 285 Z"
                className={`cursor-pointer transition-all duration-300 ${
                  parteAtiva === 'serifa' || parteAtiva === 'tudo' ? 'fill-acento-vermelho stroke-tinta stroke-2' : 'fill-tinta/20'
                }`}
                onClick={() => handleSelecionarParte('serifa')}
              />
              <path
                d="M95 65 C170 65 235 90 235 150 C235 210 170 235 95 235 L95 205 C150 205 200 185 200 150 C200 115 150 95 95 95 Z"
                className={`cursor-pointer transition-all duration-300 ${
                  parteAtiva === 'bojo' || parteAtiva === 'tudo' ? 'fill-tinta stroke-acento-vermelho stroke-2' : 'fill-tinta/20'
                }`}
                onClick={() => handleSelecionarParte('bojo')}
              />
              <path
                d="M90 92 L105 92 L95 105 Z M90 208 L105 208 L95 195 Z"
                className={`cursor-pointer transition-all duration-300 ${
                  parteAtiva === 'armadilha' ? 'fill-acento-vermelho stroke-tinta stroke-2 scale-125' : 'fill-acento-amarelo'
                }`}
                onClick={() => handleSelecionarParte('armadilha')}
              />
              <ellipse
                cx="145" cy="150" rx="48" ry="45"
                className={`cursor-pointer transition-all duration-300 ${
                  parteAtiva === 'contraforma' ? 'fill-acento-azul/40 stroke-acento-azul stroke-2' : 'fill-transparent'
                }`}
                onClick={() => handleSelecionarParte('contraforma')}
              />
            </svg>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-madeira p-6 border-2 border-tinta shadow-carimbo">
              <div className="flex items-center justify-between font-mono text-xs uppercase font-bold text-tinta border-b border-tinta pb-2 mb-3">
                <span className="flex items-center gap-1.5">
                  <Scissors className="w-4 h-4 text-acento-vermelho" /> Dissecação Ativa
                </span>
                <span className="bg-tinta text-papel px-2 py-0.5">{parteAtiva.toUpperCase()}</span>
              </div>
              <h3 className="font-anton uppercase text-3xl text-tinta tracking-tight">{infoAtual.titulo}</h3>
              <p className="font-corpo text-sm text-tinta mt-3 leading-relaxed">{infoAtual.desc}</p>
            </div>

            <div className="bg-papel-claro p-6 border-2 border-tinta shadow-carimbo space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-tinta border-b border-tinta/20 pb-2">
                <span className="font-bold flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-acento-vermelho" /> Cota Métrica:
                </span>
                <span className="text-acento-vermelho font-bold">{infoAtual.cota}</span>
              </div>
              <p className="font-corpo text-xs text-tinta italic bg-papel p-3 border border-tinta">
                {infoAtual.funcao}
              </p>
              <div className="pt-1 flex items-center gap-1.5 font-mono text-[10px] uppercase text-tinta-cinza">
                <Sparkles className="w-3 h-3 text-acento-amarelo" />
                <span>Toque nas partes do glifo acima para dissecar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
