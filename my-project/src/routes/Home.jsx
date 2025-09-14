import { useState } from 'react';
import MenuBar from '../components/MenuBar';
import NavBar from '../components/NavBar';
import PostList from '../components/PostList';

function Home() {
  const [menuOnOff, setMenuOnOff] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <NavBar
        menuOnOff={menuOnOff}
        setMenuOnOff={setMenuOnOff}
      />
      <MenuBar
        menuOnOff={menuOnOff}
        setMenuOnOff={setMenuOnOff}
      />

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
                    Portfolio & Blog
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
                    Welcome to Sean's
                    <span className="block text-blue-600">Creative Space</span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
                    Discover my journey through design, development, and creative storytelling.
                    Explore projects, insights, and inspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </section>

        {/* Posts Section */}
        <section className="px-6 sm:px-10 lg:px-16 py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Latest Posts & Projects
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Explore my recent work, thoughts, and creative experiments
              </p>
            </div>

            <div className="grid gap-8 lg:gap-12">
              <div className="transform transition-transform duration-300">
                <PostList />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Spacer */}
        <div className="h-16"></div>
      </main>
    </div>
  );
}

export default Home;