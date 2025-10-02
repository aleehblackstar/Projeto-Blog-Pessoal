import { notFound } from "next/navigation";
import { allPosts } from "@/lib/posts";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Mapa de cores por tag
const tagColors: Record<string, string> = {
  Motivado: 'from-emerald-500 to-teal-600',
  Empolgado: 'from-amber-500 to-orange-600',
  Realizado: 'from-blue-500 to-indigo-600',
  Esperançoso: 'from-purple-500 to-pink-600',
};

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const colorClass = tagColors[post.tag] || 'from-gray-500 to-gray-600';

  return (
    <div className="bg-[#D19D56] min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Botão Voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#262A3E] hover:text-[#6E3D34] font-semibold mb-8 group transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          Voltar para Home
        </Link>

        {/* Card do Post - Largura reduzida e centralizado */}
        <article className="max-w-3xl mx-auto bg-[#F1E5B1] rounded-3xl shadow-2xl overflow-hidden border-4 border-[#6E3D34]/30">
          {/* Barra colorida no topo */}
          <div className={`h-3 bg-gradient-to-r ${colorClass}`}></div>

          {/* Conteúdo do Post */}
          <div className="p-8 md:p-12">
            {/* Header do Post */}
            <div className="mb-8">
              {/* Tag e Data */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div
                  className={`px-4 py-2 bg-gradient-to-r ${colorClass} text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg`}
                >
                  <Tag className="w-4 h-4" />
                  {post.tag}
                </div>
                <div className="flex items-center gap-2 text-[#6E3D34]/70 font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Título */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#262A3E] mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Divisor decorativo */}
              <div className="flex items-center gap-3">
                <div className={`h-1 w-20 bg-gradient-to-r ${colorClass} rounded-full`}></div>
                <div className="h-1 w-12 bg-[#D19D56] rounded-full"></div>
                <div className="h-1 w-6 bg-[#6E3D34] rounded-full"></div>
              </div>
            </div>

            {/* Conteúdo - Texto mais estreito para melhor leitura */}
            <div className="prose prose-lg max-w-none">
              <p className="text-[#262A3E]/80 text-lg leading-relaxed font-medium whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </div>

          {/* Footer do Card */}
          <div className={`h-2 bg-gradient-to-r ${colorClass}`}></div>
        </article>

        {/* Navegação entre posts */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-[#F1E5B1] rounded-2xl shadow-xl p-6 border-2 border-[#6E3D34]/20">
            <h3 className="text-xl font-bold text-[#262A3E] mb-4">
              Outros Posts
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {allPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => {
                  const relatedColor = tagColors[relatedPost.tag] || 'from-gray-500 to-gray-600';
                  return (
                    <Link
                      key={relatedPost.slug}
                      href={`/posts/${relatedPost.slug}`}
                      className="group block p-4 bg-white rounded-xl border-2 border-transparent hover:border-[#6E3D34]/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className={`h-1 w-12 bg-gradient-to-r ${relatedColor} rounded-full mb-3`}></div>
                      <h4 className="font-bold text-[#262A3E] group-hover:text-[#6E3D34] transition-colors duration-300 mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-[#262A3E]/60 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}