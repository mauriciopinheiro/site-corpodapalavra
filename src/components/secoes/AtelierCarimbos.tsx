import React, { useState } from 'react';
import { MATRIZES_CARIMBO, ALMOFADAS_TINTA, MatrizCarimbo, CarimbadaInstancia } from '../../dados/dadosCarimbos';
import { BandejaMatrizes } from './carimbos/BandejaMatrizes';
import { MesaCarimbagem } from './carimbos/MesaCarimbagem';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Sparkles, Stamp } from 'lucide-react';

export const AtelierCarimbos: React.FC = () => {
  const [matrizSelecionada, setMatrizSelecionada] = useState<MatrizCarimbo>(MATRIZES_CARIMBO[0]);
  const [corSelecionada, setCorSelecionada] = useState<string>(ALMOFADAS_TINTA[0].corHex);
  const [rotacao, setRotacao] = useState<number>(0);
  const [escala, setEscala] = useState<number>(1.0);
  const [opacidade, setOpacidade] = useState<number>(1.0);
  const [carimbadas, setCarimbadas] = useState<CarimbadaInstancia[]>([]);

  const handleGirar = () => {
    setRotacao(prev => (prev + 45) % 360);
  };

  const handleCarimbar = (nova: CarimbadaInstancia) => {
    setCarimbadas(prev => [...prev, nova]);
  };

  const handleDesfazer = () => {
    setCarimbadas(prev => prev.slice(0, -1));
  };

  const handleLimpar = () => {
    setCarimbadas([]);
  };

  return (
    <section id="carimbos" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Cabeçalho Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Os 12 Carimbos Reais dos Carrinhos do ETA" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight flex items-center gap-3">
              ATELIER DE CARIMBOS DOS CARRINHOS
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-3xl">
              Na exposição física, estruturas móveis acopláveis continham carimbos em linóleo gravados pela Relevo Paulista com os signos e ferramentas do ateliê. Selecione qualquer um dos 12 carimbos para gerar sua composição direta no papel.
            </p>
          </div>

          <div className="bg-madeira p-4 border-2 border-tinta shadow-carimbo shrink-0 font-mono text-xs text-tinta space-y-1">
            <span className="font-bold uppercase flex items-center gap-1">
              <Stamp className="w-3.5 h-3.5 text-acento-vermelho" /> Carrinhos Móveis do ETA
            </span>
            <p className="text-[11px] text-tinta-cinza">
              12 signos conceituais • 5 pigmentos minerais • Exportação de gravura SVG
            </p>
          </div>
        </div>

        {/* Layout do Laboratório de Carimbagem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna da Esquerda: Bandeja dos 12 Carimbos */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <BandejaMatrizes
              matrizSelecionada={matrizSelecionada}
              onSelecionarMatriz={setMatrizSelecionada}
              corSelecionada={corSelecionada}
              onSelecionarCor={setCorSelecionada}
              rotacao={rotacao}
              onGirar={handleGirar}
              escala={escala}
              onAlterarEscala={setEscala}
              opacidade={opacidade}
              onAlterarOpacidade={setOpacidade}
            />

            <div className="bg-papel-claro p-4 border-2 border-tinta shadow-carimbo font-mono text-xs text-tinta space-y-1.5">
              <span className="font-bold uppercase flex items-center gap-1 text-acento-vermelho">
                <Sparkles className="w-3.5 h-3.5" /> Poética do Carimbo no ETA
              </span>
              <p className="text-[11px] leading-relaxed">
                A aplicação direta do carimbo pelo visitante no papel cria um poema visual em que cada signo materializa um conceito do glossário expográfico.
              </p>
            </div>
          </div>

          {/* Coluna da Direita: Mesa de Papel Interativa */}
          <div className="lg:col-span-7">
            <MesaCarimbagem
              matrizSelecionada={matrizSelecionada}
              corSelecionada={corSelecionada}
              rotacao={rotacao}
              escala={escala}
              opacidade={opacidade}
              carimbadas={carimbadas}
              onCarimbar={handleCarimbar}
              onDesfazer={handleDesfazer}
              onLimpar={handleLimpar}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
