export default async function handler(req, res) {
  try {
    const { articleContent } = req.body || {};

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.AI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Summarize this news in 3 bullet points: ${articleContent}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    console.log("AI ERROR:", error);
    res.status(500).json({ error: "AI API failed" });
  }
}