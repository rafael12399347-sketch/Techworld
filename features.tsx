import { Code2, Gamepad2, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Cursos Práticos",
    description: "Aprenda fazendo. Cada lição inclui exercícios reais e projetos para consolidar seu conhecimento.",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Crie jogos 2D e 3D com Unity, Godot e JavaScript. De conceitos básicos a projetos avançados.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com outros desenvolvedores, compartilhe ideias e obtenha feedback em tempo real.",
  },
  {
    icon: Zap,
    title: "Certificados",
    description: "Ganhe certificados reconhecidos que comprovam suas habilidades para empregadores.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Por que escolher CodeMaster?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos a plataforma mais completa para aprender programação moderna
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/50 group-hover:to-secondary/50 transition">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
