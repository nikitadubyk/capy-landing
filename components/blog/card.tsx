import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-ink-900/60 border border-ink-800/50 hover:border-primary-500/30 rounded-2xl p-6 transition-all hover:-translate-y-0.5"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-primary-500/10 text-primary-400 px-2.5 py-1 rounded-full border border-primary-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
        {post.title}
      </h2>

      <p className="text-ink-400 text-sm leading-relaxed mb-4">
        {post.description}
      </p>

      <div className="flex items-center justify-between text-xs text-ink-600">
        <time dateTime={post.date}>{formattedDate}</time>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
