import React from 'react';
import { MapPin, Clock, Calendar, Ticket, ExternalLink } from 'lucide-react';
import { DADOS_VISITA } from '../../dados/dadosCreditos';
import { EtiquetaAtelier } from '../ui/EtiquetaAtelier';

export const InformacoesVisita: React.FC = () => {
  return (
    <section id="visite" className="relative py-16 md:py-24 px-4 md:px-8 border-b-2 border-tinta bg-papel-claro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <EtiquetaAtelier texto="Planeje sua Ida" variante="escuro" />
          <h2 className="font-anton uppercase text-4xl sm:text-5xl md:text-6xl text-tinta mt-3 tracking-tight">
            VISITE A EXPOSIÇÃO
          </h2>
          <p className="font-serifa italic text-tinta-desbotada text-base sm:text-lg mt-2">
            A experiência de corpoDApalavra é gratuita e aberta a todos os públicos no Sesc Santo André.
          </p>
        </div>

        {/* Caixa de Informações Táteis */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Coluna 1: Dados Oficiais do Sesc */}
          <div className="md:col-span-8 bg-papel border-2 border-tinta shadow-carimbo-lg p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-tinta pb-3 mb-6">
                <span className="font-mono text-xs uppercase font-bold text-tinta">
                  {DADOS_VISITA.instituicao} — {DADOS_VISITA.espaco}
                </span>
                <span className="font-mono text-[10px] bg-acento-vermelho text-white px-2 py-0.5 uppercase font-bold">
                  {DADOS_VISITA.entrada}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Localização */}
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase font-bold text-tinta-cinza flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-acento-vermelho" /> Local
                  </span>
                  <p className="font-serifa font-bold text-lg text-tinta">{DADOS_VISITA.espaco}</p>
                  <p className="font-corpo text-sm text-tinta-desbotada">{DADOS_VISITA.endereco}</p>
                  <p className="font-corpo text-sm text-tinta-desbotada">{DADOS_VISITA.cidade} — CEP {DADOS_VISITA.cep}</p>
                </div>

                {/* Período */}
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase font-bold text-tinta-cinza flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-acento-azul" /> Período
                  </span>
                  <p className="font-serifa font-bold text-lg text-tinta">{DADOS_VISITA.periodo}</p>
                  <p className="font-corpo text-xs text-tinta-desbotada">Consulte grade de oficinas do ETA no portal Sesc SP</p>
                </div>

                {/* Horários */}
                <div className="space-y-1 sm:col-span-2 border-t border-tinta/20 pt-4">
                  <span className="font-mono text-xs uppercase font-bold text-tinta-cinza flex items-center gap-1.5 mb-2">
                    <Clock className="w-4 h-4 text-tinta" /> Horários de Funcionamento
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {DADOS_VISITA.horarios.map((h, idx) => (
                      <div key={idx} className="p-3 bg-papel-claro border border-tinta font-mono text-xs flex justify-between">
                        <span className="font-bold text-tinta">{h.dias}:</span>
                        <span className="text-tinta-cinza">{h.horas}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Acesso e Ingressos */}
            <div className="mt-8 pt-4 border-t-2 border-tinta flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-tinta">
                <Ticket className="w-4 h-4 text-acento-vermelho" />
                <span>Entrada gratuita e sem necessidade de agendamento prévio.</span>
              </div>

              <a
                href={DADOS_VISITA.mapaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-tinta text-papel-claro px-5 py-2.5 font-mono text-xs uppercase font-bold shadow-carimbo hover:bg-acento-vermelho transition-all"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Destaque de boas-vindas do ETA */}
          <div className="md:col-span-4 bg-madeira p-6 sm:p-8 border-2 border-tinta shadow-carimbo-lg flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-tinta border-b border-tinta pb-1 block mb-4">
                Sobre o Espaço
              </span>
              <h3 className="font-serifa text-2xl font-bold text-tinta mb-3">
                Espaço de Tecnologias e Artes
              </h3>
              <p className="font-corpo text-xs text-tinta leading-relaxed mb-4">
                O ETA do Sesc Santo André é um laboratório de experimentação e aprendizado livre que promove cursos, oficinas e exposições que conectam arte, técnica, artesanato e cultura digital.
              </p>
            </div>

            <div className="border-t border-tinta pt-4 font-mono text-[11px] uppercase text-tinta-cinza">
              <span>Sesc Santo André — Viva a Cultura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
