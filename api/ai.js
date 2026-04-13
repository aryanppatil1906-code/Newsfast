export const summarizeText = async (articleContent) => {
  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ articleContent })
    });

    const data = await response.json();

    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available";

  } catch (error) {
    console.log(error);
    return "Something went wrong";
  }
};