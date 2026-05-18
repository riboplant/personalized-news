import { NewsItem } from "@/types/news";

interface Props {
  item: NewsItem;
  rank: number;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function NewsCard({ item, rank }: Props) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 py-5 border-b border-[var(--border)] hover:bg-[var(--surface)] transition-colors px-2 -mx-2"
    >
      <span
        className="text-3xl font-bold tabular-nums leading-none mt-1 shrink-0 w-8 text-right"
        style={{ color: "var(--border)" }}
      >
        {rank}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {item.source && (
            <span className="text-xs uppercase tracking-wider font-sans" style={{ color: "var(--accent)" }}>
              {item.source}
            </span>
          )}
          <span className="text-xs font-sans" style={{ color: "var(--text-muted)" }}>
            {formatDate(item.published_at)}
          </span>
        </div>

        <h2 className="text-lg font-semibold leading-snug group-hover:underline decoration-[var(--accent)] underline-offset-2 mb-1">
          {item.title}
        </h2>

        {item.summary && (
          <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>
            {item.summary}
          </p>
        )}
      </div>

      {item.image_url && (
        <img
          src={item.image_url}
          alt=""
          className="w-24 h-20 object-cover rounded shrink-0 hidden sm:block"
        />
      )}
    </a>
  );
}
