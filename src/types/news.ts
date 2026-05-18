export interface NewsItem {
  id: number;
  title: string;
  summary: string | null;
  url: string;
  source: string | null;
  image_url: string | null;
  published_at: string;
  relevance_score: number;
}
