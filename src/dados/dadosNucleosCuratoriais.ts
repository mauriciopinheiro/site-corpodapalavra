export interface NucleoCuratorial {
  id: string;
  codigo: string;
  letraGuia: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  conceitoChave: string;
  poemaConcreto: string[];
  citacao: string;
}

/**
 * Os 6 Núcleos Curatoriais da Exposição corpoDApalavra.
 * Espaço de Tecnologias e Artes do Sesc Santo André.
 */
export const NUCLEOS_CURATORIAIS: NucleoCuratorial[] = [
  {
    id: 'nuc-01',
    codigo: 'NUC-01',
    letraGuia: 'C',
    titulo: 'Corpo & Limiar',
    subtitulo: 'A quebra da leitura linear e o acolhimento espacial',
    descricao: 'O primeiro contato com o Espaço de Tecnologias e Artes desestabiliza a leitura tradicional. Caracteres em grande escala acolhem o olhar e transformam o espaço em suporte tipográfico vibrante.',
    conceitoChave: 'LIMIAR',
    poemaConcreto: [
      'O CORPO OCUPA O ESPAÇO',
      'A LETRA RECEBE O CORPO',
      'DESAPRENDER A LER EM LINHA RETA'
    ],
    citacao: 'Entrar na exposição é entrar no corpo vivo da própria palavra.'
  },
  {
    id: 'nuc-02',
    codigo: 'NUC-02',
    letraGuia: 'O',
    titulo: 'Objeto, Matriz & Instrumento (oSERlivro)',
    subtitulo: 'Arqueologia do suporte, da pedra à dobra do papel',
    descricao: 'Apresenta a evolução material da escrita com rochas gravadas, tábuas de argila, pergaminhos e a engenharia do livro articulado, revelando a espinha dorsal da dobra.',
    conceitoChave: 'SUPORTE',
    poemaConcreto: [
      'PEDRA • ARGILA • COURO • FIBRA',
      'A DOBRA QUE CRIA O CÓDICE',
      'A ESCULTURA DO SABER EM MOVIMENTO'
    ],
    citacao: 'O livro constitui uma extensão da memória e da imaginação. (Jorge Luis Borges)'
  },
  {
    id: 'nuc-03',
    codigo: 'NUC-03',
    letraGuia: 'R',
    titulo: 'Ritmo, Espaço & Tipografia (oSERtipografia)',
    subtitulo: 'O painel de 36 módulos de madeira e o A–Z da tipografia brasileira',
    descricao: 'A parede monumental onde caracteres modulares em madeira dialogam com trechos da literatura brasileira e famílias tipográficas desenhadas por tipógrafos contemporâneos do país.',
    conceitoChave: 'RITMO',
    poemaConcreto: [
      '36 MÓDULOS DE MADEIRA MACIÇA',
      '12 FAMÍLIAS TIPOGRÁFICAS NACIONAIS',
      'O PESO DA LETRA NA PAREDE'
    ],
    citacao: 'A leitura do mundo precede a leitura da palavra. (Paulo Freire)'
  },
  {
    id: 'nuc-04',
    codigo: 'NUC-04',
    letraGuia: 'P',
    titulo: 'Poesia Concreta, Livro de Artista & Fanzines',
    subtitulo: 'A palavra como imagem, objeto cinético e publicação independente',
    descricao: 'Obras icônicas que subvertem a página tradicional: Poemóbiles (Augusto de Campos & Julio Plaza), a revista Klaxon (1922) e a produção de fanzines gráficos do ABC paulista.',
    conceitoChave: 'FORMA',
    poemaConcreto: [
      'PALAVRA QUE SE MOVE',
      'POESIA EM POP-UP TRIDIMENSIONAL',
      'A VANGUARDA IMPRESSA NO PAPEL'
    ],
    citacao: 'A palavra como imagem e o livro como arquitetura cinética.'
  },
  {
    id: 'nuc-05',
    codigo: 'NUC-05',
    letraGuia: 'O',
    titulo: 'O Ateliê Aberto & A Impressão (oSERgráfica)',
    subtitulo: 'Prensa FUNTIMOD, componedores e carrinhos de carimbos modulares',
    descricao: 'O espaço prático onde o visitante opera tipos móveis de madeira e chumbo, entinta matrizes com rolos Risko, puxa a alavanca da prensa e compõe poemas visuais nos carrinhos de carimbo.',
    conceitoChave: 'GESTO',
    poemaConcreto: [
      'COMPOR • ENTINTAR • PRENSAR',
      'O RUÍDO MECÂNICO DO PRELO',
      'CARIMBOS DO GLOSSÁRIO NO PAPEL'
    ],
    citacao: 'A criatura humana encontra na mão um canal expressivo. (André Bonani)'
  },
  {
    id: 'nuc-06',
    codigo: 'NUC-06',
    letraGuia: 'A',
    titulo: 'Memória & Arquivo Experimental',
    subtitulo: 'Mesa de pesquisa, catálogo de processos e acervo Lote 42',
    descricao: 'Registros do processo criativo de Gráfica Experimental, GamaH e Estúdio Agudo, gavetas de matrizes históricas e 9 livros contemporâneos de projetos gráficos experimentais editados pela Lote 42.',
    conceitoChave: 'MEMÓRIA',
    poemaConcreto: [
      'GAVETAS DE TIPOS • MATRIZES VIVAS',
      '9 LIVROS EXPERIMENTAIS LOTE 42',
      'PRESERVAR O CORPO DO OFÍCIO'
    ],
    citacao: 'Colecionar fragmentos de letras é preservar a memória viva do ofício.'
  }
];
