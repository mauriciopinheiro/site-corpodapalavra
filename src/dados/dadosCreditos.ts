import { CreditoItem } from '../tipos';

/**
 * Ficha técnica oficial da exposição corpoDApalavra.
 * Realizada no Espaço de Tecnologias e Artes do Sesc Santo André.
 */
export const DADOS_CREDITOS: CreditoItem[] = [
  {
    funcao: 'Concepção e Curadoria',
    nomes: ['Gráfica Experimental', 'André Bonani', 'Roger Beatjesus']
  },
  {
    funcao: 'Painel oSERtipografia',
    nomes: ['Estúdio Agudo', 'Débora Gomes', 'Fabrício Gonçalves']
  },
  {
    funcao: 'Expografia e Arquitetura',
    nomes: ['GamaH']
  },
  {
    funcao: 'Projeto Gráfico e Identidade Visual',
    nomes: ['Gráfica Experimental', 'Estúdio Agudo']
  },
  {
    funcao: 'Textos Críticos e Editoriais',
    nomes: ['André Bonani']
  },
  {
    funcao: 'Ilustrações e Matrizes',
    nomes: ['Roger Beatjesus', 'Estúdio Agudo']
  },
  {
    funcao: 'Realização Institucional',
    nomes: ['Espaço de Tecnologias e Artes', 'Sesc Santo André']
  }
];

export const DADOS_VISITA = {
  exposicao: 'corpoDApalavra',
  espaco: 'Espaço de Tecnologias e Artes (ETA)',
  instituicao: 'Sesc Santo André',
  endereco: 'Rua Tamarutaca, 302 - Vila Guiomar',
  cidade: 'Santo André - SP',
  cep: '09071-130',
  periodo: 'Terça a Domingo (Consulte programação local)',
  horarios: [
    { dias: 'Terça a Sexta', horas: '10h às 21h30' },
    { dias: 'Sábados, Domingos e Feriados', horas: '10h às 18h30' }
  ],
  entrada: 'Grátis / Acesso Livre',
  classificacao: 'Livre para todos os públicos',
  estacionamento: 'No local (pago para não credenciados)',
  mapaLink: 'https://maps.google.com/?q=Sesc+Santo+Andr%C3%A9'
};
