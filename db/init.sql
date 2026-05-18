CREATE TABLE IF NOT EXISTS news (
    id          SERIAL PRIMARY KEY,
    title       TEXT NOT NULL,
    summary     TEXT,
    url         TEXT NOT NULL UNIQUE,
    source      TEXT,
    image_url   TEXT,
    published_at TIMESTAMPTZ NOT NULL,
    relevance_score FLOAT NOT NULL DEFAULT 0,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_news_published_at ON news (published_at DESC);
CREATE INDEX IF NOT EXISTS idx_news_relevance ON news (relevance_score DESC);
