import React from 'react'
import { Search, MoreVertical, Share2, MessageSquare, Eye, ArrowLeft, Bookmark } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Card from './Card'

function Newsfeed(){

  const API_KEY = import.meta.env.VITE_API_KEY;
  const [topic,setTopic ]= useState("India");
  const [newsData , setNewsData] = useState([]);
  const [loading,setLoading] = useState(false);
  function handleInput(e){
    e.preventDefault();
    const search = e.target.elements.searchInput.value.trim();
    if(search){
         setTopic(search);
    }


  }
  function handleCategoryChange(category){
  setTopic(category);
}
  const getData =  async()=>{
    
    try{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`)
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);}
    catch(err){
       console.log(err);
    }
    
  }

  useEffect(()=>{
       getData();
  },[topic]);

 

  return (
  
   <>
<div>

  <Navbar onSearch={handleInput} onCategoryChange ={handleCategoryChange}/>
    <Card data={newsData}/>
</div>


</>
 );
  }

export default Newsfeed;
