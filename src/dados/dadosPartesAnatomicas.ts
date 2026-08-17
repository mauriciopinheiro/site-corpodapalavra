export type ParteAnatomica = 'tudo' | 'haste' | 'bojo' | 'serifa' | 'armadilha' | 'contraforma';

export interface InfoParteAnatomica {
  titulo: string;
  desc: string;
  cota: string;
  funcao: string;
}

export const DADOS_PARTES_ANATOMICAS: Record<ParteAnatomica, InfoParteAnatomica> = {
  tudo: {
    titulo: 'Glifo Integral (Capitular P)',
    desc: 'Composição monumental com haste vertical de sustentação, bojo superior fechado e serifa de ancoragem.',
    cota: '100% do Corpo Tipográfico',
    funcao: 'Visão completa da arquitetura do caractere.'
  },
  haste: {
    titulo: 'Haste Vertical Principal',
    desc: 'Coluna estruturante de sustentação que resiste à gravidade da página e ancora o alinhamento da linha de base.',
    cota: 'Espessura: 28pt • Ângulo: 90°',
    funcao: 'Eixo cardinal de gravidade e leitura.'
  },
  bojo: {
    titulo: 'Bojo Curvo Superior',
    desc: 'O arco contínuo que abraça o ar interno da página, criando a cavidade respiratória do P.',
    cota: 'Raio de Curvatura: 42mm • Modulação 3:1',
    funcao: 'Gera a tensão orgânica entre linha reta e curva.'
  },
  serifa: {
    titulo: 'Serifa Bilateral de Base',
    desc: 'Prolongamento horizontal que ancora o pé da haste sobre a baseline, facilitando a continuidade da leitura.',
    cota: 'Largura: 36pt • Suporte de Cinzel',
    funcao: 'Guia horizontal contínuo para o fluxo ocular.'
  },
  armadilha: {
    titulo: 'Armadilha de Tinta (Ink Trap)',
    desc: 'Abertura chanfrada no vértice interno que evita o acúmulo excessivo de tinta líquida durante a prensagem em papel cru.',
    cota: 'Corte Interno: 45° • Compensação Ótica',
    funcao: 'Engenharia gráfica pura para suportes absorventes.'
  },
  contraforma: {
    titulo: 'Contraforma (Espaço Negativo)',
    desc: 'O vazio absoluto esculpido no interior do bojo. Sem esse silêncio branco, a forma preta não existiria.',
    cota: 'Área Vazia: 38% do Quadrante',
    funcao: 'O ar e o silêncio que dão voz ao som da letra.'
  }
};
