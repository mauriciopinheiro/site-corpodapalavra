export interface ComportamentoAutor {
  id: number;
  nomeEfeito: string;
  estiloMancha: string;
  interacaoFisica: string;
  somAssociado: 'papel' | 'chumbo' | 'pedra' | 'madeira' | 'entalhe';
  tagVisual: string;
}

export const DADOS_COMPORTAMENTOS_LITERATURA: Record<number, ComportamentoAutor> = {
  1: {
    id: 1,
    nomeEfeito: 'Fragmentação Pedagógica',
    estiloMancha: 'tracking-wider font-mono text-xl sm:text-2xl',
    interacaoFisica: 'A palavra decompõe-se em sílabas que se unem sob a leitura.',
    somAssociado: 'papel',
    tagVisual: 'CONSCIENTIZAÇÃO'
  },
  2: {
    id: 2,
    nomeEfeito: 'Espelhamento & Duplo',
    estiloMancha: 'font-serifa italic scale-105 border-x-2 border-tinta px-4',
    interacaoFisica: 'O texto reflete uma sombra invertida no verso da folha.',
    somAssociado: 'papel',
    tagVisual: 'SIMETRIA POÉTICA'
  },
  3: {
    id: 3,
    nomeEfeito: 'Corte do Silêncio Mudo',
    estiloMancha: 'font-corpo tracking-widest uppercase text-base sm:text-lg',
    interacaoFisica: 'Pausas longas e cesuras tipográficas no fluxo visual.',
    somAssociado: 'entalhe',
    tagVisual: 'CESURA'
  },
  4: {
    id: 4,
    nomeEfeito: 'Linotipo de Combate',
    estiloMancha: 'font-mono text-sm leading-tight bg-tinta text-papel p-4',
    interacaoFisica: 'Mancha densa de coluna de jornal impresso sob urgência.',
    somAssociado: 'chumbo',
    tagVisual: 'PRELO DE GUERRA'
  },
  5: {
    id: 5,
    nomeEfeito: 'Ondulação da Terra & Rio',
    estiloMancha: 'font-serifa text-2xl sm:text-3xl text-tinta font-normal tracking-wide',
    interacaoFisica: 'As linhas expandem-se como as margens de um rio ancestral.',
    somAssociado: 'madeira',
    tagVisual: 'CONFLUÊNCIA CÓSMICA'
  },
  6: {
    id: 6,
    nomeEfeito: 'Circularidade Confluente',
    estiloMancha: 'font-anton uppercase text-2xl sm:text-3xl text-tinta tracking-tight',
    interacaoFisica: 'A leitura organiza-se em roda viva, sem hierarquia linear.',
    somAssociado: 'madeira',
    tagVisual: 'COSMOLOGIA QUILOMBOLA'
  },
  7: {
    id: 7,
    nomeEfeito: 'Postura Monumental & Libertação',
    estiloMancha: 'font-serifa text-2xl sm:text-3xl font-bold border-l-4 border-acento-vermelho pl-4',
    interacaoFisica: 'A voz firme de 1859 crava a verdade contra a opressão.',
    somAssociado: 'chumbo',
    tagVisual: 'MATRIZ PIONEIRA'
  },
  8: {
    id: 8,
    nomeEfeito: 'Travessia de Sertão',
    estiloMancha: 'font-serifa italic text-xl sm:text-2xl tracking-tight leading-relaxed',
    interacaoFisica: 'O texto serpenteia sem pontuação tradicional pelo horizonte.',
    somAssociado: 'papel',
    tagVisual: 'NONADA'
  },
  9: {
    id: 9,
    nomeEfeito: 'Instante-Já / Pulso Vital',
    estiloMancha: 'font-corpo text-3xl sm:text-4xl font-black text-tinta',
    interacaoFisica: 'A mancha vibra e pulsa na velocidade do sangue da escrita.',
    somAssociado: 'entalhe',
    tagVisual: 'MATÉRIA VIVA'
  },
  10: {
    id: 10,
    nomeEfeito: 'Lapidação Mineral',
    estiloMancha: 'font-anton uppercase text-3xl sm:text-4xl tracking-tighter bg-madeira p-4',
    interacaoFisica: 'A palavra recusa o ornamento e surge dura como pedra seca.',
    somAssociado: 'pedra',
    tagVisual: 'GEOMETRIA SECA'
  },
  11: {
    id: 11,
    nomeEfeito: 'Manuscrito de Despejo',
    estiloMancha: 'font-corpo text-lg sm:text-xl font-bold uppercase underline decoration-2',
    interacaoFisica: 'A aspereza do papel recolhido na favela e a força da realidade.',
    somAssociado: 'papel',
    tagVisual: 'TESTEMUNHO CRU'
  },
  12: {
    id: 12,
    nomeEfeito: 'Sincopado Pau-Brasil',
    estiloMancha: 'font-anton uppercase text-4xl sm:text-5xl text-acento-vermelho -rotate-1',
    interacaoFisica: 'Versos rápidos e cortantes em ruptura modernista de prelo.',
    somAssociado: 'chumbo',
    tagVisual: 'MANIFESTO 1924'
  }
};
