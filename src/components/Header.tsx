import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#6E3D34] shadow-xl border-b-4 border-[#D19D56]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-[#D19D56] rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <BookOpen className="w-6 h-6 text-[#6E3D34]" />
            </div>
            <span className="text-2xl font-bold text-[#F1E5B1] tracking-tight group-hover:text-[#D19D56] transition-colors duration-300">
              Meu Blog Pessoal
            </span>
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-[#F1E5B1] hover:text-[#D19D56] font-semibold transition-colors duration-300 relative group px-3 py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#D19D56] group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-[#F1E5B1] hover:text-[#D19D56] font-semibold transition-colors duration-300 relative group px-3 py-2"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#D19D56] group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}