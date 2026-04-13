export default async function handler(req, res) {
  try {
    // 1. Get text from frontend
    const { articleContent } = req.body;

    // 2. Call Gemini API
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

    // 3. Convert response
    const data = await response.json();

    // 4. Send summary
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "AI API failed" });
  }
}