import React, { useState } from 'react';
import { ExcertoReal12 } from '../../../dados/dadosLiteratura12';
import { ComportamentoAutor } from '../../../dados/dadosComportamentosLiteratura';

interface PropsMancha {
  excerto: ExcertoReal12;
  comportamento: ComportamentoAutor;
}

export const ManchaTipograficaViva: React.FC<PropsMancha> = ({ excerto, comportamento }) => {
  const [interacao, setInteracao] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  const renderizarLeiTipografica = () => {
    switch (excerto.id) {
      // 1. Edimilson: Monumentalidade
      case 1:
        return (
          <div className="space-y-4">
            <div className="font-anton uppercase text-4xl sm:text-6xl text-tinta tracking-tight drop-shadow-[4px_4px_0px_rgba(209,56,40,0.4)]">
              “{excerto.fragmentoDestaque}”
            </div>
            <p className="font-serifa text-base sm:text-lg text-tinta-desbotada max-w-2xl leading-relaxed">
              {excerto.textoIntegral}
            </p>
          </div>
        );

      // 2. Amara Moira: A Voz da Letra
      case 2:
        return (
          <div className="space-y-4">
            <p
              style={{ letterSpacing: `${Math.round(mousePos.x * 12)}px` }}
              className="font-serifa italic text-2xl sm:text-4xl text-tinta leading-relaxed transition-all duration-150"
            >
              “{excerto.textoIntegral}”
            </p>
          </div>
        );

      // 3. Paulo Freire: Escala Espacial Mundo -> Palavra
      case 3:
        return (
          <div className="relative py-6 overflow-hidden">
            <div
              style={{ transform: `scale(${1 + mousePos.x * 0.4})` }}
              className="font-anton uppercase text-6xl sm:text-8xl text-madeira/80 select-none transition-transform duration-200"
            >
              MUNDO
            </div>
            <div className="relative -mt-10 sm:-mt-14 z-10 font-serifa text-xl sm:text-3xl text-tinta font-bold bg-papel/90 p-4 border-2 border-tinta shadow-carimbo max-w-xl">
              “{excerto.textoIntegral}”
            </div>
          </div>
        );

      // 4. Nego Bispo: Confluência Circular
      case 4:
        return (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-32 h-32 rounded-full border-4 border-dashed border-tinta flex items-center justify-center animate-spin-slow p-2">
              <span className="font-mono text-[10px] uppercase font-bold text-acento-vermelho">RODA • CONFLUÊNCIA</span>
            </div>
            <p className="font-serifa italic text-2xl sm:text-3xl text-tinta max-w-xl leading-snug">
              “{excerto.textoIntegral}”
            </p>
          </div>
        );

      // 5. Ailton Krenak: Suspensão do Céu
      case 5:
        return (
          <div className="space-y-4 py-4">
            <div className="flex flex-wrap gap-2 text-2xl sm:text-4xl font-serifa text-tinta">
              {excerto.fragmentoDestaque.split(' ').map((palavra, i) => (
                <span
                  key={i}
                  style={{ transform: `translateY(${Math.sin((i + mousePos.x * 5)) * 10}px)` }}
                  className="inline-block transition-transform duration-300 hover:text-acento-vermelho"
                >
                  {palavra}
                </span>
              ))}
            </div>
            <p className="font-corpo text-xs sm:text-sm text-tinta-cinza">{excerto.textoIntegral}</p>
          </div>
        );

      // 6. Drummond: Peso do Chumbo
      case 6:
        return (
          <div className="bg-tinta text-papel p-6 sm:p-8 border-4 border-tinta shadow-carimbo-lg space-y-3">
            <span className="font-mono text-[10px] text-acento-amarelo uppercase tracking-widest font-bold">
              [ DENSIDADE DO CHUMBO: 11.34 g/cm³ ]
            </span>
            <p className="font-anton uppercase text-3xl sm:text-5xl tracking-tight text-papel-claro">
              “{excerto.fragmentoDestaque}”
            </p>
            <p className="font-corpo text-xs text-papel/80 pt-2 border-t border-papel/20">{excerto.textoIntegral}</p>
          </div>
        );

      // 7. Ana Martins Marques: Invenção de Glifos
      case 7:
        return (
          <div className="border-2 border-tinta bg-madeira/40 p-6 space-y-4">
            <div className="flex justify-between font-mono text-xs text-tinta font-bold border-b border-tinta/20 pb-1">
              <span>GLIFOS BOTÂNICOS</span>
              <span>ESTÚDIO AGUDO • SEIVA</span>
            </div>
            <p className="font-serifa text-2xl sm:text-3xl text-tinta leading-relaxed">
              {excerto.textoIntegral}
            </p>
          </div>
        );

      // 8 a 12: Comportamentos para Carolina Maria de Jesus, Clarice, Cabral, Lima Barreto e Oswald
      default:
        return (
          <div className="space-y-4">
            <blockquote className="font-serifa italic text-2xl sm:text-3xl text-tinta leading-snug border-l-4 border-acento-vermelho pl-4">
              “{excerto.textoIntegral}”
            </blockquote>
            <span className="font-mono text-xs text-tinta-cinza block">
              Lei Tipográfica: {comportamento.leiTipografica}
            </span>
          </div>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setInteracao(true)}
      onMouseLeave={() => setInteracao(false)}
      onMouseMove={handleMouseMove}
      className={`relative p-6 sm:p-8 md:p-10 border-2 border-tinta transition-all duration-300 ${
        interacao ? 'bg-papel-claro shadow-carimbo-lg' : 'bg-papel shadow-carimbo'
      }`}
    >
      {renderizarLeiTipografica()}
    </div>
  );
};
