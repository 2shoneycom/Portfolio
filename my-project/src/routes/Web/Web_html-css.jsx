import NavBar from "../../components/NavBar";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";
import getProjectPosts from "../../utilities/getProjectPosts";
import { Link } from "react-router-dom";

function Web_htmlcss() {
  const [menuOnOff, setMenuOnOff] = useState(false);
  const posts = getProjectPosts();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />

      {/* Main Content */}
      <main className="w-full px-6 sm:px-10 lg:px-16 pt-[var(--navbar-height)]">
        {/* Breadcrumb Navigation */}
        <section className="px-6 sm:px-10 lg:px-16 pb-4">
          <div className="max-w-4xl mx-auto pt-6">
            <nav className="flex items-center space-x-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/web_courses" className="hover:text-blue-600 transition-colors duration-200">Web Courses</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-slate-800 font-medium">HTML/CSS</span>
            </nav>
          </div>
        </section>
        {/* Hero Section */}
        <section className="w-full py-16 mb-10 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
              font-bold text-gray-900 mb-4
              bg-gradient-to-r from-indigo-600 to-purple-600 
              bg-clip-text text-transparent
            ">
              HTML/CSS
            </h1>
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
                        {(post.technologies || ["React", "JavaScript", "CSS"]).slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                            {tech}
                          </span>
                        ))}
                        {(post.technologies || []).length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-medium rounded-md">
                            +{(post.technologies || []).length - 3} more
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

export default Web_htmlcss;