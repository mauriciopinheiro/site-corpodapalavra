import React, { useState } from 'react';
import { DADOS_LITERATURA_12, ExcertoReal12 } from '../../dados/dadosLiteratura12';
import { DADOS_COMPORTAMENTOS_LITERATURA } from '../../dados/dadosComportamentosLiteratura';
import { useExposicao } from '../../contexto/ContextoExposicao';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Quote, Sparkles, Activity, Layers } from 'lucide-react';

export const Literatura12Section: React.FC = () => {
  const [excertoAtivoId, setExcertoAtivoId] = useState<number>(1);
  const { tocarSom, registrarExcerto } = useExposicao();

  const excertoAtual: ExcertoReal12 = DADOS_LITERATURA_12.find(e => e.id === excertoAtivoId) || DADOS_LITERATURA_12[0];
  const comportamento = DADOS_COMPORTAMENTOS_LITERATURA[excertoAtivoId] || DADOS_COMPORTAMENTOS_LITERATURA[1];

  const handleSelecionar = (id: number) => {
    setExcertoAtivoId(id);
    const comp = DADOS_COMPORTAMENTOS_LITERATURA[id];
    tocarSom(comp ? comp.somAssociado : 'papel');
    const sel = DADOS_LITERATURA_12.find(e => e.id === id);
    if (sel) registrarExcerto(sel.autor);
  };

  return (
    <section id="literatura-12" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-claro">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="12 Excertos Reais • Tipografias Brasileiras" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              A LITERATURA TRANSFORMADA EM MATRIZ
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              12 pensadores e escritores brasileiros pareados com 12 famílias tipográficas de designers nacionais, como nos painéis originais da exposição.
            </p>
          </div>

          <div className="font-mono text-xs bg-tinta text-papel px-3 py-1.5 font-bold uppercase flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-acento-vermelho" />
            <span>FÍSICA: {comportamento.tagVisual}</span>
          </div>
        </div>

        {/* Grade de Seleção dos 12 Autores */}
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

        {/* Cartaz Tipográfico Reativo com a Física do Autor */}
        <div className="bg-papel border-2 border-tinta shadow-carimbo-lg p-6 sm:p-10 md:p-12 relative overflow-hidden transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-tinta pb-4 mb-6 gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase text-acento-vermelho font-bold">
                Módulo #{String(excertoAtual.id).padStart(2, '0')} • {comportamento.nomeEfeito}
              </span>
              <h3 className="font-anton uppercase text-3xl sm:text-4xl text-tinta">
                {excertoAtual.autor} — <span className="font-serifa italic not-italic font-normal">{excertoAtual.obra} ({excertoAtual.ano})</span>
              </h3>
            </div>
            <div className="flex flex-col sm:items-end font-mono text-xs bg-madeira p-2 border border-tinta text-tinta">
              <span className="font-bold">Fonte: {excertoAtual.fonteTipografica}</span>
              <span className="text-[11px] text-tinta-cinza flex items-center gap-1">
                <Layers className="w-3 h-3" /> por {excertoAtual.designerFonte}
              </span>
            </div>
          </div>

          {/* Mancha Reativa com a Tipografia e Estilo do Autor */}
          <div className="my-8 py-4">
            <p className={`${comportamento.estiloMancha} text-tinta leading-snug transition-all duration-300`}>
              “{excertoAtual.textoIntegral}”
            </p>
            <div className="font-mono text-xs text-tinta-cinza mt-3 flex items-center gap-1.5 italic">
              <Sparkles className="w-3.5 h-3.5 text-acento-vermelho" />
              <span>Comportamento: {comportamento.interacaoFisica}</span>
            </div>
          </div>

          {/* Rodapé Curatorial */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t-2 border-tinta/20 pt-6 mt-6 items-center">
            <div className="md:col-span-8 flex items-center gap-2 font-corpo text-xs text-tinta">
              <Quote className="w-4 h-4 text-acento-vermelho shrink-0" />
              <span><strong>Tese Curatorial:</strong> {excertoAtual.conceitoCuratorial}</span>
            </div>
            <div className="md:col-span-4 flex justify-end font-mono text-[11px] uppercase text-tinta-cinza">
              <span>Espaço de Tecnologias e Artes • Sesc Santo André</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
