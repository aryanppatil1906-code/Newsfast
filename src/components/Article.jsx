import React, { useState } from 'react';
import { summarizeText } from './aiService';

const Article = ({ content }) => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCloseSummary = () => {
    setSummary(""); // Clear the summary
  };

  const handleSummarize = async () => {
    setLoading(true);
    const result = await summarizeText(content);
    setSummary(result);
    setLoading(false);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <button 
        onClick={handleSummarize}
        disabled={loading}
        className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 disabled:bg-gray-400"
      >
        {loading ? "AI is thinking..." : "✨ Summarize with AI"}
      </button>
       //short circuit rendering
      {summary && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-600 animate-fade-in relative">
          {/* Close Button - Positioned absolutely in top-right */}
          <button 
            onClick={handleCloseSummary}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold text-xl leading-none"
            title="Close summary"
          >
            ×
          </button>
          
          <h4 className="font-bold text-red-800 mb-2 pr-8">AI Summary:</h4>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Article;