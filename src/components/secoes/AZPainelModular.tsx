import React, { useState } from 'react';
import { DADOS_AZ_REAL, GrupoAZReal } from '../../dados/dadosAZReal';
import { GlifoSVG } from './GlifosSVG';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { AZMonumentalModal } from './AZMonumentalModal';
import { Maximize2 } from 'lucide-react';

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
              26 caracteres divididos em 12 corpos visuais radicalmente distintos. Toque em qualquer módulo para entrar no <strong>Modo Monumental Fullscreen</strong>.
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

              {/* Rodapé do Bloco com Gatilho Fullscreen */}
              <div className="relative z-10 border-t border-tinta/30 pt-1 font-mono text-[10px] text-tinta flex items-center justify-between">
                <span className="font-bold uppercase truncate">{grupo.fonte.split('/')[0]}</span>
                <Maximize2 className="w-3 h-3 text-acento-vermelho" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Monumental em Tela Cheia */}
      <AZMonumentalModal
        grupo={grupoSelecionado}
        onFechar={() => setGrupoSelecionado(null)}
      />
    </section>
  );
};
