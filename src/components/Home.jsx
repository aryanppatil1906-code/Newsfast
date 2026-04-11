import React from 'react'
import Card from './Card'

function Home() {
  
  const articles = [
    
        {

      id : 1 ,

      category: "Technology",

      title: "The Rise of Quantum Computing in 2026",

      description: "How new breakthroughs in hardware are making quantum supremacy a daily reality for researchers.",

      author: "Alex Rivera",

      date: "Apr 9, 2026",

      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"

    }

    // Add more article objects here...

  ];
     
    
  return (
    <div>
    


 
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            The Daily Pulse
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Latest updates from around the world, curated for you.
          </p>
        </div>

        {/* Featured Story */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gray-900 text-white lg:flex">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
                alt="Featured" 
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>
            <div className="p-8 lg:w-1/2 lg:p-12 flex flex-col justify-center">
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-blue-400">
                Editor's Choice
              </span>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                Global Markets React to New Sustainable Energy Bill
              </h2>
              <p className="mb-8 text-gray-300 text-lg">
                The landmark legislation passed this morning is expected to shift billions in capital toward renewable infrastructure by the end of the fiscal year.
              </p>
              <button className="w-fit rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition-colors">
                Read Full Story
              </button>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} {...article} />
          ))}
          {/* Repeat dummy cards for visual effect */}
          <Card 
            category="Politics" 
            title="Urban Infrastructure: A 10-Year Plan" 
            description="Cities are redesigning public spaces to be more pedestrian-friendly and climate-resilient."
            author="Jordan Smith"
            date="Apr 8, 2026"
            image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80"
          />
          <Card 
            category="Health" 
            title="Mental Wellness in the AI Era" 
            description="Experts discuss the balance between digital productivity and human psychological health."
            author="Dr. Sarah Chen"
            date="Apr 7, 2026"
            image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </div>
  );


    </div>
  )
}

export default Home;
