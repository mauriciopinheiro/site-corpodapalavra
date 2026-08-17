import React, { useState } from 'react';
import { DADOS_AZ_REAL, GrupoAZReal } from '../../dados/dadosAZReal';
import { GlifoSVG } from './GlifosSVG';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Sparkles, X, Quote, Type } from 'lucide-react';

export const AZPainelModular: React.FC = () => {
  const [grupoSelecionado, setGrupoSelecionado] = useState<GrupoAZReal | null>(null);
  const { tocarSom, registrarGlifo } = useExposicao();

  const handleSelecionar = (grupo: GrupoAZReal) => {
    setGrupoSelecionado(grupo);
    tocarSom('chumbo');
    registrarGlifo(grupo.letras.toUpperCase());
  };

  return (
    <section id="az-modular" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="O Alfabeto da Exposição • 12 Módulos" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              O A–Z DE CORPOS DISTINTOS
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              26 caracteres divididos em 12 corpos visuais radicalmente distintos: fontes brasileiras, vetores singulares e citações originais da exposição física.
            </p>
          </div>

          <div className="font-mono text-xs text-tinta-cinza uppercase flex items-center gap-2">
            <span className="w-3 h-3 bg-acento-vermelho inline-block" />
            <span>“O caractere permanece; o corpo muda.”</span>
          </div>
        </div>

        {/* Grade dos 12 Módulos com Glifos SVG Reais */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {DADOS_AZ_REAL.map(grupo => (
            <div
              key={grupo.id}
              onClick={() => handleSelecionar(grupo)}
              className="group cursor-pointer border-2 border-tinta bg-madeira p-4 shadow-carimbo hover:bg-madeira-clara hover:-translate-y-1 transition-all flex flex-col justify-between h-48 sm:h-52 relative overflow-hidden"
            >
              <div className="absolute inset-0 textura-madeira opacity-25 pointer-events-none" />

              {/* Cabeçalho do Bloco */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-tinta font-bold border-b border-tinta/30 pb-1">
                <span>MOD {String(grupo.id).padStart(2, '0')}</span>
                <span className="truncate max-w-[75px] text-acento-vermelho uppercase">{grupo.conceito}</span>
              </div>

              {/* Glifo SVG Renderizado */}
              <div className="relative z-10 my-auto h-20 flex items-center justify-center p-2 text-tinta group-hover:text-tinta-pura group-hover:scale-110 transition-transform">
                <GlifoSVG grupo={grupo.letras} className="w-full h-full" />
              </div>

              {/* Rodapé do Bloco com Fonte Real */}
              <div className="relative z-10 border-t border-tinta/30 pt-1 font-mono text-[10px] text-tinta flex items-center justify-between">
                <span className="font-bold uppercase truncate">{grupo.fonte.split('/')[0]}</span>
                <span className="text-acento-vermelho">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Factual do Grupo Selecionado */}
      {grupoSelecionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tinta/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-papel border-2 border-tinta shadow-carimbo-lg p-6 sm:p-8">
            <button
              onClick={() => setGrupoSelecionado(null)}
              className="absolute top-4 right-4 p-2 bg-papel-claro border-2 border-tinta hover:bg-tinta hover:text-papel-claro transition-colors shadow-carimbo"
              aria-label="Fechar detalhe do glifo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-tinta border-b-2 border-tinta pb-3 mb-6">
              <span className="bg-tinta text-papel px-2 py-0.5">MÓDULO #{String(grupoSelecionado.id).padStart(2, '0')}</span>
              <span>CARACTERES: {grupoSelecionado.letras.toUpperCase()}</span>
              <span className="text-acento-vermelho ml-auto">{grupoSelecionado.conceito}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="w-36 h-36 bg-madeira border-2 border-tinta shadow-carimbo flex items-center justify-center p-4 text-tinta textura-madeira shrink-0">
                <GlifoSVG grupo={grupoSelecionado.letras} className="w-full h-full" />
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <span className="font-mono text-xs text-tinta-cinza uppercase">Fonte Oficial na Exposição:</span>
                <h3 className="font-anton uppercase text-3xl text-tinta tracking-tight">
                  {grupoSelecionado.fonte}
                </h3>
                <p className="font-mono text-xs text-tinta-desbotada flex items-center gap-1 justify-center sm:justify-start">
                  <Sparkles className="w-3.5 h-3.5 text-acento-vermelho" />
                  {grupoSelecionado.autorOuReferencia}
                </p>
              </div>
            </div>

            <div className="space-y-4 border-t-2 border-tinta/20 pt-4 mb-6">
              <p className="font-corpo text-sm text-tinta leading-relaxed">
                {grupoSelecionado.descricao}
              </p>

              {grupoSelecionado.citacaoOuPensamento && (
                <div className="p-4 bg-papel-claro border-2 border-tinta shadow-carimbo">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold text-acento-vermelho mb-1">
                    <Quote className="w-3.5 h-3.5" /> {grupoSelecionado.autorCitacao || 'Curadoria'}
                  </div>
                  <p className="font-serifa italic text-sm text-tinta">
                    {grupoSelecionado.citacaoOuPensamento}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t-2 border-tinta pt-4 font-mono text-xs text-tinta-cinza uppercase">
              <span className="flex items-center gap-1">
                <Type className="w-3.5 h-3.5" /> oSERtipografia — Sesc Santo André
              </span>
              <button
                onClick={() => setGrupoSelecionado(null)}
                className="font-bold underline hover:text-tinta text-tinta"
              >
                Fechar [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
