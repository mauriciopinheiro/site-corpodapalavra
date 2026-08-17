import { ModuloMadeiraData } from '../tipos';
import { MODULOS_LINHAS_1_E_2 } from './dadosModulosLinhas1e2';
import { MODULOS_LINHA_3 } from './dadosModulosLinha3';

/**
 * 36 Módulos do painel oSERtipografia da exposição física.
 * Distribuídos em 3 linhas x 12 colunas, explorando fontes brasileiras,
 * anatomia da letra, excertos literários e o vazio do plano.
 */
export const DADOS_MODULOS: ModuloMadeiraData[] = [
  ...MODULOS_LINHAS_1_E_2,
  ...MODULOS_LINHA_3
];
