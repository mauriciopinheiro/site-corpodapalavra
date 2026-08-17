import { ModuloMadeiraData } from '../tipos';

export const MODULOS_LINHAS_1_E_2: ModuloMadeiraData[] = [
  // LINHA 1 (Módulos 1 a 12)
  {
    id: 1, linha: 1, coluna: 1, letra: 'A', termo: 'ápice', categoria: 'Anatomia',
    descricao: 'Encontro superior de duas hastes em ângulo.',
    detalheAnatomico: 'Ponto culminante da letra capitular.',
    autorOuFonte: 'Tipografia Paulistana / C. Rocha', estiloFonte: 'serifa'
  },
  {
    id: 2, linha: 1, coluna: 2, letra: 'b', termo: 'haste', categoria: 'Estrutura',
    descricao: 'Traço vertical principal que sustenta o caractere.',
    detalheAnatomico: 'Coluna estrutural que define o ritmo da leitura.',
    autorOuFonte: 'Estúdio Agudo', estiloFonte: 'anton'
  },
  {
    id: 3, linha: 1, coluna: 3, letra: 'C', termo: 'contraforma', categoria: 'Espaço Negativo',
    descricao: 'O espaço branco contido no interior ou entre os traços.',
    detalheAnatomico: 'O silêncio que dá forma ao som da letra.',
    citacao: '“O silêncio também é matéria da voz.”',
    autorOuFonte: 'Clarice Lispector', estiloFonte: 'serifa'
  },
  {
    id: 4, linha: 1, coluna: 4, letra: 'd', termo: 'ascendente', categoria: 'Métrica',
    descricao: 'Porção da haste que ultrapassa a altura de x.',
    detalheAnatomico: 'Projeção vertical que busca o ar da página.',
    autorOuFonte: 'Gráfica Experimental', estiloFonte: 'corpo'
  },
  {
    id: 5, linha: 1, coluna: 5, letra: 'E', termo: 'braço', categoria: 'Anatomia',
    descricao: 'Traço horizontal livre em uma ou ambas as extremidades.',
    detalheAnatomico: 'Extensão que equilibra a solidez da haste.',
    autorOuFonte: 'Fonte Brasil / Tony de Marco', estiloFonte: 'mono'
  },
  {
    id: 6, linha: 1, coluna: 6, letra: 'f', termo: 'terminal', categoria: 'Gesto',
    descricao: 'Extremidade de um traço que não termina em serifa.',
    detalheAnatomico: 'Finalização gráfica derivada do corte da pena.',
    autorOuFonte: 'Estúdio Agudo', estiloFonte: 'serifa', destaqueCor: 'vermelho'
  },
  {
    id: 7, linha: 1, coluna: 7, letra: 'G', termo: 'espora', categoria: 'Detalhe',
    descricao: 'Pequena projeção no encontro de traços curvos e retos.',
    detalheAnatomico: 'Ancoragem visual que firma a base da curva.',
    autorOuFonte: 'Gráfica Experimental', estiloFonte: 'anton'
  },
  {
    id: 8, linha: 1, coluna: 8, letra: 'h', termo: 'ombro', categoria: 'Curva',
    descricao: 'Arco descendente que parte da haste vertical.',
    detalheAnatomico: 'Transição suave da linha reta para o arco orgânico.',
    autorOuFonte: 'C. Rocha / Oficina Tipográfica', estiloFonte: 'serifa'
  },
  {
    id: 9, linha: 1, coluna: 9, letra: 'I', termo: 'peso', categoria: 'Variável',
    descricao: 'Espessura relativa dos traços que compõem o caractere.',
    detalheAnatomico: 'Do hairline mais etéreo ao ultra black maciço.',
    citacao: '“A palavra pesa quanto pesa o mundo.”',
    autorOuFonte: 'Carlos Drummond de Andrade', estiloFonte: 'anton'
  },
  {
    id: 10, linha: 1, coluna: 10, letra: 'j', termo: 'descendente', categoria: 'Métrica',
    descricao: 'Extensão da letra que mergulha abaixo da linha de base.',
    detalheAnatomico: 'Raiz que ancora o ritmo da linha de texto.',
    autorOuFonte: 'Estúdio Agudo', estiloFonte: 'corpo'
  },
  {
    id: 11, linha: 1, coluna: 11, letra: 'K', termo: 'perna', categoria: 'Anatomia',
    descricao: 'Traço inclinado descendente que apoia o caractere.',
    detalheAnatomico: 'Ponto de equilíbrio dinâmico e impulso diagonal.',
    autorOuFonte: 'Tony de Marco', estiloFonte: 'mono'
  },
  {
    id: 12, linha: 1, coluna: 12, letra: 'l', termo: 'altura-x', categoria: 'Métrica',
    descricao: 'A altura das letras minúsculas sem hastes ou descendentes.',
    detalheAnatomico: 'O horizonte fundamental da legibilidade.',
    autorOuFonte: 'Gráfica Experimental', estiloFonte: 'serifa', destaqueCor: 'azul'
  },

  // LINHA 2 (Módulos 13 a 24)
  {
    id: 13, linha: 2, coluna: 1, letra: 'M', termo: 'vértice', categoria: 'Anatomia',
    descricao: 'Ponto de junção inferior entre duas hastes inclinadas.',
    detalheAnatomico: 'Centro de gravidade na convergência dos traços.',
    autorOuFonte: 'Estúdio Agudo', estiloFonte: 'anton'
  },
  {
    id: 14, linha: 2, coluna: 2, letra: 'n', termo: 'bojo', categoria: 'Curva',
    descricao: 'Traço curvo que encerra ou define uma contraforma.',
    detalheAnatomico: 'A cavidade respiratória do caractere.',
    citacao: '“Escrever é desenhar o próprio sopro.”',
    autorOuFonte: 'Guimarães Rosa', estiloFonte: 'serifa'
  },
  {
    id: 15, linha: 2, coluna: 3, letra: 'O', termo: 'eixo', categoria: 'Ângulo',
    descricao: 'Inclinação da elipse imaginária do traço curvo.',
    detalheAnatomico: 'O ângulo de inclinação herdado da mão caligráfica.',
    autorOuFonte: 'Oficina Tipográfica', estiloFonte: 'serifa'
  },
  {
    id: 16, linha: 2, coluna: 4, letra: 'p', termo: 'serifa', categoria: 'Acabamento',
    descricao: 'Pequeno traço transversal no remate das hastes.',
    detalheAnatomico: 'Guia horizontal contínuo para o fluxo ocular.',
    autorOuFonte: 'Gráfica Experimental', estiloFonte: 'serifa', destaqueCor: 'amarelo'
  },
  {
    id: 17, linha: 2, coluna: 5, letra: 'Q', termo: 'cauda', categoria: 'Gesto',
    descricao: 'Traço expressivo inferior que se estende para fora.',
    detalheAnatomico: 'O gesto livre que rompe a fronteira do bloco.',
    citacao: '“A linha rompe o silêncio da madeira.”',
    autorOuFonte: 'Oswald de Andrade', estiloFonte: 'serifa'
  },
  {
    id: 18, linha: 2, coluna: 6, letra: 'r', termo: 'orelha', categoria: 'Detalhe',
    descricao: 'Pequena projeção no topo superior direito da letra.',
    detalheAnatomico: 'Sinal distintivo de reconhecimento rápido.',
    autorOuFonte: 'Estúdio Agudo', estiloFonte: 'corpo'
  },
  {
    id: 19, linha: 2, coluna: 7, letra: 'S', termo: 'espinha', categoria: 'Curva Central',
    descricao: 'O traço curvo principal que atravessa o centro da letra.',
    detalheAnatomico: 'Tensão dupla em forma de serpente que sustenta o S.',
    autorOuFonte: 'Tony de Marco', estiloFonte: 'anton'
  },
  {
    id: 20, linha: 2, coluna: 8, letra: 't', termo: 'barra', categoria: 'Cruzamento',
    descricao: 'Traço horizontal que cruza a haste central.',
    detalheAnatomico: 'Linha divisória de proporção e equilíbrio.',
    autorOuFonte: 'Gráfica Experimental', estiloFonte: 'mono'
  },
  {
    id: 21, linha: 2, coluna: 9, letra: 'U', termo: 'entrelinha', categoria: 'Composição',
    descricao: 'Distância vertical entre duas linhas de base consecutivas.',
    detalheAnatomico: 'O fôlego necessário para que a página respire.',
    autorOuFonte: 'Claudio Rocha', estiloFonte: 'serifa'
  },
  {
    id: 22, linha: 2, coluna: 10, letra: 'v', termo: 'kerning', categoria: 'Ajuste Óptico',
    descricao: 'Compensação de espaço entre pares específicos de letras.',
    detalheAnatomico: 'Harmonia visual sobre a rigidez mecânica.',
    autorOuFonte: 'Estúdio Agudo', estiloFonte: 'corpo', destaqueCor: 'vermelho'
  },
  {
    id: 23, linha: 2, coluna: 11, letra: 'W', termo: 'tracking', categoria: 'Espaçamento',
    descricao: 'Espaçamento global uniforme aplicado a um conjunto de tipos.',
    detalheAnatomico: 'A densidade e o ritmo da mancha gráfica na página.',
    autorOuFonte: 'Gráfica Experimental', estiloFonte: 'anton'
  },
  {
    id: 24, linha: 2, coluna: 12, letra: 'x', termo: 'cruzamento', categoria: 'Geometria',
    descricao: 'Ponto onde duas diagonais se interceptam no centro.',
    detalheAnatomico: 'Interseção de forças plásticas opostas.',
    autorOuFonte: 'Estúdio Agudo', estiloFonte: 'mono'
  }
];
