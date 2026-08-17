import React from 'react';
import { motion } from 'framer-motion';
import { useCursorCustomizado } from '../../hooks/useCursorCustomizado';

export const CursorCustomizado: React.FC = () => {
  const { posicao, modo, visivel, isTouch } = useCursorCustomizado();

  if (isTouch || !visivel) return null;

  const renderConteudoModo = () => {
    switch (modo) {
      case 'ler':
        return <span className="text-[9px] font-mono uppercase tracking-tighter text-papel bg-tinta px-1 py-0.5">LER</span>;
      case 'abrir':
        return <span className="text-[9px] font-mono uppercase tracking-tighter text-papel bg-tinta px-1 py-0.5">ABRIR</span>;
      case 'mover':
        return <span className="text-[9px] font-mono uppercase tracking-tighter text-papel bg-tinta px-1 py-0.5">MOVER</span>;
      case 'tocar':
        return <span className="text-[9px] font-mono uppercase tracking-tighter text-papel bg-tinta px-1 py-0.5">TOCAR</span>;
      case 'tipo':
        return <span className="text-[10px] font-serifa font-bold text-papel bg-tinta px-1">Aa</span>;
      case 'mais':
        return <span className="text-xs font-mono font-bold text-papel bg-tinta px-1">+</span>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      animate={{
        x: posicao.x - 8,
        y: posicao.y - 8,
        scale: modo !== 'padrao' ? 1.4 : 1
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 400,
        mass: 0.1
      }}
    >
      <div className="w-4 h-4 rounded-full border border-white bg-white/20 flex items-center justify-center backdrop-invert">
        {renderConteudoModo()}
      </div>
    </motion.div>
  );
};
