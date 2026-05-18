import NewsFeed from "@/components/NewsFeed";

export default function Home() {
  const today = new Date().toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <header
        className="border-b"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
      >
        <div className="max-w-3xl mx-auto px-6 py-6">
          <p className="text-xs uppercase tracking-widest font-sans mb-1" style={{ color: "var(--text-muted)" }}>
            {today}
          </p>
          <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            Noticias
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <NewsFeed />
      </main>
    </div>
  );
}
