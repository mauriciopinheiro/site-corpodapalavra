export interface ComportamentoAutor {
  id: number;
  leiTipografica: string;
  efeitoInterativo: string;
  somAssociado: 'papel' | 'chumbo' | 'pedra' | 'madeira' | 'entalhe';
  tagVisual: string;
  descricaoFisica: string;
}

/**
 * As 12 Leis Tipográficas Vivas da Literatura na Grande Parede do ETA Sesc.
 */
export const DADOS_COMPORTAMENTOS_LITERATURA: Record<number, ComportamentoAutor> = {
  1: {
    id: 1,
    leiTipografica: 'Monumentalidade & Espaço Público',
    efeitoInterativo: 'A letra se ergue como estátua arquitetônica com alto contraste de prelo.',
    somAssociado: 'chumbo',
    tagVisual: 'ESTÁTUA PÚBLICA',
    descricaoFisica: 'Edimilson de Almeida Pereira / Capitolina (Christopher Hammerschmidt)'
  },
  2: {
    id: 2,
    leiTipografica: 'A Voz da Letra & Modulação de Timbre',
    efeitoInterativo: 'A mancha textual oscila como onda sonora e timbre vocal ao toque do cursor.',
    somAssociado: 'papel',
    tagVisual: 'TIMBRE VOCAL',
    descricaoFisica: 'Amara Moira / Melindrosa (Flavia Zimbardi)'
  },
  3: {
    id: 3,
    leiTipografica: 'Escala Espacial: Mundo → Palavra',
    efeitoInterativo: 'A palavra MUNDO expande e acolhe a PALAVRA em proporção dinâmica.',
    somAssociado: 'papel',
    tagVisual: 'MUNDO → PALAVRA',
    descricaoFisica: 'Paulo Freire / Adriane Text (Marconi Lima)'
  },
  4: {
    id: 4,
    leiTipografica: 'Confluência & Circularidade Orgânica',
    efeitoInterativo: 'O texto recusa o alinhamento linear reto e flui em arco de roda viva.',
    somAssociado: 'madeira',
    tagVisual: 'RODA CONFLUENTE',
    descricaoFisica: 'Nego Bispo / Discordia (Álvaro Franca)'
  },
  5: {
    id: 5,
    leiTipografica: 'Suspensão do Céu & Organismo Vivo',
    efeitoInterativo: 'O texto e o espaço fundem-se em respiração contínua que flutua na página.',
    somAssociado: 'madeira',
    tagVisual: 'SUSPENDER O CÉU',
    descricaoFisica: 'Ailton Krenak / Baiz New (Márcio Freitas)'
  },
  6: {
    id: 6,
    leiTipografica: 'Gravidade do Chumbo',
    efeitoInterativo: 'Cada palavra tem massa física calculada e afunda com densidade mineral.',
    somAssociado: 'chumbo',
    tagVisual: 'PESO DO CHUMBO',
    descricaoFisica: 'Carlos Drummond de Andrade / Drummond (Jean Rosa)'
  },
  7: {
    id: 7,
    leiTipografica: 'Invenção de Glifos & Asas Abertas',
    efeitoInterativo: 'A folha abre-se como ave e transmuta caracteres em novas morfologias botânicas.',
    somAssociado: 'papel',
    tagVisual: 'INVENTAR LÍNGUA',
    descricaoFisica: 'Ana Martins Marques / Seiva (Ana Laydner & Henrique)'
  },
  8: {
    id: 8,
    leiTipografica: 'Fibra Crua & Papel de Embrulho',
    efeitoInterativo: 'A mancha crava-se com aspereza visceral no papel rústico contra o esquecimento.',
    somAssociado: 'entalhe',
    tagVisual: 'PAPEL CRU',
    descricaoFisica: 'Carolina Maria de Jesus / Labor (Leopoldo Leal)'
  },
  9: {
    id: 9,
    leiTipografica: 'Instante Puro & Pulsação Invisível',
    efeitoInterativo: 'As palavras pulsam e cintilam no limiar sutil entre o visível e o silêncio.',
    somAssociado: 'papel',
    tagVisual: 'INSTANTE-JÁ',
    descricaoFisica: 'Clarice Lispector / Fuula (Rodrigo Saiani)'
  },
  10: {
    id: 10,
    leiTipografica: 'Densidade Mineral & Geometria da Pedra',
    efeitoInterativo: 'A mancha surge dura, sem ornamento, lapidada por cinzel em rocha pura.',
    somAssociado: 'pedra',
    tagVisual: 'DENSO MINERAL',
    descricaoFisica: 'João Cabral de Melo Neto / SLAd (Tony de Marco)'
  },
  11: {
    id: 11,
    leiTipografica: 'Tensão dos Dois Sistemas Tipográficos',
    efeitoInterativo: 'A rotativa acelerada da imprensa colide com os tipos móveis de madeira.',
    somAssociado: 'chumbo',
    tagVisual: 'MÁQUINAS EM COMBATE',
    descricaoFisica: 'Lima Barreto / BraziLERO (Crystian Cruz)'
  },
  12: {
    id: 12,
    leiTipografica: 'Corte Modernista & Síntese Antropofágica',
    efeitoInterativo: 'O texto quebra em blocos de corte rápido e síntese rítmica de vanguarda.',
    somAssociado: 'chumbo',
    tagVisual: 'CORTE 1924',
    descricaoFisica: 'Oswald de Andrade / Heu (Daniel Sabino)'
  }
};
