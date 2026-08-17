import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { ChevronLeft, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';

export const DobraLivroInterativa: React.FC = () => {
  const [paginaAtual, setPaginaAtual] = useState<number>(0);
  const { tocarSom, registrarExcerto } = useExposicao();

  const paginasLivro = [
    {
      folio: '01 / 04',
      titulo: 'A Página como Unidade de Espaço',
      epigrafe: '“A folha em branco não é o nada: é a gravidade silenciosa antes do primeiro corte.”',
      corpo: 'O livro estabelece um território com margens, medianiz, altura de mancha e entrelinha. A página delimita o olhar e isola o pensamento do caos exterior.',
      notaRodape: 'MATRIZ I — A ARQUITETURA DO PLANO'
    },
    {
      folio: '02 / 04',
      titulo: 'A Virada como Unidade de Tempo',
      epigrafe: '“Virar a página é produzir o tempo com as próprias mãos.”',
      corpo: 'A sucessão de folhas cria uma coreografia temporal. A leitura não acontece de uma só vez; ela exige o gesto físico de avançar, pausar e ocultar o passado para revelar o futuro.',
      notaRodape: 'MATRIZ II — O TEMPO ARTICULADO'
    },
    {
      folio: '03 / 04',
      titulo: 'O Caderno, a Costura e o Vinco',
      epigrafe: '“O fio que costura os cadernos é a espinha dorsal da memória.”',
      corpo: 'Uma folha grande dobrada em 8 ou 16 páginas forma o caderno. A agulha e o fio unem os fascículos sob tensão mecânica perfeita, permitindo que o livro respire ao abrir.',
      notaRodape: 'MATRIZ III — A ENGENHARIA DA ENCADERNAÇÃO'
    },
    {
      folio: '04 / 04',
      titulo: 'O Leporello e o Livro Desdobrado',
      epigrafe: '“O livro sanfonado estica a narrativa como uma fita no infinito.”',
      corpo: 'Sem lombada fixa, o leporello permite a leitura simultânea de todas as páginas em uma única linha contínua, transformando o códice em um monumento no espaço da galeria.',
      notaRodape: 'MATRIZ IV — O HORIZONTE CONTÍNUO'
    }
  ];

  const mudarPagina = (direcao: 'prox' | 'ant') => {
    tocarSom('papel');
    if (direcao === 'prox' && paginaAtual < paginasLivro.length - 1) {
      const nova = paginaAtual + 1;
      setPaginaAtual(nova);
      registrarExcerto(`oSERlivro-${nova}`);
    } else if (direcao === 'ant' && paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const p = paginasLivro[paginaAtual];

  return (
    <div className="bg-papel-claro border-2 border-tinta shadow-carimbo-lg p-6 sm:p-10 relative overflow-hidden">
      <div className="flex items-center justify-between border-b-2 border-tinta pb-4 mb-8">
        <div className="flex items-center gap-2 font-mono text-xs uppercase font-bold text-tinta">
          <BookOpen className="w-4 h-4 text-acento-azul" />
          <span>oSERlivro • Experiência Tátil da Dobra</span>
        </div>
        <EtiquetaAtelier texto={p.folio} variante="madeira" />
      </div>

      {/* Dispositivo de Virada Física de Página */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[280px]">
        {/* Lombada e Folha Esquerda (Página Anterior / Origem) */}
        <div className="md:col-span-4 bg-madeira/30 p-4 border-2 border-tinta font-mono text-xs text-tinta-cinza space-y-2 hidden md:block">
          <span className="font-bold block text-tinta">ÍNDICE DOS FÓLIOS:</span>
          {paginasLivro.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPaginaAtual(idx);
                tocarSom('papel');
              }}
              className={`w-full text-left p-2 border transition-all flex items-center justify-between ${
                paginaAtual === idx
                  ? 'bg-tinta text-papel-claro font-bold shadow-carimbo'
                  : 'hover:bg-papel-claro border-transparent text-tinta'
              }`}
            >
              <span>{item.titulo.split(' ')[0]} {item.titulo.split(' ')[1]}</span>
              <span className="text-[10px] opacity-70">{item.folio}</span>
            </button>
          ))}
        </div>

        {/* Folha Direita Ativa (Animada com Virada de Página) */}
        <div className="md:col-span-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={paginaAtual}
              initial={{ rotateY: -20, opacity: 0, x: 30 }}
              animate={{ rotateY: 0, opacity: 1, x: 0 }}
              exit={{ rotateY: 20, opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-papel p-6 sm:p-8 border-2 border-tinta shadow-carimbo space-y-4"
            >
              <span className="font-mono text-[10px] text-acento-vermelho font-bold uppercase tracking-widest block">
                {p.notaRodape}
              </span>
              <h3 className="font-serifa text-2xl sm:text-3xl md:text-4xl text-tinta font-bold leading-tight">
                {p.titulo}
              </h3>
              <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg border-l-2 border-tinta pl-4 py-1">
                {p.epigrafe}
              </p>
              <p className="font-corpo text-sm sm:text-base text-tinta leading-relaxed pt-2">
                {p.corpo}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controles de Virada de Página */}
      <div className="flex items-center justify-between pt-6 mt-8 border-t-2 border-tinta font-mono text-xs">
        <button
          onClick={() => mudarPagina('ant')}
          disabled={paginaAtual === 0}
          className={`flex items-center gap-2 px-4 py-2 border-2 border-tinta font-bold uppercase transition-all ${
            paginaAtual === 0
              ? 'opacity-30 cursor-not-allowed bg-papel'
              : 'bg-papel-claro hover:bg-tinta hover:text-papel shadow-carimbo'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Página Anterior</span>
        </button>

        <span className="hidden sm:inline-flex items-center gap-1 text-tinta-cinza uppercase text-[11px]">
          <Layers className="w-3.5 h-3.5" /> Vire a página para avançar no tempo
        </span>

        <button
          onClick={() => mudarPagina('prox')}
          disabled={paginaAtual === paginasLivro.length - 1}
          className={`flex items-center gap-2 px-4 py-2 border-2 border-tinta font-bold uppercase transition-all ${
            paginaAtual === paginasLivro.length - 1
              ? 'opacity-30 cursor-not-allowed bg-papel'
              : 'bg-tinta text-papel-claro hover:bg-acento-azul shadow-carimbo'
          }`}
        >
          <span>Próxima Página</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
