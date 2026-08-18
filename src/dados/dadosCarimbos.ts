export interface MatrizCarimbo {
  id: string;
  nome: string;
  simbolo: string;
  origem: string;
  categoria: 'ferramentas' | 'obras' | 'signos';
  largura: number;
  altura: number;
  svgPath: string;
  conceito: string;
}

export interface AlmofadaTinta {
  id: string;
  nome: string;
  corHex: string;
  pigmento: string;
}

export interface CarimbadaInstancia {
  id: string;
  matrizId: string;
  x: number;
  y: number;
  rotacao: number;
  escala: number;
  corHex: string;
  opacidade: number;
  timestamp: number;
}

export const ALMOFADAS_TINTA: AlmofadaTinta[] = [
  { id: 'preto', nome: 'Preto de Fumo', corHex: '#0D0D0D', pigmento: 'Negro de carbono vegetal' },
  { id: 'vermelho', nome: 'Vermelhão Carmim', corHex: '#D13828', pigmento: 'Óxido de ferro e cinábrio' },
  { id: 'azul', nome: 'Azul Cobalto', corHex: '#1E3A8A', pigmento: 'Silicato de cobalto' },
  { id: 'ocre', nome: 'Ocre Queimado', corHex: '#B45309', pigmento: 'Argila e limonita terrosa' },
  { id: 'verde', nome: 'Verde Malaquita', corHex: '#047857', pigmento: 'Carbonato básico de cobre' }
];

/**
 * Os 12 Carimbos Reais dos Carrinhos do ETA na Exposição corpoDApalavra.
 * Gravados em linóleo pela Relevo Paulista a partir das ilustrações de Roger Beatjesus e Estúdio Agudo.
 */
export const MATRIZES_CARIMBO: MatrizCarimbo[] = [
  {
    id: 'carimbo-funtimod',
    nome: 'Prensa FUNTIMOD',
    simbolo: '⚙',
    origem: 'Cia. Fundição Tipográfica Moderna (ETA-CP-001)',
    categoria: 'ferramentas',
    largura: 60,
    altura: 60,
    svgPath: 'M 10 50 L 50 50 M 16 50 L 16 20 L 44 20 L 44 50 M 30 20 L 30 8 M 20 8 L 40 8 M 20 35 L 40 35',
    conceito: 'Prensa tipográfica original: a pressão uniforme que transfere o relevo.'
  },
  {
    id: 'carimbo-pena',
    nome: 'Bico de Pena & Tinteiro',
    simbolo: '✒',
    origem: 'Acervo Milton Bonani',
    categoria: 'ferramentas',
    largura: 50,
    altura: 60,
    svgPath: 'M 25 4 L 35 24 L 28 56 L 22 56 L 15 24 Z M 25 4 L 25 36 M 23 38 A 2 2 0 1 0 27 38 A 2 2 0 1 0 23 38',
    conceito: 'O gesto manuscrito fluido dos copistas e o traço caligráfico orgânico.'
  },
  {
    id: 'carimbo-cuneiforme',
    nome: 'Tábua Cuneiforme',
    simbolo: '⚑',
    origem: 'Acervo Flávia Franqueiro (ETA-CP-003)',
    categoria: 'signos',
    largura: 54,
    altura: 54,
    svgPath: 'M 8 6 L 46 6 L 46 48 L 8 48 Z M 14 14 L 30 18 L 14 22 Z M 14 26 L 36 30 L 14 34 Z M 14 38 L 26 41 L 14 44 Z',
    conceito: 'A incisão de cunha em argila mole: a matéria de registro primordial.'
  },
  {
    id: 'carimbo-pergaminho',
    nome: 'Pergaminho & Rolo',
    simbolo: '📜',
    origem: 'Pele bovina contínua (ETA-CP-004)',
    categoria: 'signos',
    largura: 64,
    altura: 50,
    svgPath: 'M 6 42 Q 32 32 32 10 Q 32 32 58 42 L 58 48 Q 32 38 32 16 Q 32 38 6 48 Z M 32 10 L 32 46',
    conceito: 'O suporte flexível contínuo: o conhecimento que circula pelo espaço.'
  },
  {
    id: 'carimbo-poemobiles',
    nome: 'Poemóbiles',
    simbolo: '✦',
    origem: 'Augusto de Campos & Julio Plaza 1974 (ETA-CP-005)',
    categoria: 'obras',
    largura: 56,
    altura: 56,
    svgPath: 'M 28 6 L 34 22 L 50 28 L 34 34 L 28 50 L 22 34 L 6 28 L 22 22 Z',
    conceito: 'Poesia concreta tridimensional: o livro como objeto cinético pop-up.'
  },
  {
    id: 'carimbo-klaxon',
    nome: 'Klaxon em Revista',
    simbolo: '✺',
    origem: 'Revista Modernista 1922 (ETA-CP-006)',
    categoria: 'obras',
    largura: 56,
    altura: 56,
    svgPath: 'M 28 4 L 32 20 L 48 12 L 40 26 L 54 34 L 38 38 L 44 54 L 30 42 L 20 54 L 22 38 L 6 34 L 20 26 L 12 12 L 26 20 Z',
    conceito: 'Mensário de vanguarda: a tipografia experimental como manifesto.'
  },
  {
    id: 'carimbo-colher',
    nome: 'Colher Xilográfica',
    simbolo: '🥄',
    origem: 'Feira de João Pessoa (ETA-CP-007)',
    categoria: 'ferramentas',
    largura: 56,
    altura: 56,
    svgPath: 'M 12 12 L 44 12 L 50 44 L 6 44 Z M 16 44 L 28 54 L 40 44 M 28 12 L 28 44',
    conceito: 'Madeira torneada para brunir o papel e transferir a tinta por fricção.'
  },
  {
    id: 'carimbo-rolo',
    nome: 'Rolo Entintador',
    simbolo: '☵',
    origem: 'Risko Rolos (ETA-CP-008)',
    categoria: 'ferramentas',
    largura: 60,
    altura: 50,
    svgPath: 'M 10 12 L 50 12 L 50 26 L 10 26 Z M 30 26 L 30 46 M 24 46 L 36 46',
    conceito: 'Distribuição homogênea do pigmento negro de fumo sobre as matrizes.'
  },
  {
    id: 'carimbo-dobra',
    nome: 'Dobra Central & Códice',
    simbolo: '✂',
    origem: 'Princípio do Livro (Robert Bringhurst)',
    categoria: 'signos',
    largura: 56,
    altura: 56,
    svgPath: 'M 10 10 L 46 10 L 46 46 L 10 46 Z M 28 10 L 28 46 M 16 28 L 40 28',
    conceito: 'A espinha dorsal da folha dobrada: o limiar da leitura e o ritmo temporal.'
  },
  {
    id: 'carimbo-linha-tempo',
    nome: 'Linha do Tempo',
    simbolo: '◰',
    origem: 'Design Gráfico no Brasil (ETA-CP-009)',
    categoria: 'obras',
    largura: 60,
    altura: 40,
    svgPath: 'M 6 8 L 54 8 L 54 32 L 6 32 Z M 14 16 L 46 16 M 14 24 L 38 24',
    conceito: 'Panorama de 200 anos da evolução visual, tipográfica e editorial brasileira.'
  },
  {
    id: 'carimbo-chumbo',
    nome: 'Matriz de Chumbo',
    simbolo: '◬',
    origem: 'Gráfica Hosana (ETA-CP-002)',
    categoria: 'signos',
    largura: 56,
    altura: 64,
    svgPath: 'M 10 8 L 38 8 Q 50 8 50 24 Q 50 40 38 40 L 22 40 L 22 56 L 10 56 Z M 22 18 L 36 18 Q 40 18 40 24 Q 40 30 36 30 L 22 30 Z',
    conceito: 'A modularidade física do tipo móvel fundido no componedor.'
  },
  {
    id: 'carimbo-olho',
    nome: 'Olho & Contraforma',
    simbolo: '◉',
    origem: 'Glossário do Corpo da Letra',
    categoria: 'signos',
    largura: 54,
    altura: 54,
    svgPath: 'M 6 6 L 48 6 L 48 48 L 6 48 Z M 18 18 L 36 18 L 36 36 L 18 36 Z',
    conceito: 'A leitura do mundo que precede a palavra e o silêncio da contraforma.'
  }
];
