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
    slug: "finalizando-um-ciclo",
    title: "Finalizando um Ciclo, Mas Só o Começo",
    date: "01/10/2025",
    excerpt:
      "As últimas semanas foram intensas: mergulhei no backend, Next.js, Prisma e finalizei o último projeto em grupo...",
    content:
      "Nessas últimas semanas mergulhamos de vez no backend. Aprendemos a criar e organizar rotas com Next.js, exploramos mais sobre bancos de dados e utilizamos o ORM Prisma, que facilitou bastante a interação com as tabelas. Foi um salto enorme de aprendizado! O projeto em grupo está caminhando, e mesmo com a correria, sigo firme para entregar cada demanda com qualidade.\n\nAo mesmo tempo, sinto que essa reta final é só o começo. O Programa Desenvolve do Grupo Boticário tem mudado minha vida de verdade. Me ajudou não apenas a aprender ferramentas técnicas, mas também a crescer como pessoa, com colaboração, empatia, amizade e trabalho em equipe. Esses aprendizados vou levar para sempre.\n\nFinalizar esse ciclo me traz alegria, porque sei que é só o primeiro passo de uma longa jornada. Cada linha de código, cada noite de dedicação e cada troca com colegas e mentores me mostram que estou no caminho certo. Não é o fim, é apenas o começo, e que começo incrível!",
    tag: "Realizado",
  },
  {
    slug: "rumo-a-um-sonho",
    title: "Rumo a um Sonho",
    date: "25/09/2025",
    excerpt:
      "Me inscrevi no processo seletivo de estágio do Grupo Boticário e cada etapa tem sido um sonho em construção...",
    content:
      "No dia 16 de setembro, recebi no grupo do curso a notícia sobre o processo seletivo para estágio no Grupo Boticário. Não pensei duas vezes: me inscrevi imediatamente, cheio de empolgação. Era como estar vivendo um sonho acordado, a possibilidade de fazer parte de uma empresa tão inspiradora.\n\nPoucos dias depois, realizei o teste de fit cultural e fiquei feliz em perceber que meus valores estão alinhados com os do grupo. Isso só aumentou ainda mais minha confiança e motivação para continuar no processo.\n\nHoje tivemos uma live com uma das recrutadoras do Grupo Boticário, trazendo dicas valiosas sobre como se preparar para o processo seletivo e até mesmo sobre a estruturação do LinkedIn. Foi uma oportunidade única que me ajudou a enxergar ainda mais o cuidado da empresa com os candidatos.\n\nDesde que iniciei no Programa Desenvolve do Grupo Boticário, tenho pesquisado mais sobre a empresa, sua cultura e seus valores. Quanto mais conheço, mais meus olhos brilham com a ideia de fazer parte desse propósito. Não é apenas sobre uma vaga, é sobre crescer em um lugar onde meus sonhos e valores se encontram.",
    tag: "Empolgado",
  },
  {
    slug: "tempo-inimigo",
    title: "O Tempo e o Foco",
    date: "01/09/2025",
    excerpt:
      "O tempo tem sido meu inimigo, mas não vou deixar que me desanime...",
    content:
      "O tempo tem sido meu inimigo, mas não vou deixar que me desanime. Às vezes parece que tudo é muito corrido, como se não sobrasse espaço para entregar todas as demandas. Faculdade, trabalhos, família e o curso estão me consumindo, mas ao mesmo tempo me deixam empolgado, pois aprendo a cada dia mais. Existem dias em que preciso manter a disciplina, segurar a ansiedade e encontrar equilíbrio.\n\nNesta semana tivemos um bom ritmo nas aulas e no projeto proposto, e percebo que estou evoluindo bem em conceitos de TypeScript e React, além de já estar pegando o jeito com TailwindCSS. É puxado, mas cada linha de código me lembra que vale a pena.",
    tag: "Resiliente",
  },
  {
    slug: "construindo-um-futuro",
    title: "Construindo um Futuro",
    date: "05/07/2025",
    excerpt:
      "Hoje acordei cedo, aproveitando a folga do trabalho para estudar com calma...",
    content:
      "Hoje acordei cedo, aproveitando a folga do trabalho para estudar com calma. Preparei meu café, que nunca pode faltar, e me sentei à mesa com aquela sensação boa de estar investindo em mim. Estou muito feliz e empolgado por fazer parte do Programa Desenvolve do Grupo Boticário, na trilha de Desenvolvimento de Software. Mesmo tendo conquistado essa bolsa em maio, a animação continua como se fosse o primeiro dia. É uma oportunidade única, e eu sei que pode mudar minha vida.\n\nTenho me dedicado ao front-end, reforçando CSS, HTML semântico e desenvolvendo páginas responsivas com media queries. Estou crescendo a cada aula, ajudando colegas iniciantes e aprendendo com quem está mais à frente. A troca é rica, e os tutores são incríveis.",
    tag: "Motivado",
  },
  {
    slug: "acordei-inspirado",
    title: "Acordei Inspirado",
    date: "08/02/2025",
    excerpt:
      "Hoje acordei com a mente fervilhando de ideias e uma empolgação difícil de explicar...",
    content:
      "Hoje acordei com a mente fervilhando de ideias e uma empolgação difícil de explicar. Sinto que, finalmente, as peças do quebra-cabeça do mundo do desenvolvimento web estão começando a se encaixar. HTML e CSS estão deixando de ser um bicho de sete cabeças. Preparei uma xícara generosa de café, abri meu editor de código e me deixei levar pelo fluxo dos estudos. Cada linha escrita parece um passo mais perto do meu objetivo.",
    tag: "Empolgado",
  },
  {
    slug: "um-passo-gigante",
    title: "Um Passo Gigante",
    date: "07/01/2025",
    excerpt:
      "Hoje é um daqueles dias que vou lembrar com carinho. Depois de meses estudando por conta própria...",
    content:
      "Hoje é um daqueles dias que vou lembrar com carinho. Depois de meses estudando por conta própria, mergulhado nos fundamentos de lógica e algoritmos, finalmente me matriculei na faculdade de Análise e Desenvolvimento de Sistemas. Essa decisão não veio do nada. Vinha construindo a base com muito esforço, enfrentando dúvidas, comemorando pequenos avanços, e agora sinto que estou firmando os pés no caminho certo.\n\nA sensação é de alívio, orgulho e muita empolgação. Ter começado por conta própria me fez valorizar ainda mais esse momento. Ver meu nome na matrícula foi como ouvir a confirmação de que sim, meu lugar é na tecnologia, e estou apenas começando.",
    tag: "Realizado",
  },
  {
    slug: "um-novo-comeco",
    title: "Um Novo Começo",
    date: "20/08/2024",
    excerpt:
      "Após anos seguindo outro caminho, decidi mudar de vida e mergulhar na programação...",
    content:
      "Após anos seguindo outro caminho, decidi mudar de vida e mergulhar na programação. Senti que era hora de crescer, recomeçar e construir algo novo com propósito. Iniciei pelos fundamentos: lógica de programação, algoritmos e Python. Já aprendi sobre variáveis, operadores, tipos de dados, estruturas condicionais (if, elif, else) e laços de repetição (for e while). A jornada só começou, mas estou confiante de que estou no caminho certo.",
    tag: "Esperançoso",
  },
];
