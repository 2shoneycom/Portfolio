import NavBar from "../../components/NavBar";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";
import getHTMLCSSPosts from "../../utilities/getHTMLCSSPosts";
import { Link, useParams } from "react-router-dom";
import getHTMLCSSPosts_custom_order from "../../utilities/getHTMLCSSPosts_custom_order";
import getNodejsPosts from "../../utilities/getNodejsPosts";
import getReactPosts from "../../utilities/getReactPosts";

function Web_subsection() {
  const [menuOnOff, setMenuOnOff] = useState(false);

  // get url parameter -> decide category -> decide some values
  const { category } = useParams();
  var posts = null;
  var title = null;
  switch (category) {
    case "html-css":
      // const posts = getHTMLCSSPosts_custom_order();
      posts = getHTMLCSSPosts();
      title = "HTML/CSS";
      break;
    case "nodejs":
      posts = getNodejsPosts();
      title = "NodeJS"
      break;
    case "react":
      posts = getReactPosts();
      title = "React"
      break;
  }


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />

      {/* Main Content */}
      <main className="w-full px-6 sm:px-10 lg:px-16 pt-[var(--navbar-height)]">
        {/* Breadcrumb Navigation */}
        <section className="px-6 sm:px-10 lg:px-16 pb-4">
          <div className="mx-auto pt-6">
            <nav className="flex items-center space-x-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/web_courses" className="hover:text-blue-600 transition-colors duration-200">Web Courses</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-slate-800 font-medium">{title}</span>
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
              {title}
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
                            +{(post.technologies || []).length - 3} more
                          </span>
                        )}
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

export default Web_subsection;