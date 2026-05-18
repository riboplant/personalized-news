import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: NextRequest) {
  const period = req.nextUrl.searchParams.get("period");
  const intervalDays = period === "week" ? 7 : 1;

  try {
    const { rows } = await pool.query(
      `SELECT id, title, summary, url, source, image_url, published_at, relevance_score
       FROM news
       WHERE published_at >= NOW() - ($1 || ' days')::INTERVAL
       ORDER BY relevance_score DESC
       LIMIT 50`,
      [intervalDays],
    );

    return NextResponse.json({ news: rows });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Error fetching news" }, { status: 500 });
  }
}
