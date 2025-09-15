import { allPosts } from "@/lib/posts";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <h1 className="text-3xl font-bold">Últimos Posts</h1>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-700 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <p className="mt-4 text-gray-700">{post.excerpt}</p>
            <p className="mt-2 text-blue-500 text-sm font-medium">{post.tag}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
