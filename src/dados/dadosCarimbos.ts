export interface MatrizCarimbo {
  id: string;
  nome: string;
  origem: string;
  categoria: 'seres' | 'ferramentas' | 'signos';
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
 * Matrizes reais de carimbos dos carrinhos da exposição corpoDApalavra.
 * Gravadas pela Relevo Paulista a partir das ilustrações de Roger Beatjesus e Estúdio Agudo.
 */
export const MATRIZES_CARIMBO: MatrizCarimbo[] = [
  // 1. Os 3 Seres Conceituais da Exposição
  {
    id: 'carimbo-oser-grafica',
    nome: 'oSERgráfica',
    origem: 'Carrinhos da Exposição (Relevo Paulista)',
    categoria: 'seres',
    largura: 64,
    altura: 64,
    svgPath: 'M 12 52 L 12 28 Q 12 12 32 12 Q 52 12 52 28 L 52 52 Z M 22 28 L 42 28 M 32 16 L 32 40 M 20 48 L 44 48',
    conceito: 'A mão expressiva que imprime forma ao pensamento.'
  },
  {
    id: 'carimbo-oser-livro',
    nome: 'oSERlivro',
    origem: 'Carrinhos da Exposição (Relevo Paulista)',
    categoria: 'seres',
    largura: 64,
    altura: 50,
    svgPath: 'M 6 42 Q 32 32 32 10 Q 32 32 58 42 L 58 48 Q 32 38 32 16 Q 32 38 6 48 Z M 32 10 L 32 46',
    conceito: 'A escultura da página aberta como flor e o princípio da dobra.'
  },
  {
    id: 'carimbo-oser-tipografia',
    nome: 'oSERtipografia',
    origem: 'Carrinhos da Exposição (Relevo Paulista)',
    categoria: 'seres',
    largura: 56,
    altura: 64,
    svgPath: 'M 10 8 L 38 8 Q 50 8 50 24 Q 50 40 38 40 L 22 40 L 22 56 L 10 56 Z M 22 18 L 36 18 Q 40 18 40 24 Q 40 30 36 30 L 22 30 Z',
    conceito: 'O corpo físico da letra e a matriz modular.'
  },

  // 2. As Ferramentas do Acervo Exposto
  {
    id: 'carimbo-prelo',
    nome: 'Prelo Tipográfico',
    origem: 'Acervo Sesc Santo André',
    categoria: 'ferramentas',
    largura: 60,
    altura: 60,
    svgPath: 'M 10 50 L 50 50 M 16 50 L 16 20 L 44 20 L 44 50 M 30 20 L 30 8 M 20 8 L 40 8 M 20 35 L 40 35',
    conceito: 'A prensa mecânica que une a tinta ao papel sob pressão uniforme.'
  },
  {
    id: 'carimbo-bico-pena',
    nome: 'Bico de Pena & Tinteiro',
    origem: 'Acervo Milton Bonani',
    categoria: 'ferramentas',
    largura: 50,
    altura: 60,
    svgPath: 'M 25 4 L 35 24 L 28 56 L 22 56 L 15 24 Z M 25 4 L 25 36 M 25 36 A 2 2 0 1 0 25 40 A 2 2 0 1 0 25 36',
    conceito: 'O fluxo orgânico da caligrafia e a memória dos copistas.'
  },
  {
    id: 'carimbo-cinzel-rocha',
    nome: 'Cinzel & Rocha Gravada',
    origem: 'Acervo Ulysses Bôscolo',
    categoria: 'ferramentas',
    largura: 56,
    altura: 56,
    svgPath: 'M 12 12 L 44 12 L 50 44 L 6 44 Z M 16 44 L 28 54 L 40 44 M 28 12 L 28 44',
    conceito: 'O entalhe por extração e a resistência mineral do travertino.'
  },
  {
    id: 'carimbo-tabua-cuneiforme',
    nome: 'Tábua Cuneiforme',
    origem: 'Acervo Flávia Franqueiro',
    categoria: 'ferramentas',
    largura: 54,
    altura: 54,
    svgPath: 'M 8 6 L 46 6 L 46 48 L 8 48 Z M 14 14 L 30 18 L 14 22 Z M 14 26 L 36 30 L 14 34 Z M 14 38 L 26 41 L 14 44 Z',
    conceito: 'A incisão de junco na argila mole e o nascimento da escrita cuneiforme.'
  },
  {
    id: 'carimbo-rolo-tinta',
    nome: 'Rolo de Entintagem',
    origem: 'Acervo Risko Rolos',
    categoria: 'ferramentas',
    largura: 60,
    altura: 50,
    svgPath: 'M 10 12 L 50 12 L 50 26 L 10 26 Z M 30 26 L 30 46 M 24 46 L 36 46',
    conceito: 'A distribuição homogênea do pigmento graxo sobre a madeira.'
  },

  // 3. Signos do Glossário Poético
  {
    id: 'carimbo-contraforma',
    nome: 'Contraforma & Vazio',
    origem: 'Glossário da Exposição',
    categoria: 'signos',
    largura: 54,
    altura: 54,
    svgPath: 'M 6 6 L 48 6 L 48 48 L 6 48 Z M 18 18 L 36 18 L 36 36 L 18 36 Z',
    conceito: 'O silêncio interno da letra e o espaço não impresso.'
  },
  {
    id: 'carimbo-registro-carrinho',
    nome: 'Chancela do Atelier',
    origem: 'Selo Oficial Sesc Santo André',
    categoria: 'signos',
    largura: 64,
    altura: 32,
    svgPath: 'M 4 4 L 60 4 L 60 28 L 4 28 Z M 8 8 L 56 8 L 56 24 L 8 24 Z M 14 16 L 50 16',
    conceito: 'Chancela dos carrinhos móveis de carimbagem do ETA.'
  }
];
