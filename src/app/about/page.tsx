import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
      <p className="text-lg text-white leading-relaxed">
        Olá! Sou Alexandre Rodrigues,estudante de Análise e Desenvolvimento de
        Sistemas, dedicado a iniciar minha carreira na área de tecnologia. Além
        da faculdade e de cursos complementares, desenvolvo projetos práticos em
        programação e desenvolvimento web, aplicando meus estudos em soluções
        reais. Busco minha primeira oportunidade para aplicar meus
        conhecimentos, evoluir com profissionais experientes e contribuir para
        projetos de tecnologia com dedicação e crescimento contínuo."
        Atualmente, estou focado em aprimorar minhas habilidades em
        **front-end**, estudando Next.js, TypeScript e Tailwind CSS.
      </p>
      <p className="text-lg text-white leading-relaxed mt-4">
        Este blog é um projeto de curso que demonstra meu conhecimento em
        roteamento, componentes do lado do servidor e cliente, e outras práticas
        modernas de desenvolvimento web.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Contato e Redes Sociais</h2>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/aleehblackstar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={30}
              className="text-gray-700 hover:text-blue-500 transition-colors"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alexandre-rodrigues-9a1050100/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={30}
              className="text-gray-700 hover:text-blue-500 transition-colors"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
