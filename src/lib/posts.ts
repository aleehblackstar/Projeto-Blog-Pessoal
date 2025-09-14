
export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tag: string;
}

export const allPosts: Post[] = [
  {
    slug: 'construindo-um-futuro',
    title: 'Construindo um Futuro',
    date: '05/07/2025',
    excerpt: 'Hoje acordei cedo, aproveitando a folga do trabalho para estudar com calma...',
    content: 'Hoje acordei cedo, aproveitando a folga do trabalho para estudar com calma. Preparei meu café — que nunca pode faltar — e me sentei à mesa com aquela sensação boa de estar investindo em mim. Estou muito feliz e empolgado por fazer parte do programa Desenvolve, na trilha de Desenvolvimento de Software. Mesmo tendo conquistado essa bolsa em maio, a animação continua como se fosse o primeiro dia. É uma oportunidade única, e eu sei que pode mudar minha vida. Tenho me dedicado ao front-end, reforçando CSS, HTML semântico e desenvolvendo páginas responsivas com media queries — isso explodiu minha mente! Estou crescendo a cada aula, ajudando colegas iniciantes e aprendendo com quem está mais à frente. A troca é rica, e os tutores são incríveis.',
    tag: 'Motivado',
  },
  {
    slug: 'acordei-inspirado',
    title: 'Acordei Inspirado',
    date: '08/02/2025',
    excerpt: 'Hoje acordei com a mente fervilhando de ideias e uma empolgação difícil de explicar...',
    content: 'Hoje acordei com a mente fervilhando de ideias e uma empolgação difícil de explicar. Sinto que, finalmente, as peças do quebra-cabeça do mundo do desenvolvimento web estão começando a se encaixar — HTML e CSS estão deixando de ser um bicho de sete cabeças. Preparei uma xícara generosa de café, abri meu editor de código e me deixei levar pelo fluxo dos estudos. Cada linha escrita parece um passo mais perto do meu objetivo.',
    tag: 'Empolgado',
  },
  {
    slug: 'um-passo-gigante',
    title: 'Um Passo Gigante',
    date: '07/01/2025',
    excerpt: 'Hoje é um daqueles dias que vou lembrar com carinho. Depois de meses estudando por conta própria...',
    content: 'Hoje é um daqueles dias que vou lembrar com carinho. Depois de meses estudando por conta própria, mergulhado nos fundamentos de lógica e algoritmos, finalmente me matriculei na faculdade de Análise e Desenvolvimento de Sistemas. Essa decisão não veio do nada. Vinha construindo a base com muito esforço, enfrentando dúvidas, comemorando pequenos avanços, e agora sinto que estou firmando os pés no caminho certo. A sensação é de alívio, orgulho e muita empolgação. Ter começado por conta própria me fez valorizar ainda mais esse momento. Ver meu nome na matrícula foi como ouvir a confirmação de que sim, meu lugar é na tecnologia — e estou apenas começando.',
    tag: 'Realizado',
  },
  {
    slug: 'um-novo-comeco',
    title: 'Um Novo Começo',
    date: '20/08/2024',
    excerpt: 'Após anos seguindo outro caminho, decidi mudar de vida e mergulhar na programação...',
    content: 'Após anos seguindo outro caminho, decidi mudar de vida e mergulhar na programação. Senti que era hora de crescer, recomeçar e construir algo novo com propósito. Iniciei pelos fundamentos: lógica de programação, algoritmos e Python. Já aprendi sobre variáveis, operadores, tipos de dados, estruturas condicionais (if, elif, else) e laços de repetição (for e while). A jornada só começou, mas estou confiante de que estou no caminho certo.',
    tag: 'Esperançoso',
  },
];