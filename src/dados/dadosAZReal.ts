export interface GrupoAZReal {
  id: number;
  letras: string;
  fonte: string;
  autorOuReferencia: string;
  conceito: string;
  citacaoOuPensamento?: string;
  autorCitacao?: string;
  estiloVisual: 'brutalista' | 'serifa' | 'seiva' | 'humanista' | 'mono' | 'bala' | 'discordia' | 'adriane' | 'sumo' | 'condensada' | 'caligrafica' | 'experimental';
  descricao: string;
}

export const DADOS_AZ_REAL: GrupoAZReal[] = [
  {
    id: 1,
    letras: 'ab',
    fonte: 'Prelo Brutal / Gesto 01',
    autorOuReferencia: 'Gráfica Experimental',
    conceito: 'Abertura & Fundação',
    citacaoOuPensamento: '“A primeira letra é um corte no vazio.”',
    autorCitacao: 'André Bonani',
    estiloVisual: 'brutalista',
    descricao: 'Hastes maciças de alto contraste inspiradas nos primeiros blocos de madeira talhados manualmente.'
  },
  {
    id: 2,
    letras: 'cd',
    fonte: 'Transição Clássica / Arcabouço',
    autorOuReferencia: 'Estúdio Agudo',
    conceito: 'Curvatura & Contraforma',
    citacaoOuPensamento: '“No interior da curva habita o silêncio da voz.”',
    autorCitacao: 'Fabrício Gonçalves',
    estiloVisual: 'serifa',
    descricao: 'Bojos generosos e modulação de espessura que acolhem o espaço em branco.'
  },
  {
    id: 3,
    letras: 'ef',
    fonte: 'Seiva',
    autorOuReferencia: 'Tipografia Brasileira Contemporânea',
    conceito: 'Orgânico & Seiva Vegetal',
    citacaoOuPensamento: '“A letra cresce como galho que busca a luz da página.”',
    autorCitacao: 'Exposição corpoDApalavra',
    estiloVisual: 'seiva',
    descricao: 'Desenho fluido com terminais inspirados na botânica e na matéria viva da madeira.'
  },
  {
    id: 4,
    letras: 'gh',
    fonte: 'Geometria Humanista',
    autorOuReferencia: 'Claudio Rocha',
    conceito: 'Estrutura Dupla & Laço',
    citacaoOuPensamento: '“O g de dois andares é um pêndulo de equilíbrio ótico.”',
    autorCitacao: 'Oficina Tipográfica',
    estiloVisual: 'humanista',
    descricao: 'Construção complexa com orelha proeminente e laço inferior ritmado.'
  },
  {
    id: 5,
    letras: 'ij',
    fonte: 'Mecânica Monospaçada',
    autorOuReferencia: 'GamaH Expografia',
    conceito: 'Métrica & Ponto de Pausa',
    citacaoOuPensamento: '“A precisão do encaixe sustenta a leveza do conjunto.”',
    autorCitacao: 'GamaH',
    estiloVisual: 'mono',
    descricao: 'Caracteres com larguras estritas inspirados nos tipos de máquina de escrever e prelos.'
  },
  {
    id: 6,
    letras: 'kl',
    fonte: 'Bala New',
    autorOuReferencia: 'Márcio Freitas',
    conceito: 'Impulso Diagonal & Perna',
    citacaoOuPensamento: '“A força do corte angular projeta a leitura para a frente.”',
    autorCitacao: 'Márcio Freitas',
    estiloVisual: 'bala',
    descricao: 'Fontes brasileiras com traços geométricos enérgicos e ângulos agudos de impacto.'
  },
  {
    id: 7,
    letras: 'mno',
    fonte: 'Discórdia',
    autorOuReferencia: 'Antônio Bispo dos Santos (Nego Bispo)',
    conceito: 'Confluência & Resistência',
    citacaoOuPensamento: '“Nós não somos o começo nem o fim: nós somos o meio, a confluência.”',
    autorCitacao: 'Nego Bispo',
    estiloVisual: 'discordia',
    descricao: 'Tipografia expressiva de matriz afro-brasileira e ancestralidade orgânica.'
  },
  {
    id: 8,
    letras: 'pq',
    fonte: 'Adriane Text',
    autorOuReferencia: 'Maria Firmina dos Reis',
    conceito: 'Literatura Pioneira & Voz',
    citacaoOuPensamento: '“A mente livre não aceita as amarras da opressão.”',
    autorCitacao: 'Maria Firmina dos Reis',
    estiloVisual: 'adriane',
    descricao: 'Serifas editoriais elegantes desenhadas para imersão literária contínua.'
  },
  {
    id: 9,
    letras: 'rs',
    fonte: 'Sumô',
    autorOuReferencia: 'Design Tipográfico Brasileiro',
    conceito: 'Peso Extremo & Massa Negra',
    citacaoOuPensamento: '“A tinta preta ocupa a matéria com gravidade absoluta.”',
    autorCitacao: 'Painel oSERtipografia',
    estiloVisual: 'sumo',
    descricao: 'Pesos ultra pesados com contraformas microscópicas e presença física monumental.'
  },
  {
    id: 10,
    letras: 'tu',
    fonte: 'Condensada Arquitetural',
    autorOuReferencia: 'Tony de Marco',
    conceito: 'Verticalidade & Cruzamento',
    citacaoOuPensamento: '“A altura-x estica-se até tocar o limite do bloco.”',
    autorCitacao: 'Tony de Marco',
    estiloVisual: 'condensada',
    descricao: 'Proporções estreitas e verticais que otimizam o ritmo e a densidade da mancha.'
  },
  {
    id: 11,
    letras: 'vw',
    fonte: 'Caligrafia Gesto-Duto',
    autorOuReferencia: 'Roger Beatjesus',
    conceito: 'Gesto Inclinado & Velocidade',
    citacaoOuPensamento: '“A mão rápida imprime o calor do corpo na folha fria.”',
    autorCitacao: 'Gráfica Experimental',
    estiloVisual: 'caligrafica',
    descricao: 'Ducto caligráfico expressivo que revela a pressão e a velocidade da pena manual.'
  },
  {
    id: 12,
    letras: 'xyz',
    fonte: 'Matriz Experimental & Vazio',
    autorOuReferencia: 'Débora Gomes & Fabrício Gonçalves',
    conceito: 'Horizonte & Silêncio',
    citacaoOuPensamento: '“O último caractere devolve a palavra ao silêncio do mundo.”',
    autorCitacao: 'corpoDApalavra',
    estiloVisual: 'experimental',
    descricao: 'Formas limítrofes que encerram o alfabeto e preparam a matriz para o recomeço.'
  }
];
