import React from 'react';
import { ProvedorExposicao } from './contexto/ContextoExposicao';
import { BarraProgresso } from './components/layout/BarraProgresso';
import { CursorCustomizado } from './components/layout/CursorCustomizado';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/secoes/HeroSection';
import { SobreSection } from './components/secoes/SobreSection';
import { ManifestoSection } from './components/secoes/ManifestoSection';
import { DoisSeresSection } from './components/secoes/DoisSeresSection';
import { ArqueologiaMateriaisInterativa } from './components/secoes/ArqueologiaMateriaisInterativa';
import { AZPainelModular } from './components/secoes/AZPainelModular';
import { ParedeTipografica } from './components/secoes/ParedeTipografica';
import { Literatura12Section } from './components/secoes/Literatura12Section';
import { PalavraComoImagem } from './components/secoes/PalavraComoImagem';
import { AnatomiaLetraDissecada } from './components/secoes/AnatomiaLetraDissecada';
import { GaleriaEspaco } from './components/secoes/GaleriaEspaco';
import { GlossarioVivo } from './components/secoes/GlossarioVivo';
import { InformacoesVisita } from './components/secoes/InformacoesVisita';
import { CreditosSection } from './components/secoes/CreditosSection';
import { EpilogoMemoriaPercurso } from './components/secoes/EpilogoMemoriaPercurso';
import { Rodape } from './components/layout/Rodape';

export const App: React.FC = () => {
  return (
    <ProvedorExposicao>
      <div className="min-h-screen bg-papel text-tinta flex flex-col selection:bg-tinta selection:text-papel-claro">
        {/* Controles globais e cursor */}
        <BarraProgresso />
        <CursorCustomizado />
        <Navbar />

        {/* Narrativa Curatorial da Exposição corpoDApalavra */}
        <main className="flex-1 w-full flex flex-col" id="conteudo-principal">
          {/* 1. Hero — A palavra ganha corpo */}
          <HeroSection />

          {/* 2. Sobre o Conceito e os 4 Pilares */}
          <SobreSection />

          {/* 3. Manifesto — oSERgráfica */}
          <ManifestoSection />

          {/* 4. Dois Seres — oSERlivro & oSERtipografia com Dobra Física */}
          <DoisSeresSection />

          {/* 5. Arqueologia dos Materiais (Pedra, Argila, Pergaminho, Papel, Chumbo, Tela) */}
          <ArqueologiaMateriaisInterativa />

          {/* 6. O A–Z Real da Exposição (12 grupos com glifos SVG e fontes brasileiras) */}
          <AZPainelModular />

          {/* 7. Parede Tipográfica Interativa (36 módulos de madeira da exposição) */}
          <ParedeTipografica />

          {/* 8. Os 12 Excertos Literários Reais da Parede */}
          <Literatura12Section />

          {/* 9. A Palavra como Imagem */}
          <PalavraComoImagem />

          {/* 10. Anatomia da Letra com Dissecação Visual Real sobre o Glifo */}
          <AnatomiaLetraDissecada />

          {/* 11. Galeria Documental da Montagem (32 fotos reais do Sesc Santo André) */}
          <GaleriaEspaco />

          {/* 12. Glossário do Corpo da Letra */}
          <GlossarioVivo />

          {/* 13. Epílogo: Memória do Percurso e Prova de Prelo Gerativa */}
          <EpilogoMemoriaPercurso />

          {/* 14. Informações de Visita ao Sesc Santo André */}
          <InformacoesVisita />

          {/* 15. Ficha Técnica e Créditos Oficiais */}
          <CreditosSection />
        </main>

        {/* Rodapé Editorial */}
        <Rodape />
      </div>
    </ProvedorExposicao>
  );
};

export default App;
