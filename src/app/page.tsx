import { allPosts } from "@/lib/posts";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div className="space-y-8 bg-[var(--color-golden-tinsel)]">
      {/* O HeroSection (e o Nav dentro dele) deve ser ajustado para usar Fundo Mistletoe e Texto Polaroid */}
      <HeroSection /> 
      
      {/* Título Principal já é COAL por herança do body */}
      <h1 className="text-3xl font-bold">Últimos Posts</h1>
      
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <article
            key={post.slug}
            /* Fundo Escuro MISTLETOE */
            className="bg-[var(--color-mistletoe)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/posts/${post.slug}`}>
              {/* Título: Texto Claro POLAROID */}
              <h2 className="text-xl font-semibold text-[var(--color-polaroid)] hover:underline">
                {post.title}
              </h2>
            </Link>
            {/* Data: Texto POLAROID (um pouco mais opaco) */}
            <p className="text-sm text-[var(--color-polaroid)] opacity-85 mt-1">
              {post.date}
            </p>
            {/* Excerpt: Texto POLAROID */}
            <p className="mt-4 text-[var(--color-polaroid)]">{post.excerpt}</p>
            {/* Tag: Cor de Acentuação GOLDEN TINSEL */}
            <p className="mt-2 text-[var(--color-golden-tinsel)] text-sm font-medium">
              {post.tag}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}