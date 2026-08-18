import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { useExposicao } from '../../contexto/ContextoExposicao';

interface TextoPainel {
  id: string;
  titulo: string;
  subtitulo: string;
  autorRef: string;
  trechoDestaque: string;
  textoIntegral: string;
}

const TEXTOS_OSERLIVRO: TextoPainel[] = [
  {
    id: 'materia-sinais',
    titulo: '1. A Carne Pulsante dos Sinais',
    subtitulo: 'Pedra, Barro & Pigmento',
    autorRef: 'André Bonani • Painel oSERlivro',
    trechoDestaque: 'A qual matéria confiar a carne pulsante dos sinais que produzimos?',
    textoIntegral: 'A qual matéria confiar a carne pulsante dos sinais que produzimos? Foram pedra e barro os primeiros suportes designados a receber nossas cismas. Ora por extração de material — entalhe — que, removendo, designa o signo. Ora, também, por depósito de material — pigmento — que, aplicado, gera o signo. Assim pôde vir à tona, em rochas gravadas ou tábuas de argila, extensa matéria visual e simbólica: cenas de caça, mandamentos morais, registros contábeis, itinerários sagrados.'
  },
  {
    id: 'escultura-dobra',
    titulo: '2. A Escultura da Dobra',
    subtitulo: 'Do Manuscrito ao Códice',
    autorRef: 'André Bonani • Painel oSERlivro',
    trechoDestaque: 'O livro é uma escultura do saber em movimento.',
    textoIntegral: 'Armação sequencial que se abre como a flor; máquina preguiçosa que demanda nosso corpo e nosso olhar para funcionar: o livro é uma escultura do saber em movimento. Já foi manuscrito por hábeis copistas com tinteiro e bico de pena; já foi impresso letra a letra com tipos móveis, peças de chumbo ou madeira entintadas por rolos e submetidas à pressão de um prelo ou colher. Carregou figuras gravadas a buril ou estampas impressas em serigrafia. No entanto, seu fundamento se encontra na simples possibilidade de uma dobra. Viabilizada pela encadernação central, ela constitui a espinha dorsal deste objeto.'
  },
  {
    id: 'vazio-pagina',
    titulo: '3. O Vazio da Página',
    subtitulo: 'Plataforma de Inquietações',
    autorRef: 'Robert Bringhurst / André Bonani',
    trechoDestaque: 'Cada página é um pedaço de espaço, mas também uma proporção visível e tangível.',
    textoIntegral: 'Sendo uma plataforma de vazios que convida ao registro escrito, é por meio do livro que se torna palpável o tempo das inquietações. Eis a sua página inicial que se abre: pedaço de deserto, silêncio. Como e onde preenchê-la? Signos despontam em seu vazio; as páginas correm, é preciso coordená-las para que deem forma ao rio das palavras. Como pontua o tipógrafo Robert Bringhurst, cada página "é um pedaço de espaço, mas também uma proporção visível e tangível". Assim surge um projeto gráfico. No vazio da página, a operação de dispor espacialmente as informações adquire potência significativa justamente por conceder corpo a abstrações.'
  },
  {
    id: 'ato-diagramar',
    titulo: '4. O Ato de Diagramar',
    subtitulo: 'Ritmo, Intervalo & Tensão',
    autorRef: 'André Bonani • Painel oSERlivro',
    trechoDestaque: 'No grande oceano das páginas, a navegação é conduzida pelo ritmo.',
    textoIntegral: 'Ao se fundamentar no mandamento de desenhar a informação, de associar ideias a formas, o ato de diagramar assegura solidez a blocos informativos; confere gradações e (des)harmonia a conjuntos variados. Há sempre a necessidade de se atar uma coisa a outra, de se alinhar espaços cheios e vazios; diagramar lida com a criação de intervalos entre as partes e o todo: contrastes e complementos dos elementos da página — tipografia, imagem, cor, mancha textual, qualidade física do papel. É preciso fazer fluir o olhar de quem lê, ou interrompê-lo no momento oportuno.'
  },
  {
    id: 'extensao-memoria',
    titulo: '5. O Instrumento Assombroso',
    subtitulo: 'Extensão da Memória',
    autorRef: 'Jorge Luis Borges (1979) / André Bonani',
    trechoDestaque: 'O livro constitui uma extensão da memória e da imaginação.',
    textoIntegral: 'No entanto, é no livro que queremos chegar: na fibra do papel processado, impresso e encadernado, compondo um bloco espaço-temporal: invólucro do saber. Certa vez, o escritor Jorge Luis Borges definiu o livro como um instrumento assombroso. Numa conferência intitulada "O Livro", de 1979, afirma que enquanto outras invenções humanas, como a espada e o telescópio, constituem extensões do corpo, o livro constitui uma extensão da memória e da imaginação, sendo esta a sua consequente fonte de assombro. Trata-se de uma invenção que atravessou séculos mantendo intacto seu conceito basilar.'
  }
];

export const TextosCuradoriaisLivro: React.FC = () => {
  const [ativoId, setAtivoId] = useState<string>(TEXTOS_OSERLIVRO[0].id);
  const { tocarSom } = useExposicao();

  const textoAtual = TEXTOS_OSERLIVRO.find(t => t.id === ativoId) || TEXTOS_OSERLIVRO[0];

  const selecionar = (id: string) => {
    setAtivoId(id);
    tocarSom('papel');
  };

  return (
    <div className="bg-papel border-2 border-tinta shadow-carimbo-lg p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b-2 border-tinta pb-3">
        <span className="font-mono text-xs uppercase font-bold text-tinta flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-acento-vermelho" /> Textos Integrais dos Painéis Físicos • oSERlivro
        </span>
        <span className="font-mono text-[10px] text-tinta-cinza uppercase">5 Painéis de Parede</span>
      </div>

      {/* Abas dos 5 Painéis da Exposição Física */}
      <div className="flex flex-wrap gap-1.5">
        {TEXTOS_OSERLIVRO.map(t => (
          <button
            key={t.id}
            onClick={() => selecionar(t.id)}
            className={`px-3 py-1.5 font-mono text-xs uppercase font-bold border transition-all ${
              ativoId === t.id
                ? 'bg-tinta text-papel border-tinta shadow-carimbo'
                : 'bg-papel-claro text-tinta border-tinta/30 hover:border-tinta'
            }`}
          >
            {t.titulo.split('.')[0]} • {t.subtitulo}
          </button>
        ))}
      </div>

      {/* Conteúdo Literal do Painel Selecionado */}
      <div className="bg-papel-claro p-6 border-2 border-tinta shadow-carimbo space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-tinta/20 pb-2">
          <h4 className="font-anton uppercase text-2xl text-tinta">{textoAtual.titulo}</h4>
          <span className="font-mono text-xs text-tinta-cinza">{textoAtual.autorRef}</span>
        </div>

        <p className="font-serifa italic text-xl sm:text-2xl text-tinta leading-snug">
          “{textoAtual.trechoDestaque}”
        </p>

        <p className="font-corpo text-xs sm:text-sm text-tinta leading-relaxed border-t border-tinta/20 pt-3">
          {textoAtual.textoIntegral}
        </p>

        <div className="flex items-center gap-1 text-tinta-cinza font-mono text-[11px] pt-1">
          <Sparkles className="w-3 h-3 text-acento-vermelho" />
          <span>Transcrito literalmente dos painéis da exposição no Sesc Santo André</span>
        </div>
      </div>
    </div>
  );
};
