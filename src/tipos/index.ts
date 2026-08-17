/**
 * Tipos centrais do microsite da exposição corpoDApalavra
 */

export type CategoriaFoto = 
  | 'matéria' 
  | 'tipo' 
  | 'gesto' 
  | 'leitura' 
  | 'impressão' 
  | 'espaço';

export interface FotoExposicao {
  id: string;
  url: string;
  titulo: string;
  categoria: CategoriaFoto;
  descricao: string;
  orientacao: 'retrato' | 'paisagem';
  destaque?: boolean;
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

export interface PontoAnatomico {
  nome: string;
  descricao: string;
  x: number; // % horizontal
  y: number; // % vertical
  posicaoTexto: 'topo' | 'baixo' | 'esquerda' | 'direita';
}

export interface LetraAnatomia {
  caractere: string;
  nome: string;
  familia: string;
  pontos: PontoAnatomico[];
  comentario: string;
}

export interface CreditoItem {
  funcao: string;
  nomes: string[];
}
