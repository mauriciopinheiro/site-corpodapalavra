import React from 'react';
import { DADOS_CREDITOS, AUTORIA_PROJETO_VIRTUAL } from '../../dados/dadosCreditos';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Mail } from 'lucide-react';

export const CreditosSection: React.FC = () => {
  return (
    <section id="creditos" className="py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Cabeçalho */}
        <div>
          <EtiquetaAtelier texto="Ficha Técnica Institucional" variante="escuro" />
          <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
            CRÉDITOS & FICHA TÉCNICA
          </h2>
          <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-1">
            Ficha técnica oficial da exposição física realizada no Sesc Santo André e autoria do projeto virtual.
          </p>
        </div>

        {/* 1. Ficha Técnica da Exposição Física (Sesc Santo André) - EM PRIMEIRO LUGAR */}
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase font-bold text-tinta border-b border-tinta/30 pb-1.5 block">
            Ficha Técnica da Exposição Física (Sesc Santo André):
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DADOS_CREDITOS.map((cred, idx) => (
              <div key={idx} className="bg-papel-claro p-5 border-2 border-tinta shadow-carimbo space-y-2">
                <span className="font-mono text-xs uppercase font-bold text-acento-vermelho block">
                  {cred.funcao}
                </span>
                <ul className="font-serifa text-base text-tinta space-y-1">
                  {cred.nomes.map((nome, i) => (
                    <li key={i} className="leading-snug">{nome}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Acervos e Objetos Expostos */}
          <div className="bg-madeira/40 p-5 border-2 border-tinta shadow-carimbo mt-4 space-y-2">
            <span className="font-mono text-xs uppercase font-bold text-tinta block">
              Acervos e Objetos Expostos no Painel oSERlivro:
            </span>
            <p className="font-corpo text-xs text-tinta leading-relaxed">
              Acervo Sesc Santo André (prelo tipográfico); Acervo Gráfica Hosana / Roberto Gutiérrez (tipos móveis); Acervo Ulysses Bôscolo (rocha gravada); Flávia Franqueiro (tábua cuneiforme de argila); Risko Rolos (rolos de entintagem); Marcelo Heleno (tela serigráfica); Relevo Paulista (carimbos com ilustrações dos carrinhos); Acervo Milton Bonani (tinteiro e bico de pena); Lote 42 (9 livros contemporâneos com projetos gráficos experimentais).
            </p>
          </div>
        </div>

        {/* 2. Autoria do Projeto Virtual - ABAIXO DA FICHA TÉCNICA FÍSICA E COM MENOS DESTAQUE */}
        <div className="pt-6 border-t-2 border-tinta/20">
          <div className="bg-papel-claro border border-tinta/40 p-5 font-mono text-xs text-tinta space-y-2 max-w-3xl">
            <span className="font-bold uppercase text-tinta-cinza block text-[11px] tracking-wider">
              Projeto Virtual:
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div>
                <p className="font-bold text-sm text-tinta">{AUTORIA_PROJETO_VIRTUAL.funcao}: {AUTORIA_PROJETO_VIRTUAL.autor}</p>
                <p className="text-tinta-cinza text-xs">{AUTORIA_PROJETO_VIRTUAL.cargo}</p>
                <p className="font-corpo text-[11px] text-tinta-desbotada pt-0.5">{AUTORIA_PROJETO_VIRTUAL.descricao}</p>
              </div>
              <a
                href={`mailto:${AUTORIA_PROJETO_VIRTUAL.email}`}
                className="inline-flex items-center gap-1.5 text-tinta hover:text-acento-vermelho font-bold underline shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{AUTORIA_PROJETO_VIRTUAL.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
