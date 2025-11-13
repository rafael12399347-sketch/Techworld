import { MessageSquare, Users, Trophy } from "lucide-react"

export default function Community() {
  return (
    <section id="comunidade" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Junte-se à Nossa Comunidade</h2>
              <p className="text-xl text-muted-foreground">
                Conecte-se com milhares de desenvolvedores, compartilhe conhecimento e cresça junto.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MessageSquare className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fóruns Ativos</h3>
                  <p className="text-muted-foreground">
                    Faça perguntas e obtenha respostas de especialistas em minutos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/10">
                    <Users className="text-secondary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Grupos de Estudo</h3>
                  <p className="text-muted-foreground">
                    Estudar com outras pessoas torna o aprendizado mais divertido.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <Trophy className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Competições e Prêmios</h3>
                  <p className="text-muted-foreground">Participe de desafios mensais e ganhe prêmios incríveis.</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Entrar na Comunidade
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-card rounded-xl border border-border space-y-4">
              <div className="text-3xl font-bold text-primary">5K+</div>
              <p className="text-sm text-muted-foreground">Membros Ativos da Comunidade</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border space-y-4">
              <div className="text-3xl font-bold text-secondary">1.2K+</div>
              <p className="text-sm text-muted-foreground">Discussões Por Mês</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border space-y-4">
              <div className="text-3xl font-bold text-accent">500+</div>
              <p className="text-sm text-muted-foreground">Projetos Compartilhados</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border space-y-4">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <p className="text-sm text-muted-foreground">Avaliação Média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
