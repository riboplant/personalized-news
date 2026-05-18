"use client";

import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { NewsItem } from "@/types/news";

type Period = "day" | "week";

export default function NewsFeed() {
  const [period, setPeriod] = useState<Period>("day");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`/api/news?period=${period}`)
      .then((r) => r.json())
      .then((data) => {
        setNews(data.news ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [period]);

  return (
    <div>
      <div className="flex gap-1 mb-8 border border-[var(--border)] rounded-full p-1 w-fit font-sans">
        {(["day", "week"] as Period[]).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-5 py-1.5 rounded-full text-sm transition-all ${
              period === p
                ? "font-semibold text-[var(--surface)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
            style={period === p ? { backgroundColor: "var(--accent)" } : {}}
          >
            {p === "day" ? "Hoy" : "Esta semana"}
          </button>
        ))}
      </div>

      {loading && (
        <div className="space-y-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex gap-4 py-5 border-b border-[var(--border)] animate-pulse">
              <div className="w-8 h-8 bg-[var(--border)] rounded" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-[var(--border)] rounded w-1/4" />
                <div className="h-5 bg-[var(--border)] rounded w-3/4" />
                <div className="h-3 bg-[var(--border)] rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-center py-12 font-sans" style={{ color: "var(--text-muted)" }}>
          No se pudieron cargar las noticias. Intentá de nuevo.
        </p>
      )}

      {!loading && !error && news.length === 0 && (
        <p className="text-center py-12 font-sans" style={{ color: "var(--text-muted)" }}>
          No hay noticias para este período.
        </p>
      )}

      {!loading && !error && news.length > 0 && (
        <div>
          {news.map((item, i) => (
            <NewsCard key={item.id} item={item} rank={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
