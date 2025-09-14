import NavBar from "../../components/NavBar";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";
import getProjectPosts from "../../utilities/getProjectPosts";
import { Link } from "react-router-dom";

function Projects_main() {
  const [menuOnOff, setMenuOnOff] = useState(false);
  const posts = getProjectPosts();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      
      {/* Main Content */}
      <main className="w-full min-h-screen">
        {/* Hero Section */}
        <section className="relative px-6 sm:px-10 lg:px-16 pt-[var(--navbar-height)] pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="pt-16 pb-12 lg:pt-24 lg:pb-16">
              {/* Hero Content */}
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                    Portfolio Showcase
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
                    My Projects
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
                    Explore my creative works, technical projects, and innovative solutions. 
                    Each project represents a unique challenge and learning experience.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{posts.length}+</div>
                    <div className="text-slate-500 font-medium">Projects</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600">5+</div>
                    <div className="text-slate-500 font-medium">Technologies</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-slate-300"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">2+</div>
                    <div className="text-slate-500 font-medium">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Decorations */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </section>

        {/* Filter/Search Section */}
        <section className="px-6 sm:px-10 lg:px-16 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-semibold text-slate-800">Filter Projects</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-200">
                      All
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200 transition-colors duration-200">
                      Web Dev
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200 transition-colors duration-200">
                      Design
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200 transition-colors duration-200">
                      Mobile
                    </button>
                  </div>
                </div>
                
                {/* Search Bar */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search projects..." 
                    className="w-64 px-4 py-2 pl-10 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="px-6 sm:px-10 lg:px-16 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link to={`${post.slug}`} key={post.slug} className="group">
                  <article className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl border border-slate-200/50 overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                    {/* Project Image/Preview */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 overflow-hidden">
                      {/* Placeholder Content */}
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <svg className="w-16 h-16 text-white/80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                          <div className="text-white/60 text-sm font-medium">Project {index + 1}</div>
                        </div>
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                      
                      {/* Project Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                          Completed
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      {/* Title and Date */}
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight">
                          {post.title || `Project ${index + 1}`}
                        </h2>
                        <div className="flex items-center space-x-2 text-slate-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium">{post.date || "2024.12.15"}</span>
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                        {post.description || "A comprehensive project showcasing modern development practices and innovative solutions."}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {(post.tags || ["React", "JavaScript", "CSS"]).slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                            {tech}
                          </span>
                        ))}
                        {(post.tags || []).length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-medium rounded-md">
                            +{(post.tags || []).length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <div className="flex items-center space-x-3 text-slate-500">
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="text-xs">View</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="text-xs">Demo</span>
                          </div>
                        </div>
                        
                        <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-200">
                          <svg className="w-4 h-4 text-slate-600 group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none"></div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Load More Section */}
        <section className="px-6 sm:px-10 lg:px-16 pb-16">
          <div className="max-w-7xl mx-auto text-center">
            <button className="px-8 py-4 bg-white/60 hover:bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-xl border border-slate-200/50 hover:border-slate-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
              Load More Projects
            </button>
          </div>
        </section>

        {/* Footer Spacer */}
        <div className="h-16"></div>
      </main>
    </div>
  );
}

export default Projects_main;