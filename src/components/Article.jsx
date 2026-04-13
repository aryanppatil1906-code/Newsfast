import React, { useEffect, useState } from "react";
import { summarizeText } from "../utils/aiservice";

const Article = ({ content }) => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      if (!content) return;

      setLoading(true);
      const result = await summarizeText(content);
      setSummary(result);
      setLoading(false);
    };

    fetchSummary();
  }, [content]);

  return (
    <div className="mt-2">
      
      {loading ? (
        <p className="text-sm text-gray-500">Generating summary...</p>
      ) : (
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {summary}
        </p>
      )}

    </div>
  );
};

export default Article;