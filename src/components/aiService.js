export const summarizeText = async (articleContent) => {
  const API_KEY = "AIzaSyBETGY53NI_rACV-xYyEtg2mV-u5rSGCB4";
  // Updated model to gemini-3-flash-preview
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{
      parts: [{ text: `Summarize this news in 3 bullet points: ${articleContent}` }]
    }]
  };

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (data.error) {
      return `AI Error: ${data.error.message}`;
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    return "Something went wrong with the connection.";
  }
};