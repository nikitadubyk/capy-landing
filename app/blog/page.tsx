import type { Metadata } from "next";

import { getAllPosts } from "@/lib";
import { PostCard } from "@/components/blog/card";

export const metadata: Metadata = {
  title: "Блог — Копицентр",
  description: "Полезные статьи о печати, ламинировании и канцелярии",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-ink-950 pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-widest">
            Полезное
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Блог
          </h1>
          <p className="text-ink-400">
            Советы, новости и полезная информация о наших услугах.
          </p>
        </div>

        {!posts.length ? (
          <p className="text-ink-500 text-center py-16">
            Статьи скоро появятся...
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
