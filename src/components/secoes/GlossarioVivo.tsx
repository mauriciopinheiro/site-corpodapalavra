import React, { useState } from 'react';
import { DADOS_GLOSSARIO } from '../../dados/dadosGlossario';
import { TermoGlossario } from '../../tipos';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { BookMarked, Sparkles } from 'lucide-react';

export const GlossarioVivo: React.FC = () => {
  const [termoAtivo, setTermoAtivo] = useState<string>(DADOS_GLOSSARIO[0].termo);

  const itemAtual: TermoGlossario = DADOS_GLOSSARIO.find(t => t.termo === termoAtivo) || DADOS_GLOSSARIO[0];

  return (
    <section id="glossario" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b-2 border-tinta">
          <div>
            <EtiquetaAtelier texto="Léxico Tipográfico" variante="escuro" />
            <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
              GLOSSÁRIO DO CORPO DA LETRA
            </h2>
            <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2 max-w-2xl">
              Os termos fundamentais do fazer tipográfico aprendidos pela própria experiência e visualidade da forma.
            </p>
          </div>
        </div>

        {/* Layout do Glossário */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna Esquerda: Lista de Termos Interativos */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
            {DADOS_GLOSSARIO.map(item => (
              <button
                key={item.termo}
                onClick={() => setTermoAtivo(item.termo)}
                className={`p-3 text-left border-2 border-tinta font-mono text-xs uppercase font-bold transition-all flex items-center justify-between ${
                  termoAtivo === item.termo
                    ? 'bg-tinta text-papel-claro shadow-carimbo translate-x-1'
                    : 'bg-papel-claro hover:bg-madeira/40 text-tinta'
                }`}
              >
                <span>{item.termo}</span>
                <span className="text-[10px] opacity-60 font-normal">[{item.letraExemplo}]</span>
              </button>
            ))}
          </div>

          {/* Coluna Direita: O Espécime Vivo do Termo */}
          <div className="lg:col-span-7 bg-papel-claro border-2 border-tinta shadow-carimbo-lg p-6 sm:p-10 relative">
            <div className="flex items-center justify-between border-b-2 border-tinta pb-3 mb-6">
              <span className="font-mono text-xs uppercase font-bold text-acento-vermelho flex items-center gap-1.5">
                <BookMarked className="w-4 h-4" /> Categoria: {itemAtual.categoria}
              </span>
              <span className="font-mono text-xs text-tinta-cinza uppercase">
                Espécime #{itemAtual.termo}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
              {/* Caixa da Letra Exemplo */}
              <div className="w-36 h-36 bg-madeira border-2 border-tinta shadow-carimbo flex items-center justify-center shrink-0 textura-madeira">
                <span className="font-serifa font-bold text-8xl text-tinta leading-none">
                  {itemAtual.letraExemplo}
                </span>
              </div>

              {/* Título do Termo e Detalhe */}
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-anton uppercase text-4xl sm:text-5xl text-tinta tracking-tight">
                  {itemAtual.termo}
                </h3>
                <div className="inline-flex items-center gap-1 bg-madeira/50 px-2.5 py-1 border border-tinta/30 font-mono text-xs text-tinta">
                  <Sparkles className="w-3.5 h-3.5 text-acento-vermelho" />
                  {itemAtual.detalheVisual}
                </div>
              </div>
            </div>

            {/* Definição */}
            <div className="p-4 bg-papel border-l-4 border-tinta font-corpo text-base sm:text-lg text-tinta leading-relaxed">
              {itemAtual.definicao}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
