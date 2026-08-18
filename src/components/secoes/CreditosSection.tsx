import React from 'react';
import { DADOS_CREDITOS, AUTORIA_PROJETO_VIRTUAL } from '../../dados/dadosCreditos';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';
import { Code, Mail, UserCheck } from 'lucide-react';

export const CreditosSection: React.FC = () => {
  return (
    <section id="creditos" className="py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <EtiquetaAtelier texto="Ficha Técnica & Autoria" variante="escuro" />
          <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
            CRÉDITOS & AUTORIA
          </h2>
          <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-1">
            Ficha técnica oficial da exposição física e autoria da experiência digital.
          </p>
        </div>

        {/* Bloco Destaque: Autoria da Concepção e Implementação do Projeto Virtual */}
        <div className="bg-madeira border-4 border-tinta shadow-carimbo-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-tinta pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-acento-vermelho" />
              <span className="font-mono text-xs uppercase font-bold text-tinta tracking-widest">
                {AUTORIA_PROJETO_VIRTUAL.funcao}
              </span>
            </div>
            <span className="font-mono text-xs bg-tinta text-papel px-2.5 py-1 font-bold">
              PROJETO VIRTUAL
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="font-anton uppercase text-3xl sm:text-4xl text-tinta tracking-tight flex items-center gap-2">
              <UserCheck className="w-7 h-7 text-acento-vermelho" />
              {AUTORIA_PROJETO_VIRTUAL.autor}
            </h3>
            <p className="font-serifa italic text-base sm:text-lg text-tinta font-bold">
              {AUTORIA_PROJETO_VIRTUAL.cargo}
            </p>
            <p className="font-corpo text-xs sm:text-sm text-tinta leading-relaxed max-w-2xl pt-1">
              {AUTORIA_PROJETO_VIRTUAL.descricao}
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${AUTORIA_PROJETO_VIRTUAL.email}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-tinta bg-papel px-3 py-1.5 border-2 border-tinta shadow-carimbo hover:bg-tinta hover:text-papel transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{AUTORIA_PROJETO_VIRTUAL.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ficha Técnica da Exposição Física */}
        <div>
          <span className="font-mono text-xs uppercase font-bold text-tinta-cinza block mb-4">
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
        </div>
      </div>
    </section>
  );
};
