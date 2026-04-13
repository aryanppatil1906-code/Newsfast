import React, { useState } from 'react';
import Article from './Article';

const Card = ({ data }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (!data || data.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 font-medium">
        No news articles found
      </div>
    );
  }

  return (
    <>
      {/* 📰 GRID */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((current, index) => {
          if (!current.urlToImage) return null;

          return (
            <div
              key={current.url || index}
              className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* 🖼 Image */}
              <div className="relative overflow-hidden h-52 w-full bg-gray-200">
                <img
                  src={current.urlToImage}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* 📄 Content */}
              <div className="p-5 flex flex-col flex-grow">

                {/* Meta */}
                <div className="flex items-center space-x-2 mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span className="text-red-600 border-l-2 border-red-600 pl-2">
                    {current.author || "Global News"}
                  </span>
                  <span>•</span>
                  <span>
                    {current.publishedAt
                      ? new Date(current.publishedAt).toLocaleDateString()
                      : "Today"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-extrabold text-gray-900 text-lg leading-tight group-hover:text-red-600 transition-colors line-clamp-2 min-h-[3rem]">
                  {current.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {current.description || "Click to read full news..."}
                </p>

                {/* 🔗 Read More */}
                <div className="mt-auto pt-5 flex items-center text-red-600 font-bold text-xs uppercase tracking-widest gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <a onClick={() => window.open(current.url)}>
                    Read more
                  </a>
                </div>

                {/* ✨ Summarize Button */}
                <button
                  onClick={() => setSelectedArticle(current)}
                  className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
                >
                  ✨ Summarize
                </button>

              </div>
            </div>
          );
        })}
      </div>

      {/* 🧠 SLIDING PANEL */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-end z-50">

          {/* Panel */}
          <div className="bg-white w-full max-w-2xl rounded-t-xl p-5 animate-slideUp shadow-xl">

            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg">
                AI Summary
              </h2>
              <button onClick={() => setSelectedArticle(null)}>
                ❌
              </button>
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold mb-2 text-gray-700">
              {selectedArticle.title}
            </h3>

            {/* Summary */}
            <Article content={selectedArticle.description} />

          </div>
        </div>
      )}
    </>
  );
};

export default Card;