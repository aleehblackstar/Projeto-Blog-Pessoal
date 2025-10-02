import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import type { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
  index: number;
}

// Mapa de cores por tag
const tagColors: Record<string, string> = {
  Motivado: 'from-emerald-500 to-teal-600',
  Empolgado: 'from-amber-500 to-orange-600',
  Realizado: 'from-blue-500 to-indigo-600',
  Esperançoso: 'from-purple-500 to-pink-600',
};

export default function PostCard({ post, index }: PostCardProps) {
  const colorClass = tagColors[post.tag] || 'from-gray-500 to-gray-600';

  return (
    <article
      className="group bg-[#F1E5B1] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-[#6E3D34]/20 hover:border-[#6E3D34]/50 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Tag colorida no topo */}
      <div className={`h-2 bg-gradient-to-r ${colorClass}`}></div>

      <div className="p-6">
        {/* Cabeçalho do post */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-[#6E3D34]/70 font-medium">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div
            className={`px-3 py-1 bg-gradient-to-r ${colorClass} text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-md`}
          >
            <Tag className="w-3 h-3" />
            {post.tag}
          </div>
        </div>

        {/* Título */}
        <h3 className="text-2xl font-bold text-[#262A3E] mb-3 group-hover:text-[#6E3D34] transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#262A3E]/70 leading-relaxed mb-5 line-clamp-3 font-medium">
          {post.excerpt}
        </p>

        {/* Botão Ler mais */}
        <Link
          href={`/posts/${post.slug}`}
          className="text-[#6E3D34] font-bold flex items-center gap-2 group-hover:text-[#D19D56] transition-colors duration-300 hover:gap-3 w-fit"
        >
          Ler mais
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Linha de progresso animada */}
      <div className="h-1 bg-[#D19D56]/30">
        <div
          className={`h-full bg-gradient-to-r ${colorClass} w-0 group-hover:w-full transition-all duration-700`}
        ></div>
      </div>
    </article>
  );
}