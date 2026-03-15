import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-bold text-white mt-10 mb-4" {...props} />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-bold text-white mt-8 mb-3 border-b border-ink-800 pb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold text-white mt-6 mb-2" {...props} />
  ),
  p: (props) => <p className="text-ink-300 leading-relaxed mb-4" {...props} />,
  ul: (props) => (
    <ul
      className="list-disc list-inside text-ink-300 space-y-1 mb-4 ml-2"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-inside text-ink-300 space-y-1 mb-4 ml-2"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="text-white font-semibold" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-primary-500 pl-4 my-4 text-ink-400 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-ink-800 text-primary-300 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-ink-900 border border-ink-700 rounded-xl p-4 overflow-x-auto text-sm mb-4"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  img: ({ src, alt }) => (
    <span className="block my-6 rounded-xl overflow-hidden">
      <Image
        width={800}
        height={450}
        src={src ?? ""}
        alt={alt ?? ""}
        className="w-full object-cover"
      />
    </span>
  ),
};
