import { BookOpen, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-[#D19D56] py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F1E5B1] rounded-3xl shadow-2xl p-8 border-4 border-[#6E3D34]/30 hover:border-[#6E3D34]/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#6E3D34] rounded-xl shadow-lg">
                <BookOpen className="w-8 h-8 text-[#D19D56]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#262A3E]">Sobre Mim</h1>
            </div>

            <div className="space-y-5 text-[#262A3E]/80 leading-relaxed text-xl">
              <p>
                Olá! Sou <span className="font-bold text-[#6E3D34]">Alexandre Rodrigues</span>, estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> em <strong>migração de carreira</strong> para tecnologia.
              </p>

              <p>
                Minha trajetória começou em áreas como escritório, vendas e móveis planejados, e agora estou seguindo meu interesse por tecnologia. Iniciei com <strong>Python</strong>, depois me aprofundei em <strong>front-end</strong> e hoje estudo <strong>desenvolvimento de software</strong>, incluindo back-end e bancos de dados.
              </p>

              <p>
                Atualmente foco em <strong>HTML, CSS, JavaScript, React, Next.js, TypeScript e Tailwind CSS</strong>, aplicando meus conhecimentos em projetos práticos que unem front-end e back-end.
              </p>

              <p>
                Fora da tecnologia, adoro <strong>jogos, animes, filmes</strong> e atividades físicas. Momentos de lazer me ajudam a recarregar as energias.
              </p>

              <p>
                Estou em busca da minha <strong>primeira oportunidade na área de tecnologia</strong>, para aplicar meus conhecimentos, aprender com profissionais experientes e contribuir em projetos inovadores.
              </p>
            </div>

            {/* Redes Sociais */}
            <div className="mt-6 pt-6 border-t-2 border-[#D19D56]/50">
              <h2 className="text-xl md:text-2xl font-bold text-[#262A3E] mb-4">
                Conecte-se comigo
              </h2>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://github.com/aleehblackstar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-[#262A3E] text-[#F1E5B1] rounded-xl hover:bg-[#6E3D34] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-transparent hover:border-[#D19D56]"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold text-lg">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alexandre-rodrigues-9a1050100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-[#0077B5] text-white rounded-xl hover:bg-[#005885] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-transparent hover:border-[#F1E5B1]"
                >
                  <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold text-lg">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
