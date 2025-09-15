import { allPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import LikeButton from '@/components/LikeButton'; 


interface PostPageProps {
  params: {
    slug: string;
  };
}


export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: PostPageProps) {

  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose mx-auto py-8">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div className="border-l-4 border-blue-500 pl-4 mb-4 text-gray-700 italic">
        {post.excerpt}
      </div>
      <div className="text-gray-800 leading-relaxed">

        <p>{post.content}</p>
      </div>
      
      <div className="mt-8 flex justify-end">
        <LikeButton />
      </div>
    </article>
  );
}