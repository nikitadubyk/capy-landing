export default function PostLoading() {
  return (
    <main className="min-h-screen bg-ink-950 pt-24 pb-16 px-4 sm:px-6">
      <article className="max-w-2xl mx-auto animate-pulse">
        {/* Back link */}
        <div className="h-4 w-24 bg-ink-800 rounded mb-8" />

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-16 bg-ink-800 rounded-full" />
          <div className="h-6 w-20 bg-ink-800 rounded-full" />
        </div>

        {/* Title */}
        <div className="h-9 bg-ink-800 rounded mb-3 w-4/5" />
        <div className="h-9 bg-ink-800 rounded mb-4 w-3/5" />

        {/* Meta */}
        <div className="flex gap-4 mb-10 pb-8 border-b border-ink-800">
          <div className="h-4 w-28 bg-ink-800 rounded" />
          <div className="h-4 w-4 bg-ink-800 rounded" />
          <div className="h-4 w-20 bg-ink-800 rounded" />
        </div>

        {/* Body paragraphs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="mb-4 space-y-2">
            <div className="h-4 bg-ink-800 rounded w-full" />
            <div className="h-4 bg-ink-800 rounded w-full" />
            <div className="h-4 bg-ink-800 rounded w-3/4" />
          </div>
        ))}
      </article>
    </main>
  );
}
