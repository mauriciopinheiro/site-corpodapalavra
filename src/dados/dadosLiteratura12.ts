export interface ExcertoReal12 {
  id: number;
  autor: string;
  obra: string;
  ano: string;
  fonteTipografica: string;
  conceitoCuratorial: string;
  textoIntegral: string;
  fragmentoDestaque: string;
}

export const DADOS_LITERATURA_12: ExcertoReal12[] = [
  {
    id: 1,
    autor: 'Paulo Freire',
    obra: 'A Importância do Ato de Ler',
    ano: '1981',
    fonteTipografica: 'Prelo Sans / Gráfica Experimental',
    conceitoCuratorial: 'A leitura do mundo precede a leitura da palavra.',
    textoIntegral: 'A leitura do mundo precede a leitura da palavra, daí que a posterior leitura desta não possa prescindir da continuidade da leitura daquele. Linguagem e realidade se prendem dinamicamente.',
    fragmentoDestaque: 'A leitura do mundo precede a leitura da palavra.'
  },
  {
    id: 2,
    autor: 'Ana Martins Marques',
    obra: 'O Livro das Semelhanças',
    ano: '2015',
    fonteTipografica: 'Seiva / Estúdio Agudo',
    conceitoCuratorial: 'A dobra da folha como limiar entre memória e presença.',
    textoIntegral: 'O livro aberto sobre a mesa como uma ave pousada. As asas imóveis contêm todo o vento dos caminhos que ainda não foram lidos.',
    fragmentoDestaque: 'O livro aberto sobre a mesa como uma ave pousada.'
  },
  {
    id: 3,
    autor: 'Prisca Agustoni',
    obra: 'O Gesto Mudo',
    ano: '2022',
    fonteTipografica: 'Adriane Text',
    conceitoCuratorial: 'A grafia silenciosa da matéria e do relevo.',
    textoIntegral: 'Há palavras que não pedem som, pedem apenas o peso da tinta, o tempo do sulco e a respiração lenta do papel cru.',
    fragmentoDestaque: 'Há palavras que não pedem som, pedem apenas o peso da tinta.'
  },
  {
    id: 4,
    autor: 'Lima Barreto',
    obra: 'Recordações do Escrivão Isaías Caminha',
    ano: '1909',
    fonteTipografica: 'Mecânica Monospaçada',
    conceitoCuratorial: 'A tipografia do jornal e a crônica da imprensa.',
    textoIntegral: 'As máquinas de impressão rugiam embaixo, batendo os tipos contra o papel úmido, espalhando pela cidade as vozes apressadas do tempo.',
    fragmentoDestaque: 'As máquinas de impressão rugiam embaixo, batendo os tipos.'
  },
  {
    id: 5,
    autor: 'Ailton Krenak',
    obra: 'Ideias para Adiar o Fim do Mundo',
    ano: '2019',
    fonteTipografica: 'Bala New / Márcio Freitas',
    conceitoCuratorial: 'A palavra como território vivo e respiração da terra.',
    textoIntegral: 'Cantar, dançar e viver a experiência mágica de suspender o céu. Nossas narrativas não são abstrações: são matéria viva que sustenta o mundo.',
    fragmentoDestaque: 'Cantar, dançar e viver a experiência mágica de suspender o céu.'
  },
  {
    id: 6,
    autor: 'Antônio Bispo dos Santos (Nego Bispo)',
    obra: 'A Terra Dá, a Terra Quer',
    ano: '2023',
    fonteTipografica: 'Discórdia / Matriz Afro-brasileira',
    conceitoCuratorial: 'A confluência orgânica contra a linearidade mecânica.',
    textoIntegral: 'Nós somos o meio, nós somos a confluência. O saber compartilhado na roda e na terra não cabe numa linha reta: ele circula e germina.',
    fragmentoDestaque: 'Nós somos o meio, nós somos a confluência.'
  },
  {
    id: 7,
    autor: 'Maria Firmina dos Reis',
    obra: 'Úrsula',
    ano: '1859',
    fonteTipografica: 'Adriane Text / Livro Clássico',
    conceitoCuratorial: 'A pioneira voz feminina e abolicionista gravada no papel.',
    textoIntegral: 'A mente não se escraviza. Podem quebrar as correntes do corpo, mas o pensamento livre voa alto e encontra na escrita sua morada eterna.',
    fragmentoDestaque: 'A mente não se escraviza. O pensamento livre voa alto.'
  },
  {
    id: 8,
    autor: 'João Guimarães Rosa',
    obra: 'Grande Sertão: Veredas',
    ano: '1956',
    fonteTipografica: 'Transição / Serifa Brasileira',
    conceitoCuratorial: 'A travessia existencial e o barroco da linguagem.',
    textoIntegral: 'O sertão está em toda parte. O sertão é dentro da gente. O real não está na saída nem na chegada: ele se dispõe para a gente é no meio da travessia.',
    fragmentoDestaque: 'O real não está na saída nem na chegada: ele se dispõe é no meio da travessia.'
  },
  {
    id: 9,
    autor: 'Clarice Lispector',
    obra: 'Água Viva',
    ano: '1973',
    fonteTipografica: 'Sumô / Peso Extremo',
    conceitoCuratorial: 'O instante puro e o corpo invisível da palavra.',
    textoIntegral: 'Escrevo-te porque não me compreendo. Mas continuo a tecer este instante. O que te escrevo é um nada, é o corpo invisível de uma palavra que ressoa.',
    fragmentoDestaque: 'O que te escrevo é o corpo invisível de uma palavra que ressoa.'
  },
  {
    id: 10,
    autor: 'João Cabral de Melo Neto',
    obra: 'A Educação pela Pedra',
    ano: '1966',
    fonteTipografica: 'Anton / Geometria Concreta',
    conceitoCuratorial: 'A lição de arquitetura, densidade e matéria dura.',
    textoIntegral: 'Uma educação pela pedra: por lições; para aprender da pedra, frequentá-la; captar sua voz inexpressiva, sua poética concreta e sua densidade dura.',
    fragmentoDestaque: 'Uma educação pela pedra: captar sua poética concreta.'
  },
  {
    id: 11,
    autor: 'Carolina Maria de Jesus',
    obra: 'Quarto de Despejo',
    ano: '1960',
    fonteTipografica: 'Gesto Manual / Prelo Popular',
    conceitoCuratorial: 'A escrita no papel de embrulho como testemunho visceral.',
    textoIntegral: 'O papel que os outros jogam fora é o chão onde planto minhas palavras. Escrever é o meu ato de coragem contra o esquecimento do mundo.',
    fragmentoDestaque: 'O papel que os outros jogam fora é o chão onde planto minhas palavras.'
  },
  {
    id: 12,
    autor: 'Oswald de Andrade',
    obra: 'Manifesto Pau-Brasil',
    ano: '1924',
    fonteTipografica: 'Display Condensada / Vanguarda',
    conceitoCuratorial: 'A síntese antropofágica e o corte modernista.',
    textoIntegral: 'A poesia para os poetas. A alegria da invenção contra a cópia servil. A letra crua como madeira de lei exportada para o futuro.',
    fragmentoDestaque: 'A alegria da invenção contra a cópia servil.'
  }
];
