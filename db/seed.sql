INSERT INTO news (title, summary, url, source, published_at, relevance_score) VALUES
(
  'OpenAI supera $25B en ingresos y prepara su IPO',
  'OpenAI superó los $25 mil millones de ingresos anualizados y estaría dando los primeros pasos hacia una salida a bolsa, potencialmente para fines de 2026.',
  'https://aitoolsrecap.com/Blog/MayNews2026.aspx',
  'AI Tools Recap',
  '2026-05-11 12:00:00+00',
  0.8
),
(
  'GPT-5.4: agente autónomo que supera al humano en tareas de desktop',
  'OpenAI lanzó GPT-5.4 con contexto de 1M de tokens y ejecución autónoma de workflows multi-paso. Sacó 75% en OSWorld-V, por encima del baseline humano de 72,4%.',
  'https://www.crescendo.ai/news/latest-ai-news-and-updates',
  'Crescendo AI',
  '2026-05-09 12:00:00+00',
  0.9
),
(
  'AWS + Coinbase + Stripe: agentes de IA que pagan solos en USDC',
  'AgentCore Payments permite que agentes paguen micropagos en stablecoins de forma autónoma para acceder a APIs y datos, sin integraciones de billing custom.',
  'https://www.marketingprofs.com/opinions/2026/54655/ai-update-may-8-2026-ai-news-and-views-from-the-past-week',
  'MarketingProfs',
  '2026-05-08 12:00:00+00',
  0.9
),
(
  'Anthropic duplica límites de Claude Code y suma compute de SpaceX',
  'Se duplicaron los límites de uso de Claude Code en todos los planes, se eliminaron restricciones en horas pico y se subieron los límites de API para modelos Opus.',
  'https://aiagentstore.ai/ai-agent-news/daily/2026-05-07',
  'AI Agent Store',
  '2026-05-07 12:00:00+00',
  0.8
),
(
  'Economía argentina: crecimiento casi nulo e incertidumbre al alza',
  'La UdeSA publicó que el PBI creció apenas 0,03% en Q1. El índice de incertidumbre económica subió 9,7% en mayo a 143,5. Redrado proyecta solo 2% de crecimiento anual.',
  'https://www.ambito.com/economia/estancada-y-aumento-la-incertidumbre-dos-nuevos-indicadores-marcan-el-arranque-2026-n6276755',
  'Ámbito',
  '2026-05-13 12:00:00+00',
  0.7
),
(
  'Dólar y riesgo país hoy',
  'Dólar oficial $1.420, blue $1.415, MEP $1.428. Riesgo país en 538 puntos, con suba de 2,1% en las últimas 24hs.',
  'https://www.infobae.com/economia/',
  'Infobae',
  '2026-05-17 12:00:00+00',
  0.6
),
(
  'Guerra Irán-EE.UU.-Israel: Ormuz sigue cerrado y Trump amenaza con reanudar ataques',
  'Trump está frustrado con las negociaciones y evalúa retomar operaciones. Saudi Aramco advirtió que si Ormuz no se reabre pronto, el mercado energético no se normaliza hasta 2027. Trump visita China esta semana antes de cualquier avance con Irán.',
  'https://cnnespanol.cnn.com/2026/05/11/mundo/live-news/guerra-ee-uu-e-israel-iran-vivo-trax',
  'CNN en Español',
  '2026-05-12 12:00:00+00',
  1.0
),
(
  'ETFs de BTC con mayor salida desde enero + CLARITY Act aprobada en Senado',
  'El 13 de mayo los ETFs spot de BTC registraron salidas de $635M en un día. En paralelo, el Comité Bancario del Senado aprobó la CLARITY Act con apoyo bipartidista, lo que daría marco regulatorio al mercado cripto.',
  'https://es.beincrypto.com/resumen-noticias-bitcoin-criptomonedas-15-mayo-2026/',
  'BeInCrypto',
  '2026-05-15 12:00:00+00',
  0.8
)
ON CONFLICT (url) DO UPDATE SET
  title          = EXCLUDED.title,
  summary        = EXCLUDED.summary,
  source         = EXCLUDED.source,
  published_at   = EXCLUDED.published_at,
  relevance_score = EXCLUDED.relevance_score;
