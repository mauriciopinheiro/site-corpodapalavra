export interface GlifoIndividual {
  glifo: string;
  estiloVisual: string;
  nomeFonte: string;
  designer: string;
  anoCriacao: string;
  categoriaEstilo: string;
  detalheAnatomico: string;
}

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
    fonte: 'Sumé (Tony de Marco) / Bandeira (Marconi Lima)',
    autorOuReferencia: 'Tony de Marco & Marconi Lima',
    conceito: 'Abertura & Fundação Modular',
    citacaoOuPensamento: '“A primeira letra é um corte no vazio da página.”',
    autorCitacao: 'André Bonani',
    estiloVisual: 'sumo',
    descricao: 'Letra a (Sumé, 1989 - primeira digital brasileira) e letra b (Bandeira, 2012 - tipo display de ritmo robusto).'
  },
  {
    id: 2,
    letras: 'cd',
    fonte: 'Cariri (GamaH) / Discordia (Álvaro Franca)',
    autorOuReferencia: 'Antônio Gamah & Álvaro Franca',
    conceito: 'Curvatura & Contraforma Rítmica',
    citacaoOuPensamento: '“No interior da curva habita o silêncio da voz.”',
    autorCitacao: 'Fabrício Gonçalves',
    estiloVisual: 'discordia',
    descricao: 'Letra c (Cariri - proporção aberta da madeira) e letra d (Discordia - serifas em cunha inspiradas em gravura).'
  },
  {
    id: 3,
    letras: 'ef',
    fonte: 'Estúdio Agudo Display / Firula (Rodrigo Saiani)',
    autorOuReferencia: 'Débora Gomes & Rodrigo Saiani (Plau)',
    conceito: 'Orgânico, Terminal & Gota',
    citacaoOuPensamento: '“A letra cresce como galho que busca a luz da página.”',
    autorCitacao: 'Exposição corpoDApalavra',
    estiloVisual: 'seiva',
    descricao: 'Letra e (Estúdio Agudo) e letra f (Firula - gota terminal orgânica inspirada na caligrafia viva).'
  },
  {
    id: 4,
    letras: 'gh',
    fonte: 'Gesto Fino (Roger Beatjesus) / Heu (Daniel Sabino)',
    autorOuReferencia: 'Roger Beatjesus & Daniel Sabino (Blackletra)',
    conceito: 'Dois Andares & Matriz Gótica',
    citacaoOuPensamento: '“O g de dois andares é um pêndulo de equilíbrio ótico.”',
    autorCitacao: 'Oficina Tipográfica',
    estiloVisual: 'humanista',
    descricao: 'Letra g (Gesto Fino) e letra h (Heu Display - releitura contemporânea de matrizes clássicas e góticas).'
  },
  {
    id: 5,
    letras: 'ij',
    fonte: 'Amora A (Leopoldo Leal) / Jornal Moderno',
    autorOuReferencia: 'Leopoldo Leal & Fabrício Gonçalves',
    conceito: 'Ponto de Pausa & Métrica',
    citacaoOuPensamento: '“A precisão do encaixe sustenta a leveza do conjunto.”',
    autorCitacao: 'GamaH',
    estiloVisual: 'mono',
    descricao: 'Letra i (Amora A - pesquisa experimental) e letra j (Jornal Moderno - terminal em gancho afiado).'
  },
  {
    id: 6,
    letras: 'kl',
    fonte: 'Klaxon Display / Prelo Sans (Gráfica Experimental)',
    autorOuReferencia: 'André Bonani & Roger Beatjesus',
    conceito: 'Vanguarda & Peso Maciço',
    citacaoOuPensamento: '“A palavra pesa quanto pesa o chumbo no prelo.”',
    autorCitacao: 'Carlos Drummond de Andrade',
    estiloVisual: 'brutalista',
    descricao: 'Letra k (Klaxon 1922) e letra l (Prelo Sans - haste vertical ultrapesada de impacto no papel).'
  },
  {
    id: 7,
    letras: 'mno',
    fonte: 'Capitolina (Christopher) / Melindrosa (Flavia Zimbardi) / Nativa',
    autorOuReferencia: 'Christopher Hammerschmidt & Flavia Zimbardi',
    conceito: 'Modulação, Curva & Alto Contraste',
    citacaoOuPensamento: '“Três maneiras distintas de produzir linguagem em um único módulo.”',
    autorCitacao: 'Edimilson de Almeida Pereira',
    estiloVisual: 'serifa',
    descricao: 'Letra m (Capitolina), letra n (Melindrosa - Art Déco) e letra o (Nativa Display - eixo elíptico).'
  },
  {
    id: 8,
    letras: 'pq',
    fonte: 'Krenak Sans (Débora Gomes) / Veredas Script',
    autorOuReferencia: 'Débora Gomes & Roger Beatjesus',
    conceito: 'Silêncio & Cauda Linear',
    citacaoOuPensamento: '“Nossas narrativas são matéria viva que sustenta o mundo.”',
    autorCitacao: 'Ailton Krenak',
    estiloVisual: 'caligrafica',
    descricao: 'Letra p (Krenak Sans - laço amplo) e letra q (Veredas Script - cauda estendida em vetor horizontal).'
  },
  {
    id: 9,
    letras: 'rs',
    fonte: 'Xilo Brutal (André Bonani) / Monolito (Tony de Marco)',
    autorOuReferencia: 'André Bonani & Tony de Marco',
    conceito: 'Escultura & Matriz de Linóleo',
    citacaoOuPensamento: '“A letra deixa de ser apenas texto e passa a ser escultura.”',
    autorCitacao: 'Curadoria ETA',
    estiloVisual: 'experimental',
    descricao: 'Letra r (Xilo Brutal - corte de linóleo) e letra s (Monolito Extra - espinha dorsal expandida).'
  },
  {
    id: 10,
    letras: 'tu',
    fonte: 'Cícero Italic (Jean Rosa) / Cariri Lapidar (GamaH)',
    autorOuReferencia: 'Jean Rosa & Antônio Gamah',
    conceito: 'Dinamismo Cursivo & Lapidar Romano',
    citacaoOuPensamento: '“A permanência da pedra versus a fluidez da escrita.”',
    autorCitacao: 'Prisca Agustoni',
    estiloVisual: 'bala',
    descricao: 'Letra t (Cícero Italic) e letra U (Cariri Lapidar - maiúscula monumental de cinzel).'
  },
  {
    id: 11,
    letras: 'vw',
    fonte: 'Borges Monumental / Gesto Fino',
    autorOuReferencia: 'Estúdio Agudo & Roger Beatjesus',
    conceito: 'Vértice Puro & Fio Caligráfico',
    citacaoOuPensamento: '“O livro é uma escultura do saber em movimento.”',
    autorCitacao: 'Jorge Luis Borges',
    estiloVisual: 'adriane',
    descricao: 'Letra V (Borges Monumental - proporções clássicas) e letra w (Gesto Fino - entrelaçamento leve).'
  },
  {
    id: 12,
    letras: 'xyz',
    fonte: 'Grid Proporção / Bringhurst Mono / Terminal Z',
    autorOuReferencia: 'Débora Gomes, Fabrício Gonçalves & André Bonani',
    conceito: 'Encerramento do Alfabeto & Proporção',
    citacaoOuPensamento: '“De A a Z, o pensamento ganhou corpo, ritmo e espaço.”',
    autorCitacao: 'corpoDApalavra',
    estiloVisual: 'condensada',
    descricao: 'Letra x (Grid Proporção), letra y (Bringhurst Mono) e letra z (Terminal Z - encerramento do alfabeto).'
  }
];
