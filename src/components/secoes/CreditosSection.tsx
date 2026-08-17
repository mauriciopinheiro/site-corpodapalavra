import React from 'react';
import { DADOS_CREDITOS } from '../../dados/dadosCreditos';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';

export const CreditosSection: React.FC = () => {
  return (
    <section id="creditos" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-12">
          <EtiquetaAtelier texto="Ficha Técnica & Curadoria" variante="escuro" />
          <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
            CRÉDITOS DA EXPOSIÇÃO
          </h2>
          <p className="font-serifa italic text-tinta-desbotada text-base mt-2">
            A união entre artes gráficas experimentais, design tipográfico e expografia contemporânea.
          </p>
        </div>

        {/* Grade de Créditos Editoriais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DADOS_CREDITOS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-papel-claro border-2 border-tinta shadow-carimbo hover:bg-madeira/20 transition-colors"
            >
              <span className="font-mono text-xs uppercase font-bold text-acento-vermelho block border-b border-tinta/20 pb-2 mb-3">
                {item.funcao}
              </span>
              <ul className="space-y-1">
                {item.nomes.map((nome, nIdx) => (
                  <li key={nIdx} className="font-serifa font-bold text-lg text-tinta">
                    {nome}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Cartão de Realização Sesc Santo André */}
          <div className="p-6 bg-tinta text-papel-claro border-2 border-tinta shadow-carimbo sm:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-acento-amarelo block border-b border-papel/20 pb-2 mb-3">
                Realização Institucional
              </span>
              <h3 className="font-anton uppercase text-2xl sm:text-3xl text-papel-claro">
                SESC SANTO ANDRÉ — ESPAÇO DE TECNOLOGIAS E ARTES
              </h3>
              <p className="font-corpo text-xs text-papel/80 mt-2">
                Serviço Social do Comércio — Departamento Regional no Estado de São Paulo.
              </p>
            </div>

            <div className="pt-4 border-t border-papel/20 mt-4 font-mono text-[11px] uppercase text-papel/60 flex justify-between">
              <span>Gestão Cultural & Artes Gráficas</span>
              <span>São Paulo • 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
