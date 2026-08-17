import React from 'react';
import { ProvedorExposicao } from './contexto/ContextoExposicao';
import { PrologoInaugural } from './components/secoes/PrologoInaugural';
import { BarraProgresso } from './components/layout/BarraProgresso';
import { CursorCustomizado } from './components/layout/CursorCustomizado';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/secoes/HeroSection';
import { SobreSection } from './components/secoes/SobreSection';
import { ManifestoSection } from './components/secoes/ManifestoSection';
import { DoisSeresSection } from './components/secoes/DoisSeresSection';
import { TransicaoLivroTipografia } from './components/secoes/TransicaoLivroTipografia';
import { AnatomiaLetraDissecada } from './components/secoes/AnatomiaLetraDissecada';
import { ArqueologiaMateriaisInterativa } from './components/secoes/ArqueologiaMateriaisInterativa';
import { AZPainelModular } from './components/secoes/AZPainelModular';
import { ParedeTipografica } from './components/secoes/ParedeTipografica';
import { Literatura12Section } from './components/secoes/Literatura12Section';
import { PalavraComoImagem } from './components/secoes/PalavraComoImagem';
import { GaleriaEspaco } from './components/secoes/GaleriaEspaco';
import { GlossarioVivo } from './components/secoes/GlossarioVivo';
import { EpilogoMemoriaPercurso } from './components/secoes/EpilogoMemoriaPercurso';
import { InformacoesVisita } from './components/secoes/InformacoesVisita';
import { CreditosSection } from './components/secoes/CreditosSection';
import { Rodape } from './components/layout/Rodape';

export const App: React.FC = () => {
  return (
    <ProvedorExposicao>
      <div className="min-h-screen bg-papel text-tinta flex flex-col selection:bg-tinta selection:text-papel-claro">
        {/* 1. Momento 1: Prólogo do Gesto & Matéria */}
        <PrologoInaugural />

        {/* Controles globais e navegação */}
        <BarraProgresso />
        <CursorCustomizado />
        <Navbar />

        {/* Narrativa Curatorial da Exposição corpoDApalavra */}
        <main className="flex-1 w-full flex flex-col" id="conteudo-principal">
          {/* Abertura e Hero */}
          <HeroSection />

          {/* Sobre o Conceito e os 4 Pilares */}
          <SobreSection />

          {/* Manifesto — oSERgráfica */}
          <ManifestoSection />

          {/* Dois Seres — oSERlivro & oSERtipografia com Dobra Física */}
          <DoisSeresSection />

          {/* 2. Momento 2: Transição Cinematográfica Livro -> Anatomia */}
          <TransicaoLivroTipografia />

          {/* Anatomia da Letra com Dissecação Visual em SVG */}
          <AnatomiaLetraDissecada />

          {/* Arqueologia dos Materiais com Comportamentos Físicos */}
          <ArqueologiaMateriaisInterativa />

          {/* 3. Momento 3: O A–Z Real com Modo Monumental Fullscreen */}
          <AZPainelModular />

          {/* Parede Tipográfica Interativa (36 módulos de madeira) */}
          <ParedeTipografica />

          {/* 4. Momento 4: Os 12 Excertos com Comportamentos Vivos */}
          <Literatura12Section />

          {/* A Palavra como Imagem */}
          <PalavraComoImagem />

          {/* Pranchas e Diagramas Técnicos Expográficos */}
          <GaleriaEspaco />

          {/* Glossário do Corpo da Letra */}
          <GlossarioVivo />

          {/* 5. Momento 5: Epílogo com Prova de Prelo 100% Gerativa */}
          <EpilogoMemoriaPercurso />

          {/* Informações de Visita ao Sesc Santo André */}
          <InformacoesVisita />

          {/* Ficha Técnica e Créditos Oficiais */}
          <CreditosSection />
        </main>

        {/* Rodapé Editorial */}
        <Rodape />
      </div>
    </ProvedorExposicao>
  );
};

export default App;
