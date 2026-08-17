export interface MaterialArqueologia {
  id: 'pedra' | 'argila' | 'pergaminho' | 'papel' | 'chumbo' | 'tela';
  nome: string;
  era: string;
  verboFisico: string;
  conceito: string;
  comportamentoInterativo: string;
  somAssociado: 'pedra' | 'entalhe' | 'papel' | 'chumbo';
  descricaoMorfologica: string;
}

export const DADOS_ARQUEOLOGIA_MATERIAIS: MaterialArqueologia[] = [
  {
    id: 'pedra',
    nome: 'Pedra Lapidar',
    era: 'Antiguidade Clássica',
    verboFisico: 'Resistir & Entalhar',
    conceito: 'A incisão mineral onde a letra nasce do golpe do cinzel contra a matéria dura.',
    comportamentoInterativo: 'Clique para desferir golpes de cinzel e lascar o traço monumental na pedra.',
    somAssociado: 'pedra',
    descricaoMorfologica: 'A serifa nasce como arremate do cinzel para evitar que a pedra rache nas bordas da haste.'
  },
  {
    id: 'argila',
    nome: 'Tablete de Argila',
    era: 'Mesopotâmia Cuneiforme',
    verboFisico: 'Deformar & Pressionar',
    conceito: 'A matéria úmida e maleável que cede à pressão da cunha de junco.',
    comportamentoInterativo: 'Pressione e arraste para deformar a superfície plástica criando ranhuras cuneiformes.',
    somAssociado: 'entalhe',
    descricaoMorfologica: 'A escrita cuneiforme é a primeira inscrição onde o volume físico do estilete dita a forma.'
  },
  {
    id: 'pergaminho',
    nome: 'Pele & Pergaminho',
    era: 'Idade Média',
    verboFisico: 'Desenrolar & Fluir',
    conceito: 'A pele animal esticada que permite o rolo contínuo e a pena caligráfica.',
    comportamentoInterativo: 'Role o pergaminho para esticar a superfície orgânica e revelar a tinta gótica.',
    somAssociado: 'papel',
    descricaoMorfologica: 'A ductilidade da pena de ganso gera o contraste dramático entre traços finos e grossos.'
  },
  {
    id: 'papel',
    nome: 'Papel & Trapo',
    era: 'Renascimento',
    verboFisico: 'Dobrar & Vincar',
    conceito: 'O suporte de fibras vegetais que possibilita a dobra, o códice e a portabilidade do saber.',
    comportamentoInterativo: 'Dobre e vinque a folha para criar cadernos e transformar plano em volume.',
    somAssociado: 'papel',
    descricaoMorfologica: 'A textura da fibra absorve a tinta sem escorrer, permitindo a precisão dos tipos móveis.'
  },
  {
    id: 'chumbo',
    nome: 'Chumbo & Matriz',
    era: 'Oficina de Gutenberg',
    verboFisico: 'Encaixar & Prensar',
    conceito: 'A liga metálica fundida que padroniza o tipo móvel em um sistema modular rígido.',
    comportamentoInterativo: 'Encaixe os tipos móveis na rama e aperte a cunha de aperto mecânico.',
    somAssociado: 'chumbo',
    descricaoMorfologica: 'Cada letra torna-se um prisma metálico com altura de prelo estritamente padronizada.'
  },
  {
    id: 'tela',
    nome: 'Luz & Tela Digital',
    era: 'Era Contemporânea',
    verboFisico: 'Mutar & Pixelar',
    conceito: 'A desmaterialização da letra em coordenadas de vetores, feixes de elétrons e pixels variáveis.',
    comportamentoInterativo: 'Altere o eixo de peso e a grade de pixels para metamorfosear a forma em tempo real.',
    somAssociado: 'entalhe',
    descricaoMorfologica: 'A letra deixa o suporte físico fixo e passa a existir como código fluido no espaço eletrônico.'
  }
];
