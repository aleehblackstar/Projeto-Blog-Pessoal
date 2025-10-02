import { Coffee, Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#D19D56] py-20 border-b-4 border-[#6E3D34]/20">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#6E3D34]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-[#F1E5B1]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <Coffee
          className="absolute top-20 left-20 w-16 h-16 text-[#6E3D34]/15 animate-bounce"
          style={{ animationDuration: '3s' }}
        />
        <Sparkles
          className="absolute bottom-20 right-32 w-12 h-12 text-[#F1E5B1]/30 animate-bounce"
          style={{ animationDuration: '4s', animationDelay: '0.5s' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#262A3E] mb-6 leading-tight drop-shadow-sm">
            Minha Jornada na <span className="text-[#6E3D34]">Programação</span>
          </h1>
          <p className="text-xl text-[#262A3E]/80 mb-8 leading-relaxed font-medium">
            Documentando cada passo da minha transição de carreira, desde os
            primeiros códigos até projetos reais. Um diário de aprendizado,
            desafios e conquistas.
          </p>
          <button className="group px-8 py-4 bg-[#6E3D34] text-[#F1E5B1] font-bold rounded-xl hover:bg-[#5d3329] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 transform hover:scale-105 border-2 border-[#6E3D34] hover:border-[#F1E5B1]/30">
            Explorar Posts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}