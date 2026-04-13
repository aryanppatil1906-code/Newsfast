import React from 'react';
import Article from './Article';
const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="p-8 text-center text-gray-500 font-medium">No news articles found</div>;
  }

  return (
    
    /* 1. The Grid Container: 1 column on mobile, 2 on tablet, 3 on desktop */
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((current, index) => {
        // Logic: You can make the first item a "Feature" automatically
        const isFeature = index === 0; 
         if(!current.urlToImage){
      return null;
    }else
      {return (
          /* 2. The Card Wrapper: Adds shadow, border, and white background */
          <div 
            key={current.url || index} 
            className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Image Container: Fixed height ensures all cards look uniform */}
            <div className="relative overflow-hidden h-52 w-full bg-gray-200">
              <img 
                src={current.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image'} 
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Optional: Subtle gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content Section: Padding keeps text away from edges */}
            <div className="p-5 flex flex-col flex-grow">
              
              {/* Author & Meta */}
              <div className="flex items-center space-x-2 mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span className="text-red-600 border-l-2 border-red-600 pl-2">
                  {current.author || "Global News"}
                </span>
                <span>•</span>
                <span>{current.publishedAt ? new Date(current.publishedAt).toLocaleDateString() : 'Today'}</span>
              </div>

              {/* Title: line-clamp-2 prevents long titles from breaking the grid */}
              <h3 className="font-serif font-extrabold text-gray-900 text-lg leading-tight group-hover:text-red-600 transition-colors line-clamp-2 min-h-[3rem]">
                {current.title}
              </h3>

              {/* Description: line-clamp-3 keeps the bottom aligned */}
              <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                {current.description || "Click to read the full coverage of this developing story..."}
              </p>
                    
              {/* Read More Link: Pushes itself to the bottom of the card */}
              <div className="mt-auto pt-5 flex items-center text-red-600 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
               <a onClick={()=>{
                window.open(current.url)
               }}>Read more</a>
                 <div className="mt-4">
                   < Article content={current.description} />
                     </div> 
               </div>
               
              </div>
            </div>
          
        );}
      })}
    </div>
  );
};

export default Card;