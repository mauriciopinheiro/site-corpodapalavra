import { LetraAnatomia } from '../tipos';

/**
 * Dados para o diagrama interativo de Anatomia da Letra.
 * Identifica pontos precisos de cada caractere com coordenadas percentuais.
 */
export const DADOS_ANATOMIA: LetraAnatomia[] = [
  {
    caractere: 'a',
    nome: 'a minúsculo (dois andares)',
    familia: 'Playfair Display (Serif)',
    comentario: 'O clássico modelo renascentista com bojo inferior acolhedor e terminal superior em gota.',
    pontos: [
      { nome: 'Gota / Terminal', descricao: 'Remate arredondado no topo do arco.', x: 74, y: 18, posicaoTexto: 'direita' },
      { nome: 'Arco Superior', descricao: 'Traço curvo que projeta o fluxo da letra.', x: 48, y: 12, posicaoTexto: 'topo' },
      { nome: 'Contraforma Fechada', descricao: 'Espaço em branco delimitado pelo bojo.', x: 50, y: 64, posicaoTexto: 'esquerda' },
      { nome: 'Bojo', descricao: 'Curva que forma a barriga inferior da letra.', x: 26, y: 70, posicaoTexto: 'esquerda' },
      { nome: 'Haste Direita', descricao: 'Coluna vertical que ancora o caractere.', x: 78, y: 68, posicaoTexto: 'direita' }
    ]
  },
  {
    caractere: 'g',
    nome: 'g minúsculo (dois andares)',
    familia: 'Playfair Display (Serif)',
    comentario: 'Um dos caracteres mais ricos da tipografia ocidental, com anel superior, orelha e laço pendular.',
    pontos: [
      { nome: 'Orelha', descricao: 'Projeção distintiva no topo superior direito.', x: 80, y: 18, posicaoTexto: 'direita' },
      { nome: 'Olho Superior', descricao: 'Contraforma circular do corpo superior.', x: 48, y: 32, posicaoTexto: 'esquerda' },
      { nome: 'Pescoço / Ligação', descricao: 'Traço estreito que une os dois andares.', x: 52, y: 55, posicaoTexto: 'direita' },
      { nome: 'Laço Inferior', descricao: 'O bojo inferior que oscila abaixo da linha.', x: 38, y: 84, posicaoTexto: 'baixo' }
    ]
  },
  {
    caractere: 'R',
    nome: 'R maiúsculo (capitular)',
    familia: 'Playfair Display (Serif)',
    comentario: 'Composição monumental que une a serifa de base, o bojo superior fechado e a perna diagonal dinâmica.',
    pontos: [
      { nome: 'Serifa de Topo', descricao: 'Prolongamento terminal no cume da haste.', x: 22, y: 16, posicaoTexto: 'esquerda' },
      { nome: 'Bojo Superior', descricao: 'Arco fechado que abraça a contraforma.', x: 62, y: 32, posicaoTexto: 'direita' },
      { nome: 'Vértice de Encontro', descricao: 'Ponto onde o bojo toca a haste.', x: 38, y: 52, posicaoTexto: 'esquerda' },
      { nome: 'Perna Diagonal', descricao: 'Traço inclinado de sustentação e dinamismo.', x: 76, y: 78, posicaoTexto: 'direita' },
      { nome: 'Serifa de Base', descricao: 'Ancoragem horizontal sobre a linha de base.', x: 20, y: 86, posicaoTexto: 'esquerda' }
    ]
  },
  {
    caractere: 'Q',
    nome: 'Q maiúsculo com cauda longa',
    familia: 'Playfair Display Italic',
    comentario: 'A elipse perfeita cortada pela cauda expressiva que invade o espaço inferior da página.',
    pontos: [
      { nome: 'Ápice Curvo', descricao: 'O ponto de máxima elevação da elipse.', x: 50, y: 14, posicaoTexto: 'topo' },
      { nome: 'Eixo de Inclinação', descricao: 'O ângulo que dita a modulação de espessura.', x: 26, y: 46, posicaoTexto: 'esquerda' },
      { nome: 'Grande Contraforma', descricao: 'O amplo espaço interno aberto ao silêncio.', x: 50, y: 50, posicaoTexto: 'esquerda' },
      { nome: 'Cauda Caligráfica', descricao: 'Traço livre que rompe os limites do bloco.', x: 80, y: 84, posicaoTexto: 'direita' }
    ]
  },
  {
    caractere: '&',
    nome: 'E comercial (& maiúsculo / et)',
    familia: 'Playfair Display (Serif)',
    comentario: 'A lendária ligadura histórica da palavra latina "et" (e), fundida em um único gesto contínuo.',
    pontos: [
      { nome: 'Gota Superior', descricao: 'Remate gracioso no cume da ligadura.', x: 60, y: 16, posicaoTexto: 'direita' },
      { nome: 'Cruzamento Central', descricao: 'Interseção dos traços ascendente e descendente.', x: 46, y: 46, posicaoTexto: 'esquerda' },
      { nome: 'Bojo Inferior', descricao: 'A base ampla que garante estabilidade plástica.', x: 30, y: 74, posicaoTexto: 'esquerda' },
      { nome: 'Terminal Livre', descricao: 'Extensão horizontal que aponta para o próximo tipo.', x: 84, y: 82, posicaoTexto: 'direita' }
    ]
  }
];
