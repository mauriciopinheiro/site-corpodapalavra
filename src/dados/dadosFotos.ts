import { FotoExposicao } from '../tipos';
import { FOTOS_PARTE_1 } from './dadosFotosParte1';
import { FOTOS_PARTE_2 } from './dadosFotosParte2';

/**
 * Catálogo documental completo das 32 fotografias reais da exposição corpoDApalavra.
 */
export const FOTOS_EXPOSICAO: FotoExposicao[] = [
  ...FOTOS_PARTE_1,
  ...FOTOS_PARTE_2
];
