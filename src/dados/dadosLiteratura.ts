/**
 * Excertos da literatura brasileira explorados como composições tipográficas e imagéticas.
 */
export interface TrechoLiterario {
  id: string;
  autor: string;
  obra: string;
  ano: string;
  palavrasChave: string[];
  conteudoNormal: string;
  camadasGraficas: {
    termo: string;
    estilo: string;
    peso: string;
    tamanho: string;
    destaque?: boolean;
  }[];
}

export const DADOS_LITERATURA: TrechoLiterario[] = [
  {
    id: 'guimaraes-rosa',
    autor: 'João Guimarães Rosa',
    obra: 'Grande Sertão: Veredas',
    ano: '1956',
    palavrasChave: ['sertão', 'infinito', 'linguagem', 'vento', 'vereda'],
    conteudoNormal: 'O sertão está em toda parte. O sertão é dentro da gente. O real não está na saída nem na chegada: ele se dispõe para a gente é no meio da travessia.',
    camadasGraficas: [
      { termo: 'O sertão', estilo: 'font-anton uppercase tracking-widest', peso: 'font-black', tamanho: 'text-5xl md:text-8xl' },
      { termo: 'está em toda parte.', estilo: 'font-serifa italic', peso: 'font-normal', tamanho: 'text-2xl md:text-4xl' },
      { termo: 'O SERTÃO É DENTRO', estilo: 'font-mono uppercase bg-tinta text-papel px-3 py-1', peso: 'font-bold', tamanho: 'text-xl md:text-3xl' },
      { termo: 'da gente.', estilo: 'font-serifa text-acento-vermelho', peso: 'font-bold', tamanho: 'text-3xl md:text-6xl', destaque: true },
      { termo: 'O REAL NÃO ESTÁ NO COMEÇO', estilo: 'font-corpo tracking-tighter', peso: 'font-light', tamanho: 'text-lg md:text-2xl' },
      { termo: 'TRAVESSIA', estilo: 'font-anton text-6xl md:text-9xl tracking-tight text-tinta border-b-4 border-tinta pb-2', peso: 'font-black', tamanho: 'text-6xl md:text-9xl', destaque: true }
    ]
  },
  {
    id: 'clarice-lispector',
    autor: 'Clarice Lispector',
    obra: 'Água Viva',
    ano: '1973',
    palavrasChave: ['instante', 'silêncio', 'corpo', 'matéria', 'letra'],
    conteudoNormal: 'Escrevo-te porque não me compreendo. Mas continuo a tecer este instante. O que te escrevo é um nada, é o corpo invisível de uma palavra que ressoa no silêncio.',
    camadasGraficas: [
      { termo: 'Escrevo-te', estilo: 'font-serifa italic', peso: 'font-light', tamanho: 'text-4xl md:text-7xl' },
      { termo: 'PORQUE NÃO ME COMPREENDO', estilo: 'font-mono text-xs md:text-sm tracking-widest text-tinta-cinza uppercase', peso: 'font-mono', tamanho: 'text-xs md:text-sm' },
      { termo: 'O CORPO INVISÍVEL', estilo: 'font-anton uppercase text-tinta tracking-tight', peso: 'font-bold', tamanho: 'text-5xl md:text-8xl' },
      { termo: 'de uma palavra que ressoa', estilo: 'font-corpo italic text-tinta-desbotada', peso: 'font-normal', tamanho: 'text-2xl md:text-4xl' },
      { termo: 'SILÊNCIO', estilo: 'font-serifa text-7xl md:text-[10rem] leading-none uppercase text-acento-azul font-black', peso: 'font-black', tamanho: 'text-7xl md:text-[10rem]', destaque: true }
    ]
  },
  {
    id: 'melo-neto',
    autor: 'João Cabral de Melo Neto',
    obra: 'A Educação pela Pedra',
    ano: '1966',
    palavrasChave: ['pedra', 'matéria', 'construção', 'peso', 'gesto'],
    conteudoNormal: 'Uma educação pela pedra: por lições; para aprender da pedra, frequentá-la; captar sua voz inexpressiva, sua poética concreta e sua densidade dura.',
    camadasGraficas: [
      { termo: 'UMA EDUCAÇÃO PELA', estilo: 'font-mono tracking-widest text-sm uppercase', peso: 'font-bold', tamanho: 'text-sm md:text-base' },
      { termo: 'PEDRA', estilo: 'font-anton text-7xl md:text-[11rem] leading-none uppercase tracking-tighter text-tinta', peso: 'font-black', tamanho: 'text-7xl md:text-[11rem]', destaque: true },
      { termo: 'lição de arquitetura e matéria', estilo: 'font-serifa italic border-l-2 border-tinta pl-4', peso: 'font-normal', tamanho: 'text-xl md:text-3xl' },
      { termo: 'DENSIDADE DURA', estilo: 'font-corpo uppercase bg-madeira text-tinta px-4 py-2 font-black border-2 border-tinta shadow-carimbo', peso: 'font-black', tamanho: 'text-2xl md:text-5xl', destaque: true }
    ]
  }
];
