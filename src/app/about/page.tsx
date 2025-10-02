import { BookOpen, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-[#D19D56] py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F1E5B1] rounded-3xl shadow-2xl p-10 border-4 border-[#6E3D34]/30 hover:border-[#6E3D34]/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#6E3D34] rounded-xl shadow-lg">
                <BookOpen className="w-8 h-8 text-[#D19D56]" />
              </div>
              <h1 className="text-4xl font-bold text-[#262A3E]">Sobre Mim</h1>
            </div>

            <div className="space-y-4 text-[#262A3E]/80 leading-relaxed">
              <p className="text-lg font-medium">
                Olá! Sou{" "}
                <span className="font-bold text-[#6E3D34]">
                  Alexandre Rodrigues
                </span>
                , estudante de Análise e Desenvolvimento de Sistemas, dedicado a
                iniciar minha carreira na área de tecnologia.
              </p>
              <p className="font-medium">
                Além da faculdade e de cursos complementares, desenvolvo
                projetos práticos em programação e desenvolvimento web,
                aplicando meus estudos em soluções reais.
              </p>
              <p className="font-medium">
                Atualmente, estou focado em aprimorar minhas habilidades em{" "}
                <span className="font-bold text-[#6E3D34]">front-end</span>,
                estudando Next.js, TypeScript e Tailwind CSS.
              </p>
              <p className="font-medium">
                Este blog é um projeto de curso que demonstra meu conhecimento
                em roteamento, componentes do lado do servidor e cliente, e
                outras práticas modernas de desenvolvimento web.
              </p>
            </div>

            {/* Redes Sociais */}
            <div className="mt-8 pt-8 border-t-2 border-[#D19D56]/50">
              <h2 className="text-xl font-bold text-[#262A3E] mb-4">
                Conecte-se comigo
              </h2>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/aleehblackstar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-[#262A3E] text-[#F1E5B1] rounded-xl hover:bg-[#6E3D34] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-transparent hover:border-[#D19D56]"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alexandre-rodrigues-9a1050100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-[#0077B5] text-white rounded-xl hover:bg-[#005885] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-transparent hover:border-[#F1E5B1]"
                >
                  <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}