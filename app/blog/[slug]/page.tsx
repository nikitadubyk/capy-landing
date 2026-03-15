import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getAllSlugs, getPostBySlug } from "@/lib";
import { mdxComponents } from "@/components/blog/mdx";

interface Props {
  params: { slug: string };
}

/**
 * Generates static params for getStaticProps based on all available slugs.
 * Maps over all slugs and returns an array of objects with the slug property.
 * @returns {Array<{ slug: string }>} - Array of objects with the slug property for getStaticProps.
 */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}
/**
 * Generates metadata for a blog post.
 *
 * @param {{ params: { slug: string } }} props - Props object with the slug of the post.
 * @returns {Metadata} - Metadata object with title and description.
 */

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    description: post.description,
    title: `${post.title} — Блог Копицентр`,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-ink-950 pt-24 pb-16 px-4 sm:px-6">
      <article className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-ink-500 hover:text-primary-400 transition-colors text-sm mb-8"
        >
          ← Все статьи
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-primary-500/10 text-primary-400 px-2.5 py-1 rounded-full border border-primary-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-ink-500 mb-10 pb-8 border-b border-ink-800">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <div className="prose-custom">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-ink-800 hover:bg-ink-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            ← Вернуться к блогу
          </Link>
        </div>
      </article>
    </main>
  );
}
