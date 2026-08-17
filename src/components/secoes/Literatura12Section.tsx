import React, { useState } from 'react';
import { DADOS_LITERATURA_12, ExcertoReal12 } from '../../dados/dadosLiteratura12';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Quote } from 'lucide-react';

export const Literatura12Section: React.FC = () => {
  const [excertoAtivoId, setExcertoAtivoId] = useState<number>(1);
  const { tocarSom, registrarExcerto } = useExposicao();

  const excertoAtual: ExcertoReal12 = DADOS_LITERATURA_12.find(e => e.id === excertoAtivoId) || DADOS_LITERATURA_12[0];

  const handleSelecionar = (id: number) => {
    setExcertoAtivoId(id);
    tocarSom('papel');
    const sel = DADOS_LITERATURA_12.find(e => e.id === id);
    if (sel) registrarExcerto(sel.autor);
  };

  return (
    <section id="literatura-12" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-claro">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="12 Excertos Reais • Matriz Literária" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              A LITERATURA TRANSFORMADA EM MATRIZ
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              Os 12 módulos literários da parede tipográfica: pensamento crítico, poesia concreta e vozes fundamentais da cultura brasileira talhadas no espaço.
            </p>
          </div>

          <div className="font-mono text-xs text-tinta-cinza uppercase">
            12 de 12 Excertos Expostos
          </div>
        </div>

        {/* Grade de Navegação pelos 12 Autores */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
          {DADOS_LITERATURA_12.map(item => (
            <button
              key={item.id}
              onClick={() => handleSelecionar(item.id)}
              className={`p-2.5 text-left border-2 border-tinta font-mono text-xs uppercase font-bold transition-all ${
                excertoAtivoId === item.id
                  ? 'bg-tinta text-papel-claro shadow-carimbo'
                  : 'bg-papel hover:bg-madeira/40 text-tinta'
              }`}
            >
              <div className="flex justify-between text-[10px] opacity-70 mb-1">
                <span>#{String(item.id).padStart(2, '0')}</span>
                <span>{item.ano}</span>
              </div>
              <div className="truncate font-black">{item.autor.split(' ')[0]}</div>
              <div className="truncate text-[10px] opacity-80 font-normal">{item.obra}</div>
            </button>
          ))}
        </div>

        {/* Cartaz Tipográfico do Excerto Selecionado */}
        <div className="bg-papel border-2 border-tinta shadow-carimbo-lg p-6 sm:p-10 md:p-12 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-tinta pb-4 mb-6 gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase text-acento-vermelho font-bold">
                Módulo Literário #{String(excertoAtual.id).padStart(2, '0')}
              </span>
              <h3 className="font-anton uppercase text-3xl sm:text-4xl text-tinta">
                {excertoAtual.autor} — <span className="font-serifa italic not-italic font-normal">{excertoAtual.obra} ({excertoAtual.ano})</span>
              </h3>
            </div>
            <div className="font-mono text-xs bg-madeira px-3 py-1.5 border border-tinta font-bold text-tinta self-start sm:self-auto">
              Fonte: {excertoAtual.fonteTipografica}
            </div>
          </div>

          {/* Destaque Monumental da Frase */}
          <div className="my-6">
            <p className="font-serifa text-2xl sm:text-3xl md:text-4xl text-tinta leading-snug font-bold">
              “{excertoAtual.textoIntegral}”
            </p>
          </div>

          {/* Rodapé Curatorial do Módulo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t-2 border-tinta/20 pt-6 mt-6 items-center">
            <div className="md:col-span-8 flex items-center gap-2 font-corpo text-xs text-tinta">
              <Quote className="w-4 h-4 text-acento-vermelho shrink-0" />
              <span><strong>Tese Curatorial:</strong> {excertoAtual.conceitoCuratorial}</span>
            </div>
            <div className="md:col-span-4 flex justify-end font-mono text-[11px] uppercase text-tinta-cinza">
              <span>Espaço de Tecnologias e Artes • Sesc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
