export interface MatrizCarimbo {
  id: string;
  nome: string;
  categoria: 'anatomia' | 'letra' | 'grafismo';
  largura: number;
  altura: number;
  svgPath: string;
  descricao: string;
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

export const MATRIZES_CARIMBO: MatrizCarimbo[] = [
  // Formas Anatômicas
  {
    id: 'haste-vertical',
    nome: 'Haste Vertical',
    categoria: 'anatomia',
    largura: 24,
    altura: 80,
    svgPath: 'M 4 4 L 20 4 L 20 76 L 4 76 Z',
    descricao: 'Eixo estrutural principal da letra'
  },
  {
    id: 'bojo-arco',
    nome: 'Bojo em Meia-Lua',
    categoria: 'anatomia',
    largura: 60,
    altura: 50,
    svgPath: 'M 4 4 Q 56 4 56 25 Q 56 46 4 46 Z',
    descricao: 'Arco curvo que delimita a contraforma interior'
  },
  {
    id: 'serifa-cunha',
    nome: 'Serifa Triangular',
    categoria: 'anatomia',
    largura: 40,
    altura: 20,
    svgPath: 'M 4 16 L 20 4 L 36 16 Z',
    descricao: 'Remate terminal herdado do corte de cinzel'
  },
  {
    id: 'gota-terminal',
    nome: 'Terminal em Gota',
    categoria: 'anatomia',
    largura: 36,
    altura: 36,
    svgPath: 'M 18 4 C 28 4 34 10 34 18 C 34 26 26 32 18 32 C 10 32 4 24 4 18 C 4 8 12 4 18 4 Z',
    descricao: 'Terminação circular decorrente da gota de tinta da pena'
  },
  // Matrizes de Letras Monumentais Reais
  {
    id: 'letra-p-matriz',
    nome: 'Capitular P',
    categoria: 'letra',
    largura: 60,
    altura: 70,
    svgPath: 'M 8 6 L 36 6 Q 54 6 54 22 Q 54 38 36 38 L 22 38 L 22 64 L 8 64 Z M 22 18 L 34 18 Q 42 18 42 22 Q 42 26 34 26 L 22 26 Z',
    descricao: 'A matriz seminal de corpoDApalavra'
  },
  {
    id: 'letra-c-matriz',
    nome: 'Capitular C',
    categoria: 'letra',
    largura: 60,
    altura: 70,
    svgPath: 'M 52 16 Q 44 6 30 6 Q 10 6 10 35 Q 10 64 30 64 Q 44 64 52 54 L 42 46 Q 36 52 30 52 Q 22 52 22 35 Q 22 18 30 18 Q 36 18 42 24 Z',
    descricao: 'A curva aberta do corpo da palavra'
  },
  {
    id: 'letra-o-matriz',
    nome: 'Capitular O',
    categoria: 'letra',
    largura: 64,
    altura: 70,
    svgPath: 'M 32 6 Q 56 6 56 35 Q 56 64 32 64 Q 8 64 8 35 Q 8 6 32 6 Z M 32 18 Q 44 18 44 35 Q 44 52 32 52 Q 20 52 20 35 Q 20 18 32 18 Z',
    descricao: 'O círculo perfeito e a contraforma total'
  },
  // Grafismos e Texturas de Atelier
  {
    id: 'grade-trama',
    nome: 'Trama Linear',
    categoria: 'grafismo',
    largura: 60,
    altura: 60,
    svgPath: 'M 4 8 L 56 8 M 4 20 L 56 20 M 4 32 L 56 32 M 4 44 L 56 44 M 4 56 L 56 56',
    descricao: 'Padrão xilográfico de linhas paralelas'
  },
  {
    id: 'registro-grafico',
    nome: 'Cruz de Registro',
    categoria: 'grafismo',
    largura: 40,
    altura: 40,
    svgPath: 'M 20 2 L 20 38 M 2 20 L 38 20 M 20 8 A 12 12 0 1 0 20 32 A 12 12 0 1 0 20 8',
    descricao: 'Marcação de alinhamento e precisão do impressor'
  },
  {
    id: 'selo-sesc-eta',
    nome: 'Selo Atelier ETA',
    categoria: 'grafismo',
    largura: 70,
    altura: 30,
    svgPath: 'M 2 2 L 68 2 L 68 28 L 2 28 Z M 6 6 L 64 6 L 64 24 L 6 24 Z',
    descricao: 'Chancela oficial de prensagem do atelier'
  }
];
