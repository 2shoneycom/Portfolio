function PostItem({ 
  title = "Post Title", 
  date = "2024.12.15", 
  category = "Article",
  readTime = "5 min read",
  image = "/api/placeholder/300/200"
}) {
  return (
    <div className="group relative w-full bg-white rounded-xl shadow-md hover:shadow-2xl border border-slate-200/50 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
        {/* Placeholder Image */}
        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center">
          <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold rounded-full border border-blue-200/50">
            {category}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {readTime}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight">
            {title}
          </h3>
        </div>

        {/* Meta Information */}
        <div className="flex items-center justify-between pt-2">
          {/* Date */}
          <div className="flex items-center space-x-2 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">{date}</span>
          </div>

          {/* Arrow Icon */}
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-200">
            <svg className="w-4 h-4 text-slate-600 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}

export default PostItem;