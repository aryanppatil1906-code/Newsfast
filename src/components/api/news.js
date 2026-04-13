export default async function handler(req, res) {
  try {
    // 1. Get topic from frontend request
    const topic = req.query.topic || "india";

    // 2. Build API URL (same as your frontend logic)
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(topic)}&apiKey=${process.env.NEWS_API_KEY}`;

    // 3. Call NewsAPI
    const response = await fetch(url);

    // 4. Convert response to JSON
    const data = await response.json();

    // 5. Send data back to frontend
    res.status(200).json(data);

  } catch (error) {
    // 6. Handle errors
    res.status(500).json({ error: "News API failed" });
  }
}