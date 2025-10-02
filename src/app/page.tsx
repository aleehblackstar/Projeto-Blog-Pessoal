import HeroSection from "@/components/HeroSection";
import PostCard from "@/components/PostCard";
import { allPosts } from "@/lib/posts";

export default function HomePage() {
  return (
    <div className="bg-[#D19D56]">
      {/* Hero Section */}
      <HeroSection />

      {/* Posts Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#262A3E] mb-3 drop-shadow-sm">
            Últimos Posts
          </h2>
          <div className="w-24 h-1.5 bg-[#6E3D34] rounded-full shadow-md"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {allPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}