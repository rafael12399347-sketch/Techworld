import Link from "next/link"
import { ArrowLeft, Clock, Users, Zap, BookOpen, Code2, Target } from "lucide-react"

const courseContent = {
  "javascript-fundamentos": {
    title: "Fundamentos de JavaScript",
    level: "Iniciante",
    duration: "4 semanas",
    students: "2.3K",
    image: "from-primary",
    intro:
      "JavaScript é a linguagem mais importante para desenvolvimento web. Neste curso, você aprenderá desde os conceitos básicos até técnicas modernas de programação.",
    sections: [
      {
        title: "O que você vai aprender",
        icon: Target,
        content: [
          "Variáveis, tipos de dados e operadores",
          "Controle de fluxo (if, else, switch)",
          "Loops e iterações (for, while, map, filter)",
          "Funções e escopo de variáveis",
          "Objetos e arrays",
          "Manipulação do DOM",
          "Eventos e interatividade",
          "Promises e Async/Await",
        ],
      },
      {
        title: "Por que aprender JavaScript",
        icon: Zap,
        content: [
          "É a linguagem da web - funciona em todos os navegadores",
          "Altíssima demanda no mercado de trabalho",
          "Base para frameworks modernos como React, Vue e Angular",
          "Pode ser usada também no backend com Node.js",
          "Comunidade gigante e recursos abundantes",
        ],
      },
      {
        title: "Estrutura do Curso",
        icon: BookOpen,
        content: [
          "Semana 1: Conceitos Fundamentais e Variáveis",
          "Semana 2: Funções, Objetos e Arrays",
          "Semana 3: DOM e Eventos",
          "Semana 4: Projeto Prático e Recursos Avançados",
        ],
      },
      {
        title: "Projeto Final",
        icon: Code2,
        content: [
          "Crie uma aplicação de TODO list interativa",
          "Implemente adicionar, editar e deletar tarefas",
          "Use localStorage para persistência de dados",
          "Estilize com CSS moderno",
          "Compartilhe seu projeto na comunidade",
        ],
      },
    ],
  },
  "react-zero": {
    title: "React do Zero",
    level: "Iniciante",
    duration: "5 semanas",
    students: "1.8K",
    image: "from-secondary",
    intro:
      "React é a biblioteca JavaScript mais popular para criar interfaces web modernas e interativas. Aprenda desde o básico até componentes avançados.",
    sections: [
      {
        title: "O que você vai aprender",
        icon: Target,
        content: [
          "JSX - Sintaxe do React",
          "Componentes funcionais e class components",
          "Props e composição de componentes",
          "State e useState hook",
          "Lifecycle e useEffect",
          "Manipulação de formulários",
          "Roteamento com React Router",
          "Context API e state management",
        ],
      },
      {
        title: "Por que aprender React",
        icon: Zap,
        content: [
          "Mantido pelo Facebook com comunidade enorme",
          "Componentes reutilizáveis aumentam produtividade",
          "Virtual DOM para melhor performance",
          "Altíssima demanda de desenvolvedores React",
          "Ecossistema rico com bibliotecas complementares",
        ],
      },
      {
        title: "Estrutura do Curso",
        icon: BookOpen,
        content: [
          "Semana 1: Introdução e Primeiros Componentes",
          "Semana 2: Props, State e Hooks",
          "Semana 3: Formulários e Validação",
          "Semana 4: Roteamento e Navegação",
          "Semana 5: Projeto Full e Deployment",
        ],
      },
      {
        title: "Projeto Final",
        icon: Code2,
        content: [
          "Desenvolva uma aplicação de portfólio pessoal",
          "Crie múltiplas páginas com roteamento",
          "Implemente formulário de contato funcional",
          "Integre com API externa de dados",
          "Deploy na Vercel com CI/CD",
        ],
      },
    ],
  },
  "gamedev-unity": {
    title: "Game Dev com Unity",
    level: "Intermediário",
    duration: "8 semanas",
    students: "1.2K",
    image: "from-accent",
    intro:
      "Unity é a engine mais usada para criar jogos 3D profissionais. Aprenda a criar jogos completos do zero com C#.",
    sections: [
      {
        title: "O que você vai aprender",
        icon: Target,
        content: [
          "Interface do Unity e navegação",
          "Scripts em C# para game logic",
          "Física e colisões",
          "Animações e efeitos",
          "Sistema de partículas",
          "Audio e som nos jogos",
          "UI/UX para jogos",
          "Deploy para múltiplas plataformas",
        ],
      },
      {
        title: "Por que aprender Unity",
        icon: Zap,
        content: [
          "Maior market share entre game engines",
          "Suporta 25+ plataformas (PC, Mobile, Console)",
          "Asset Store com milhares de recursos prontos",
          "Grande comunidade com tutoriais abundantes",
          "Ferramentas profissionais usadas por estúdios grandes",
        ],
      },
      {
        title: "Estrutura do Curso",
        icon: BookOpen,
        content: [
          "Semana 1-2: Fundamentos e C# Básico",
          "Semana 3-4: Mecânicas de Gameplay",
          "Semana 5-6: Arte e Animações",
          "Semana 7-8: Polimento e Deploy",
        ],
      },
      {
        title: "Projeto Final",
        icon: Code2,
        content: [
          "Crie um jogo 3D completo (estilo platformer ou puzzle)",
          "Implemente sistemas de pontuação e vidas",
          "Adicione múltiplos níveis progressivos",
          "Crie animações fluidas e efeitos de som",
          "Publique na Play Store ou Steam",
        ],
      },
    ],
  },
  "nextjs-avancado": {
    title: "Next.js Avançado",
    level: "Avançado",
    duration: "6 semanas",
    students: "890",
    image: "from-primary",
    intro:
      "Next.js é o framework React mais poderoso para criar aplicações full-stack escaláveis. Domine conceitos avançados e padrões profissionais.",
    sections: [
      {
        title: "O que você vai aprender",
        icon: Target,
        content: [
          "App Router vs Pages Router",
          "Server Components e Client Components",
          "Renderização estática vs dinâmica",
          "API Routes e integração com banco de dados",
          "Authentication e autorização",
          "Performance optimization",
          "Deployment e CI/CD",
          "Middleware e edge functions",
        ],
      },
      {
        title: "Por que aprender Next.js",
        icon: Zap,
        content: [
          "Full-stack em um único framework",
          "Melhor performance com SSR e SSG",
          "Renderização no servidor reduz JavaScript no client",
          "Ideal para SEO e aplicações críticas",
          "Usado por startups e empresas de alta escala",
        ],
      },
      {
        title: "Estrutura do Curso",
        icon: BookOpen,
        content: [
          "Semana 1-2: App Router e Server Components",
          "Semana 3-4: API Routes e Database",
          "Semana 5: Authentication e Security",
          "Semana 6: Deployment e Performance",
        ],
      },
      {
        title: "Projeto Final",
        icon: Code2,
        content: [
          "Desenvolva uma SaaS completa com autenticação",
          "Implemente dashboard com dados em tempo real",
          "Integre com Stripe para pagamentos",
          "Configure GitHub Actions para CI/CD",
          "Deploy na Vercel com domínio customizado",
        ],
      },
    ],
  },
  "godot-essentials": {
    title: "Godot Engine Essentials",
    level: "Intermediário",
    duration: "5 semanas",
    students: "650",
    image: "from-secondary",
    intro:
      "Godot é a engine open-source mais flexível para criar jogos 2D. Aprenda a desenvolver jogos profissionais sem custos de licença.",
    sections: [
      {
        title: "O que você vai aprender",
        icon: Target,
        content: [
          "Interface do Godot e Node System",
          "GDScript - linguagem de script do Godot",
          "Cenas e instâncias",
          "Física 2D e colisões",
          "Sprites e animações",
          "Tilemap para level design",
          "Áudio e efeitos sonoros",
          "Exportação para Web e Mobile",
        ],
      },
      {
        title: "Por que aprender Godot",
        icon: Zap,
        content: [
          "100% open-source e gratuito",
          "Engine leve e rápida",
          "GDScript é simples de aprender",
          "Comunidade em crescimento acelerado",
          "Perfeito para indie developers e pequenas equipes",
        ],
      },
      {
        title: "Estrutura do Curso",
        icon: BookOpen,
        content: [
          "Semana 1: Conceitos Fundamentais e GDScript",
          "Semana 2-3: Mecânicas de Gameplay 2D",
          "Semana 4: Level Design e Polimento",
          "Semana 5: Publicação e Deploy",
        ],
      },
      {
        title: "Projeto Final",
        icon: Code2,
        content: [
          "Crie um jogo 2D completo com múltiplos fases",
          "Implemente inimigos com inteligência artificial",
          "Adicione sistema de pontuação e power-ups",
          "Crie menu e telas de pausa",
          "Publique no itch.io e Game Jams",
        ],
      },
    ],
  },
  "web3-smartcontracts": {
    title: "Web3 & Smart Contracts",
    level: "Avançado",
    duration: "7 semanas",
    students: "520",
    image: "from-accent",
    intro:
      "Entre na revolução do Web3 e aprenda a desenvolver aplicações descentralizadas e contratos inteligentes na blockchain.",
    sections: [
      {
        title: "O que você vai aprender",
        icon: Target,
        content: [
          "Conceitos de blockchain e criptografia",
          "Solidity - linguagem de smart contracts",
          "Ethers.js e Web3.js",
          "Redes de teste (Sepolia, Goerli)",
          "Metamask e wallets",
          "DeFi e tokens ERC-20",
          "NFTs e contratos ERC-721",
          "Deploy na mainnet Ethereum",
        ],
      },
      {
        title: "Por que aprender Web3",
        icon: Zap,
        content: [
          "Mercado emergente com altíssima demanda",
          "Oportunidades de ganhos significativos",
          "Tecnologia revolucionária e descentralizada",
          "DeFi está transformando o mercado financeiro",
          "Conhecimento valorizado por empresas cripto",
        ],
      },
      {
        title: "Estrutura do Curso",
        icon: BookOpen,
        content: [
          "Semana 1-2: Blockchain Fundamentals",
          "Semana 3-4: Solidity e Smart Contracts",
          "Semana 5-6: DApps e Frontend Web3",
          "Semana 7: Segurança e Mainnet Deploy",
        ],
      },
      {
        title: "Projeto Final",
        icon: Code2,
        content: [
          "Crie seu próprio token ERC-20",
          "Desenvolva um contrato DeFi com staking",
          "Construa um marketplace de NFTs",
          "Integre wallet connection (Metamask)",
          "Deploy na rede Ethereum testnet",
        ],
      },
    ],
  },
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courseContent[params.id as keyof typeof courseContent]

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Curso não encontrado</h1>
          <Link href="/" className="text-primary hover:underline">
            Voltar à página principal
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header com navegação */}
      <div className="sticky top-0 z-50 bg-background/95 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            Voltar
          </Link>
        </div>
      </div>

      {/* Hero do Curso */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className={`h-40 bg-gradient-to-br ${course.image} to-transparent opacity-20 rounded-lg mb-8`}></div>
          <h1 className="text-4xl font-bold mb-4 text-balance">{course.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{course.intro}</p>

          {/* Metadados */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Clock size={16} />
                Duração
              </div>
              <p className="font-semibold">{course.duration}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Users size={16} />
                Alunos
              </div>
              <p className="font-semibold">{course.students}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Nível</div>
              <p className="font-semibold">{course.level}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Certificado</div>
              <p className="font-semibold">Incluso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seções do Conteúdo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {course.sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>

                <ul className="space-y-3 ml-0">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Inscreva-se agora e comece sua jornada no desenvolvimento de jogos e web!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition">
            Inscrever-se Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 CodeMaster. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
