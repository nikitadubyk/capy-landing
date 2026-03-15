import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  date: string;
  title: string;
  tags: string[];
  description: string;
  coverImage?: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

/**
 * Calculates the reading time of a given content in minutes.
 * The reading time is calculated by dividing the number of words in the content by 200.
 * The result is then rounded up to the nearest minute.
 * The function returns a string representing the reading time in minutes.
 * If the reading time is 1 minute, the function returns "1 минута".
 * If the reading time is less than 5 minutes, the function returns "{minutes} минуты".
 * Otherwise, the function returns "{minutes} минут".
 */
function getReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);

  if (minutes === 1) return "1 минута";
  if (minutes < 5) return `${minutes} минуты`;
  return `${minutes} минут`;
}

/**
 * Returns an array of all posts sorted by date in descending order.
 *
 * @returns {PostMeta[]} - An array of all posts
 */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      date: data.date ?? "",
      tags: data.tags ?? [],
      title: data.title ?? "Без названия",
      description: data.description ?? "",
      coverImage: data.coverImage ?? null,
      readingTime: getReadingTime(content),
    } satisfies PostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Returns a post by its slug.
 *
 * @param {string} slug - Slug of the post to retrieve.
 * @returns {Post | null} - Post object if found, null otherwise.
 */
export function getPostBySlug(slug: string): Post | null {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    date: data.date ?? "",
    tags: data.tags ?? [],
    title: data.title ?? "Без названия",
    description: data.description ?? "",
    coverImage: data.coverImage ?? null,
    readingTime: getReadingTime(content),
  };
}

// Для generateStaticParams
export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
