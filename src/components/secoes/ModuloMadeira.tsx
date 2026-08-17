import React from 'react';
import { motion } from 'framer-motion';
import { ModuloMadeiraData } from '../../tipos';

interface ModuloMadeiraProps {
  modulo: ModuloMadeiraData;
  isSelecionado: boolean;
  onSelecionar: (modulo: ModuloMadeiraData) => void;
  isArrastavel?: boolean;
}

export const ModuloMadeira: React.FC<ModuloMadeiraProps> = ({
  modulo,
  isSelecionado,
  onSelecionar,
  isArrastavel = true
}) => {
  const estilosFonte = {
    anton: 'font-anton uppercase',
    serifa: 'font-serifa',
    corpo: 'font-corpo font-bold',
    mono: 'font-mono'
  };

  const getDestaqueBorda = () => {
    if (modulo.destaqueCor === 'vermelho') return 'border-t-4 border-t-acento-vermelho';
    if (modulo.destaqueCor === 'azul') return 'border-t-4 border-t-acento-azul';
    if (modulo.destaqueCor === 'amarelo') return 'border-t-4 border-t-acento-amarelo';
    return '';
  };

  return (
    <motion.div
      layout
      drag={isArrastavel}
      dragConstraints={{ left: -15, right: 15, top: -15, bottom: 15 }}
      whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onSelecionar(modulo)}
      className={`group relative h-28 sm:h-32 md:h-36 flex flex-col justify-between p-2.5 sm:p-3 border-2 border-tinta bg-madeira select-none cursor-pointer transition-all shadow-bloco-madeira ${getDestaqueBorda()} ${
        isSelecionado ? 'ring-4 ring-acento-vermelho bg-madeira-escura z-20' : 'hover:bg-madeira-clara'
      }`}
    >
      {/* Veios da madeira em overlay */}
      <div className="absolute inset-0 textura-madeira opacity-25 pointer-events-none" />

      {/* Topo do Módulo: ID e Categoria */}
      <div className="relative z-10 flex items-center justify-between w-full font-mono text-[9px] sm:text-[10px] text-tinta uppercase font-bold border-b border-tinta/30 pb-1">
        <span>#{String(modulo.id).padStart(2, '0')}</span>
        <span className="truncate max-w-[70px] text-[8px] sm:text-[9px] opacity-75">{modulo.categoria}</span>
      </div>

      {/* Centro: Letra Monumental com Variação de Peso */}
      <div className="relative z-10 my-auto text-center flex items-center justify-center">
        <span
          className={`text-3xl sm:text-4xl md:text-5xl text-tinta group-hover:scale-110 group-hover:text-tinta-pura transition-transform leading-none ${
            estilosFonte[modulo.estiloFonte || 'serifa']
          }`}
        >
          {modulo.letra}
        </span>
      </div>

      {/* Base: Termo Tipográfico */}
      <div className="relative z-10 flex items-center justify-between w-full font-mono text-[10px] sm:text-[11px] text-tinta uppercase font-bold border-t border-tinta/30 pt-1">
        <span className="truncate font-black tracking-tight">{modulo.termo}</span>
        <span className="text-[8px] text-tinta-cinza group-hover:text-acento-vermelho font-mono font-normal">
          +info
        </span>
      </div>
    </motion.div>
  );
};
