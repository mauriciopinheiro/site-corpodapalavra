import { CreditoItem } from '../tipos';

/**
 * Autoria Oficial da Concepção e Implementação do Projeto Virtual.
 */
export const AUTORIA_PROJETO_VIRTUAL = {
  funcao: 'Concepção e Implementação do Projeto Virtual',
  autor: 'Maurício Pinheiro',
  cargo: 'Educador de Tecnologias e Artes do Sesc Piracicaba',
  email: 'mauricio.pinheiro@sescsp.org.br',
  descricao: 'Transposição digital, interativa, tipográfica e generativa da exposição corpoDApalavra.'
};

/**
 * Ficha técnica oficial da exposição física corpoDApalavra.
 * Realizada no Espaço de Tecnologias e Artes do Sesc Santo André.
 */
export const DADOS_CREDITOS: CreditoItem[] = [
  {
    funcao: 'Concepção e Curadoria da Exposição Física',
    nomes: ['Gráfica Experimental', 'André Bonani', 'Roger Beatjesus']
  },
  {
    funcao: 'Painel oSERtipografia & Letras A–Z',
    nomes: ['Estúdio Agudo', 'Débora Gomes', 'Fabrício Gonçalves']
  },
  {
    funcao: 'Expografia e Arquitetura do Espaço',
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
    funcao: 'Ilustrações e Matrizes Gráficas',
    nomes: ['Roger Beatjesus', 'Estúdio Agudo']
  },
  {
    funcao: 'Realização Institucional',
    nomes: ['Espaço de Tecnologias e Artes (ETA)', 'Sesc Santo André']
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
