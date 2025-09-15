import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown"; // for rendering markdown
import NavBar from "../../components/NavBar";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";
import getHTMLCSSPosts from "../../utilities/getHTMLCSSPosts";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/a11y-dark.css"

function Web_detail() {
  const navigate = useNavigate();
  const { slug } = useParams();  // get the slug from URL
  const posts = getHTMLCSSPosts(); // get all posts
  const post = posts.find(p => p.slug === slug); // find the one that matches
  const [menuOnOff, setMenuOnOff] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Project Not Found</h1>
            <p className="text-slate-600 mb-6">The project you're looking for doesn't exist.</p>
            <div
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              onClick={() => navigate(-1)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Projects</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />

      {/* Main Content */}
      <main className="w-full min-h-screen">
        {/* Breadcrumb Navigation */}
        <section className="px-6 sm:px-10 lg:px-16 pt-[var(--navbar-height)] pb-4">
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
              <Link to="/web_courses/html-css" className="hover:text-blue-600 transition-colors duration-200">HTML/CSS</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-slate-800 font-medium">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Project Hero Section */}
        <section className="px-6 sm:px-10 lg:px-16 pb-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/web_courses/html-css"
              className="inline-flex items-center space-x-2 mb-8 px-4 py-2 text-slate-600 hover:text-blue-600 font-medium rounded-lg hover:bg-white/50 transition-all duration-200 group"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </Link>

            {/* Project Header */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg mb-8">
              <div className="space-y-6">
                {/* Title and Meta */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      {post.category || "Web"}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
                    {post.title}
                  </h1>

                  <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                    {post.description || "A comprehensive project showcasing modern development practices and innovative solutions."}
                  </p>
                </div>

                {/* Project Meta Information */}
                <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-200/50">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{post.date || "2024.12.15"}</span>
                  </div>
                </div>

                {/* Technologies */}
                {(post.technologies || ["React", "JavaScript", "CSS"]).length > 0 && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {(post.tags || ["HTML"]).map((tech, index) => (
                        <span key={index} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="px-6 sm:px-10 lg:px-16 pb-16">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg overflow-hidden">
              {/* Markdown Content */}
              <div className="p-8">
                <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-slate-800 prose-pre:text-slate-100 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-ul:text-slate-600 prose-ol:text-slate-600 prose-li:text-slate-600 prose-img:w-max md:prose-img:w-1/2 prose-video:w-max">
                  <ReactMarkdown
                    rehypePlugins={[rehypeHighlight, rehypeRaw]}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

              </div>
            </article>
          </div>
        </section>

        {/* Footer Spacer */}
        <div className="h-16"></div>
      </main>
    </div>
  );
}

export default Web_detail;