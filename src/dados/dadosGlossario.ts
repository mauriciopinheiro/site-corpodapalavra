import { TermoGlossario } from '../tipos';

/**
 * Glossário Vivo do Corpo da Letra.
 * Conceitos tipográficos anatômicos e de composição explicados pela própria forma.
 */
export const DADOS_GLOSSARIO: TermoGlossario[] = [
  {
    termo: 'Serifa',
    categoria: 'anatomia',
    definicao: 'Pequenos prolongamentos ou traços transversais nas extremidades dos caracteres, herdados dos cinzéis romanos na pedra.',
    letraExemplo: 'R',
    detalheVisual: 'Apoio horizontal e ritmo de leitura'
  },
  {
    termo: 'Contraforma',
    categoria: 'anatomia',
    definicao: 'O espaço vazio (negativo) esculpido no interior ou ao redor dos traços de uma letra. O ar que faz a letra existir.',
    letraExemplo: 'O',
    detalheVisual: 'Silêncio ativo e respiração formal'
  },
  {
    termo: 'Haste',
    categoria: 'anatomia',
    definicao: 'O traço vertical ou oblíquo principal e estruturante do caractere. A espinha dorsal da letra.',
    letraExemplo: 'H',
    detalheVisual: 'Coluna de sustentação arquitetônica'
  },
  {
    termo: 'Bojo',
    categoria: 'anatomia',
    definicao: 'O traço curvo fechado que delimita o espaço interior de letras como b, d, p, q e g.',
    letraExemplo: 'b',
    detalheVisual: 'Curva que acolhe a contraforma'
  },
  {
    termo: 'Gota',
    categoria: 'anatomia',
    definicao: 'Arredondamento bulboso no remate de certos traços terminais em letras como a, c, f, r e y.',
    letraExemplo: 'a',
    detalheVisual: 'Ponto de tensão e fluidez líquida'
  },
  {
    termo: 'Orelha',
    categoria: 'anatomia',
    definicao: 'Pequena projeção decorativa e funcional no quadrante superior direito do g minúsculo ou r.',
    letraExemplo: 'g',
    detalheVisual: 'Assinatura gestual distintiva'
  },
  {
    termo: 'Espinha',
    categoria: 'anatomia',
    definicao: 'O traço curvo sinuoso central que sustenta o equilíbrio e a torção plástica da letra S.',
    letraExemplo: 'S',
    detalheVisual: 'Tensão dupla em vetor serpenteante'
  },
  {
    termo: 'Ápice',
    categoria: 'anatomia',
    definicao: 'Ponto culminante onde duas hastes inclinadas se encontram no topo de letras como A e M.',
    letraExemplo: 'A',
    detalheVisual: 'Vértice superior de força geométrica'
  },
  {
    termo: 'Entrelinha',
    categoria: 'composicao',
    definicao: 'A distância vertical entre duas linhas de base consecutivas. Define a densidade do bloco de leitura.',
    letraExemplo: '¶',
    detalheVisual: 'Espaço aéreo entre frases e pensamentos'
  },
  {
    termo: 'Kerning',
    categoria: 'composicao',
    definicao: 'Ajuste óptico do espaço entre pares específicos de letras para criar harmonia visual contínua.',
    letraExemplo: 'AV',
    detalheVisual: 'Encaixe dinâmico entre volumes ópticos'
  },
  {
    termo: 'Tracking',
    categoria: 'composicao',
    definicao: 'O espaçamento global aplicado uniformemente a todo o conjunto de caracteres em uma palavra ou linha.',
    letraExemplo: 'T P',
    detalheVisual: 'Dilatação ou condensação da mancha'
  },
  {
    termo: 'Tipos Móveis',
    categoria: 'tecnica',
    definicao: 'Blocos tridimensionais de metal ou madeira gravados em relevo invertido para receber tinta e pressão.',
    letraExemplo: 'M',
    detalheVisual: 'Matéria física do pensamento impresso'
  }
];
