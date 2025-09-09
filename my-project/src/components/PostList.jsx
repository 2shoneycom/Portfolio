import { useState, useRef } from "react";
import PostItem from "./PostItem";

function PostList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  
  const posts = [
    {
      title: "Building Modern React Apps",
      date: "2024.12.15",
      category: "Development",
      readTime: "5 min read",
    },
    {
      title: "UI/UX Design Principles",
      date: "2024.12.10",
      category: "Design",
      readTime: "8 min read",
    },
    {
      title: "JavaScript Best Practices",
      date: "2024.12.05",
      category: "Programming",
      readTime: "6 min read",
    },
    {
      title: "Web Performance Tips",
      date: "2024.11.28",
      category: "Optimization",
      readTime: "4 min read",
    },
    {
      title: "CSS Grid Mastery",
      date: "2024.11.20",
      category: "CSS",
      readTime: "7 min read",
    },
    {
      title: "Node.js Best Practices",
      date: "2024.11.15",
      category: "Backend",
      readTime: "6 min read",
    }
  ];

  // Calculate items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3; // xl screens
      if (window.innerWidth >= 768) return 2;  // md screens
      return 1; // sm screens
    }
    return 3;
  };

  const itemsPerView = getItemsPerView();
  const maxIndex = Math.max(0, posts.length - itemsPerView);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goToNext = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <article className="w-full max-w-7xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden">
      {/* Section Header */}
      <div className="px-6 sm:px-8 py-6 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                Latest Posts
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                Discover recent articles and insights
              </p>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={goToPrev}
              disabled={!canGoPrev}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                canGoPrev 
                  ? 'border-slate-300 hover:border-blue-500 text-slate-600 hover:text-blue-600 hover:bg-blue-50' 
                  : 'border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              disabled={!canGoNext}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                canGoNext 
                  ? 'border-slate-300 hover:border-blue-500 text-slate-600 hover:text-blue-600 hover:bg-blue-50' 
                  : 'border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* View All Button - Hidden on small screens */}
            <button className="hidden lg:flex items-center space-x-2 ml-4 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200 group">
              <span>View All</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Posts Container */}
      <div className="p-6">
        <div>
          <div 
            ref={containerRef}
            className="flex justify-start transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {posts.map((post, index) => (
              <div key={index} className="flex-shrink-0">
                <PostItem {...post} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-500 w-6' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default PostList;