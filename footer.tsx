import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center text-white text-xs">
                💻
              </div>
              CodeMaster
            </Link>
            <p className="text-sm text-muted-foreground">Aprender a programar nunca foi tão acessível e divertido.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Comunidade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Certificados
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Termos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Política
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Social</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-muted rounded hover:bg-muted/80 transition">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded hover:bg-muted/80 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded hover:bg-muted/80 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded hover:bg-muted/80 transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">© 2025 CodeMaster. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
