import { useState } from 'react';
import handleInput from './Newsfeed.jsx';
const Navbar = ({onSearch,onCategoryChange}) => {
  // Logic for the sticky effect can be added here
  const categories = ["Home", "India","World","Tech", "Science", "Politics", "Sports", "Health", "Entertainment"];
   

  return (
    <div className="flex flex-col w-full">
      {/* --- TOP BAR: Logo | Centered Search | User --- */}
      <div className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-10">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="flex space-x-1 cursor-pointer">
              {["N", "E", "W", "S"].map((char) => (
                <span key={char} className="bg-[#D12127] text-white font-black px-3 py-1 text-2xl tracking-tighter shadow-sm">
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* THE BIG CENTERED SEARCH BAR */}
          <form onSubmit={onSearch}>
          <div className="flex-grow max-w-3xl relative">
            <div className="relative flex items-center group">
              {/* Search Icon */}
              <div className="absolute left-4 text-gray-400 group-focus-within:text-[#D12127] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input 
                type="text" 
                name="searchInput"
                placeholder="Search for news, topics, or ask a question..." 
                className="w-full bg-gray-50 border-2 border-transparent rounded-2xl py-3.5 pl-14 pr-16 text-lg transition-all
                           focus:bg-white focus:border-[#D12127] focus:ring-4 focus:ring-red-50 outline-none"
                 
              />

              {/* VOICE NAV MICROPHONE BUTTON */}
              <button 
              type = "submit"
                title=" Search"
                className="absolute right-3 p-2 bg-gray-100 rounded-xl hover:bg-red-100 group-hover:bg-[#D12127] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
            </form>
          {/* User Profile/Login */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            <button className="text-sm font-bold text-gray-700 hover:text-[#D12127]"></button>
            
          </div>

        </div>
      </div>

      {/* --- STICKY CATEGORY BAR --- */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <ul className="flex items-center justify-center space-x-10 py-4 text-[13px] font-extrabold uppercase tracking-widest text-gray-500">
            {categories.map((item) => (
              <li key={item} className="whitespace-nowrap cursor-pointer hover:text-black transition-colors relative group">
                <button value={item} onClick={()=>{
                    onCategoryChange(item);
                }}>{item}</button>
                <span className="absolute -bottom-[17px] left-0 w-0 h-[3px] bg-[#D12127] transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;