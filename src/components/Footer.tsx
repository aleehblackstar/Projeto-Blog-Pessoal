import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#6E3D34] text-[#F1E5B1] py-10 border-t-4 border-[#D19D56]">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="p-2 bg-[#D19D56] rounded-lg">
              <Coffee className="w-5 h-5 text-[#6E3D34] animate-pulse" />
            </div>
            <p className="text-sm font-semibold">
              Feito com dedicação e muito café por Alexandre Rodrigues
            </p>
          </div>
          <div className="w-32 h-1 bg-[#D19D56] mx-auto rounded-full"></div>
          <p className="text-xs text-[#F1E5B1]/70 font-medium">
            © 2025 Meu Blog Pessoal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}