export interface ObraAcervoETA {
  id: string;
  tombo: string;
  titulo: string;
  categoria: string;
  material: string;
  dimensoes: string;
  descricao: string;
  nucleo: string;
  simbolo: string;
}

/**
 * Catálogo completo de Obras, Matrizes e Acervos da Exposição corpoDApalavra.
 * Espaço de Tecnologias e Artes do Sesc Santo André.
 */
export const OBRAS_ACERVO_ETA: ObraAcervoETA[] = [
  {
    id: 'obr-001',
    tombo: 'ETA-CP-001',
    titulo: 'Prensa Tipográfica FUNTIMOD',
    categoria: 'Maquinário Histórico de Impressão',
    material: 'Ferro fundido, cilindro de pressão, alavanca e base mecânica',
    dimensoes: '140 × 90 × 120 cm (Cia. Fundição Tipográfica Moderna S.A.)',
    descricao: 'Prensa tipográfica original utilizada para impressão manual em relevo de cartazes, capas e gravuras no ateliê aberto do ETA.',
    nucleo: 'oSERgráfica • O Ateliê Aberto',
    simbolo: '⚙'
  },
  {
    id: 'obr-002',
    tombo: 'ETA-CP-002',
    titulo: 'Gavetas de Tipos Móveis em Madeira & Chumbo',
    categoria: 'Tipografia Histórica',
    material: 'Madeira de lei entalhada (Gráfica Hosana) e clichês de chumbo',
    dimensoes: 'Formatos variados de 24pt a 120pt (Acervo Roberto Gutiérrez)',
    descricao: 'Coleção histórica de corpos tipográficos de madeira e chumbo utilizados para composição manual em componedores.',
    nucleo: 'oSERtipografia • Matriz Modular',
    simbolo: '◬'
  },
  {
    id: 'obr-003',
    tombo: 'ETA-CP-003',
    titulo: 'Rocha Gravada de Travertino & Tábua Cuneiforme',
    categoria: 'Arqueologia do Suporte',
    material: 'Travertino romano (Ulysses Bôscolo) e argila cozida (Flávia Franqueiro)',
    dimensoes: '18 × 14 × 3 cm e bloco mineral de 30 × 20 cm',
    descricao: 'A primeira matéria do registro humano: a remoção e incisão de matéria sobre a pedra e a argila plástica.',
    nucleo: 'oSERlivro • A Matéria dos Sinais',
    simbolo: '⚑'
  },
  {
    id: 'obr-004',
    tombo: 'ETA-CP-004',
    titulo: 'Rolos de Pergaminho em Couro Bovino',
    categoria: 'Arqueologia do Suporte',
    material: 'Couro bovino tratado, macio e flexível com haste de madeira',
    dimensoes: 'Extensão: 160 × 22 cm',
    descricao: 'A transição para a flexibilidade do rolo contínuo: o conhecimento liberta-se da parede e viaja no espaço.',
    nucleo: 'oSERlivro • O Rolo & A Circulação',
    simbolo: '📜'
  },
  {
    id: 'obr-005',
    tombo: 'ETA-CP-005',
    titulo: 'Poemóbiles (Augusto de Campos & Julio Plaza)',
    categoria: 'Livro de Artista',
    material: 'Cartão recortado e dobrado em pop-up com encaixes cinéticos (1974)',
    dimensoes: '25 × 25 cm (Fac-símile Coleção Livro Vivo)',
    descricao: 'Obra fundamental da poesia concreta brasileira: o livro como objeto cinético tridimensional que se ativa ao ser aberto.',
    nucleo: 'Poesia Concreta & Livro Objeto',
    simbolo: '✦'
  },
  {
    id: 'obr-006',
    tombo: 'ETA-CP-006',
    titulo: 'Klaxon em Revista (Fac-símile 1922–1923)',
    categoria: 'Publicações Históricas',
    material: 'Papel couché e offset com diagramação modernista revolucionária',
    dimensoes: '28 × 20 cm (Edição Cosac Naify 2013)',
    descricao: 'Mensário de arte moderna pioneiro no Brasil em integrar tipografia experimental, manifesto cultural e vanguarda.',
    nucleo: 'Vanguardas Editoriais',
    simbolo: '✺'
  },
  {
    id: 'obr-007',
    tombo: 'ETA-CP-007',
    titulo: 'Colheres de Madeira para Impressão Xilográfica',
    categoria: 'Ferramentas de Impressão Manual',
    material: 'Madeira torneada e polida (Acervo André Bonani)',
    dimensoes: 'Comprimentos de 15 a 45 cm (Feira de João Pessoa)',
    descricao: 'Instrumentos tradicionais para brunir o verso do papel, transferindo a tinta da matriz xilográfica por fricção direta.',
    nucleo: 'oSERgráfica • O Ofício da Impressão',
    simbolo: '🥄'
  },
  {
    id: 'obr-008',
    tombo: 'ETA-CP-008',
    titulo: 'Rolo Entintador & Carimbos em Linóleo',
    categoria: 'Instrumentos de Ateliê',
    material: 'Borracha vulcanizada, aço (Risko Rolos) e linóleo (Relevo Paulista)',
    dimensoes: 'Rolo 15 cm e matrizes dos carrinhos do ETA',
    descricao: 'Ferramentas para entintamento homogêneo e estamparia direta de matrizes gravadas em relevo disponíveis nos carrinhos.',
    nucleo: 'oSERgráfica • Carrinhos de Carimbo',
    simbolo: '☵'
  },
  {
    id: 'obr-009',
    tombo: 'ETA-CP-009',
    titulo: 'Linha do Tempo do Design Gráfico no Brasil',
    categoria: 'Pesquisa & Memória Gráfica',
    material: 'Publicação encadernada (Chico Homem de Melo e Elaine Ramos)',
    dimensoes: 'Cosac Naify (2012) — Acervo Sesc Santo André',
    descricao: 'Panorama referencial de 200 anos da evolução tipográfica, editorial, de cartazes e livros no Brasil.',
    nucleo: 'Memória & Arquivo Experimental',
    simbolo: '◰'
  }
];
