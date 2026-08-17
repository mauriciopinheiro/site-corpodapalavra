import React, { useState } from 'react';
import { RotateCcw, Move, Info, Sparkles } from 'lucide-react';
import { DADOS_MODULOS } from '../../dados/dadosModulos';
import { ModuloMadeiraData } from '../../tipos';
import { ModuloMadeira } from './ModuloMadeira';
import { ModalModuloDetalhe } from './ModalModuloDetalhe';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';

export const ParedeTipografica: React.FC = () => {
  const [modulos, setModulos] = useState<ModuloMadeiraData[]>(DADOS_MODULOS);
  const [moduloSelecionado, setModuloSelecionado] = useState<ModuloMadeiraData | null>(null);
  const [filtroLinha, setFiltroLinha] = useState<number | 'todas'>('todas');

  const recomporModulos = () => {
    setModulos([...DADOS_MODULOS]);
  };

  const modulosExibidos = filtroLinha === 'todas'
    ? modulos
    : modulos.filter(m => m.linha === filtroLinha);

  return (
    <section id="parede" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Parede */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Instalação Central — 36 Módulos" variante="escuro" rotacao="-rotate-1" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              PAREDE TIPOGRÁFICA INTERATIVA
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              Recriação do painel modular de madeira da exposição. Arraste os blocos em desktop para recompor a mancha tipográfica ou toque para abrir a anatomia.
            </p>
          </div>

          {/* Barra de Controles & Botão Recompor */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 border-2 border-tinta p-1 bg-papel-claro">
              <span className="font-mono text-[10px] uppercase font-bold px-2 text-tinta-cinza">Linhas:</span>
              {(['todas', 1, 2, 3] as const).map(linha => (
                <button
                  key={linha}
                  onClick={() => setFiltroLinha(linha)}
                  className={`px-2.5 py-1 font-mono text-xs uppercase font-bold transition-all ${
                    filtroLinha === linha
                      ? 'bg-tinta text-papel-claro'
                      : 'hover:bg-madeira/50 text-tinta'
                  }`}
                >
                  {linha === 'todas' ? 'Todas (36)' : `L${linha}`}
                </button>
              ))}
            </div>

            <button
              onClick={recomporModulos}
              className="flex items-center gap-2 bg-acento-vermelho text-white border-2 border-tinta px-4 py-2 font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-tinta active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>recompor</span>
            </button>
          </div>
        </div>

        {/* Instruções de Interatividade */}
        <div className="flex items-center justify-between font-mono text-[11px] uppercase text-tinta-cinza mb-6 px-1">
          <span className="flex items-center gap-1">
            <Move className="w-3.5 h-3.5" /> Arraste para compor livremente no plano
          </span>
          <span className="flex items-center gap-1">
            <Info className="w-3.5 h-3.5" /> Clique para ler o verbete e citações
          </span>
        </div>

        {/* Grid dos 36 Módulos (3 Linhas x 12 Colunas) */}
        <div className="p-3 md:p-6 bg-tinta border-2 border-tinta shadow-carimbo-lg overflow-x-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 md:gap-3 min-w-[300px]">
            {modulosExibidos.map(modulo => (
              <ModuloMadeira
                key={modulo.id}
                modulo={modulo}
                isSelecionado={moduloSelecionado?.id === modulo.id}
                onSelecionar={(mod) => setModuloSelecionado(mod)}
              />
            ))}
          </div>
        </div>

        {/* Legenda de Materiais */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-tinta">
          <div className="p-3 bg-madeira border-2 border-tinta flex items-center gap-3">
            <span className="w-3 h-3 bg-tinta inline-block" />
            <span>Madeira Crua & Impressão Mineral</span>
          </div>
          <div className="p-3 bg-papel-claro border-2 border-tinta flex items-center gap-3">
            <span className="w-3 h-3 bg-acento-vermelho inline-block" />
            <span>Marcações de Corte e Pautas</span>
          </div>
          <div className="p-3 bg-papel-escuro border-2 border-tinta flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-acento-azul" />
            <span>Designers Brasileiros e Literatura</span>
          </div>
        </div>
      </div>

      {/* Modal de Detalhe */}
      <ModalModuloDetalhe
        modulo={moduloSelecionado}
        onFechar={() => setModuloSelecionado(null)}
      />
    </section>
  );
};
