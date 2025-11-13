import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Jogo da Cobrinha em 3D",
    description: "Uma versão moderna e visualmente impressionante do clássico jogo da cobrinha",
    tags: ["Unity", "C#", "Game Dev"],
    image: "🎮",
  },
  {
    title: "E-commerce com Next.js",
    description: "Plataforma de compras completa com pagamento integrado e autenticação",
    tags: ["Next.js", "React", "Stripe"],
    image: "🛍️",
  },
  {
    title: "Aplicativo de Tarefas Colaborativo",
    description: "Real-time task manager com sincronização entre múltiplos usuários",
    tags: ["React", "Firebase", "WebSocket"],
    image: "✅",
  },
  {
    title: "Game de Puzzle 2D",
    description: "Jogo de puzzle interativo criado com Godot Engine",
    tags: ["Godot", "GDScript", "Game Dev"],
    image: "🧩",
  },
  {
    title: "Dashboard de Analytics",
    description: "Painel administrativo com gráficos em tempo real e relatórios",
    tags: ["React", "TypeScript", "Charts"],
    image: "📊",
  },
  {
    title: "Plataforma de Streaming",
    description: "Aplicação de video streaming com transcodificação automática",
    tags: ["Node.js", "FFmpeg", "AWS"],
    image: "🎬",
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projetos dos Alunos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja os incríveis projetos criados por nossa comunidade de desenvolvedores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border hover:border-primary/50 overflow-hidden transition"
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary font-medium hover:bg-primary/20 transition">
                    <ExternalLink size={16} />
                    Ver
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-muted border border-border rounded-lg font-medium hover:bg-muted/80 transition">
                    <Github size={16} />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
