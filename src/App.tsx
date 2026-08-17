import React from 'react';
import { ProvedorExposicao } from './contexto/ContextoExposicao';
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
        {/* Controles globais e navegação fluida */}
        <BarraProgresso />
        <CursorCustomizado />
        <Navbar />

        {/* Narrativa Curatorial da Exposição corpoDApalavra */}
        <main className="flex-1 w-full flex flex-col" id="conteudo-principal">
          {/* 1. Hero com Bancada Viva do Gesto & Palavra */}
          <HeroSection />

          {/* 2. Sobre o Conceito e os 4 Pilares */}
          <SobreSection />

          {/* 3. Manifesto — oSERgráfica */}
          <ManifestoSection />

          {/* 4. Dois Seres — oSERlivro & oSERtipografia com Dobra Física */}
          <DoisSeresSection />

          {/* 5. Transição Cinematográfica Livro -> Anatomia */}
          <TransicaoLivroTipografia />

          {/* 6. Anatomia da Letra com Dissecação Visual em SVG */}
          <AnatomiaLetraDissecada />

          {/* 7. Arqueologia dos Materiais com os 6 Laboratórios Físicos */}
          <ArqueologiaMateriaisInterativa />

          {/* 8. O A–Z Real com Modo Monumental Fullscreen */}
          <AZPainelModular />

          {/* 9. Parede Tipográfica Interativa (36 módulos de madeira) */}
          <ParedeTipografica />

          {/* 10. Os 12 Excertos com Comportamentos Vivos */}
          <Literatura12Section />

          {/* 11. A Palavra como Imagem */}
          <PalavraComoImagem />

          {/* 12. Pranchas e Diagramas Técnicos Expográficos */}
          <GaleriaEspaco />

          {/* 13. Glossário do Corpo da Letra */}
          <GlossarioVivo />

          {/* 14. Epílogo com Prova de Prelo 100% Gerativa */}
          <EpilogoMemoriaPercurso />

          {/* 15. Informações de Visita ao Sesc Santo André */}
          <InformacoesVisita />

          {/* 16. Ficha Técnica e Créditos Oficiais */}
          <CreditosSection />
        </main>

        {/* Rodapé Editorial */}
        <Rodape />
      </div>
    </ProvedorExposicao>
  );
};

export default App;
