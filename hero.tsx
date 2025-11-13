"use client"

import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const handleScrollToCourses = () => {
    const coursesSection = document.getElementById("cursos")
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">Novo: Curso de AI & Game Development</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Aprenda a Programar{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Jogos e Websites
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl">
                Domine as tecnologias mais procuradas com cursos práticos, projetos reais e suporte de uma comunidade
                vibrante de desenvolvedores.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                Comece Agora
                <ArrowRight size={20} />
              </button>
              <button
                onClick={handleScrollToCourses}
                className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition"
              >
                Ver Cursos
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold">5K+</p>
                <p className="text-sm text-muted-foreground">Alunos Ativos</p>
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Cursos Disponíveis</p>
              </div>
              <div>
                <p className="text-2xl font-bold">4.9★</p>
                <p className="text-sm text-muted-foreground">Avaliação Média</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border backdrop-blur">
              <div className="space-y-4">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full w-3/4"></div>
                <div className="h-2 bg-muted rounded-full w-1/2"></div>
                <div className="h-2 bg-muted rounded-full w-2/3"></div>

                <div className="pt-8 space-y-2">
                  <div className="h-20 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg border border-border"></div>
                  <div className="h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
