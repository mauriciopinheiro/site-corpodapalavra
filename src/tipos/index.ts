/**
 * Tipos centrais do microsite da exposição corpoDApalavra
 * (100% tipográfico, diagramático e tátil, sem fotografias)
 */

export type CategoriaPlaca = 
  | 'arquitetura' 
  | 'morfologia' 
  | 'matriz' 
  | 'processo' 
  | 'métrica' 
  | 'espaço';

export interface PlacaGrafica {
  id: string;
  numero: string;
  titulo: string;
  categoria: CategoriaPlaca;
  subtitulo: string;
  descricao: string;
  tipoDiagrama: 'grade-36' | 'metricas' | 'dobra-livro' | 'rama-prelo' | 'escala-aurea' | 'fontes-brasil' | 'contraforma' | 'tinta-pressao' | 'madeira-veio' | 'costura' | 'registro' | 'silencio';
}

export type TipoModulo = 'letra' | 'conceito' | 'anatomia' | 'literatura' | 'processo';

export interface ModuloMadeiraData {
  id: number;
  letra: string;
  termo: string;
  categoria: string;
  descricao: string;
  detalheAnatomico?: string;
  autorOuFonte?: string;
  citacao?: string;
  linha: number; // 1, 2 ou 3
  coluna: number; // 1 a 12
  estiloFonte?: 'anton' | 'serifa' | 'corpo' | 'mono';
  destaqueCor?: 'padrao' | 'vermelho' | 'azul' | 'amarelo';
}

export interface TermoGlossario {
  termo: string;
  categoria: 'anatomia' | 'composicao' | 'tecnica';
  definicao: string;
  letraExemplo: string;
  detalheVisual: string;
}

export interface CreditoItem {
  funcao: string;
  nomes: string[];
}
