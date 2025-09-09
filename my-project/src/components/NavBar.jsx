import '../styles/style.css';
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

function NavBar({ menuOnOff, setMenuOnOff }) {
  const onClick = () => {
    setMenuOnOff(!menuOnOff);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 px-6 py-3 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      {/* Menu Button */}
      <div
        className="group relative size-11 flex justify-center items-center rounded-xl hover:bg-slate-100 hover:cursor-pointer transition-all duration-200 hover:scale-105"
        onClick={onClick}
      >
        <Bars3Icon className={`h-6 w-6 transition-all duration-200 ${
          menuOnOff 
            ? 'text-blue-600 rotate-90' 
            : 'text-slate-700 group-hover:text-blue-600'
        }`} />
      </div>

      {/* Brand/Title */}
      <div className="flex-1 flex justify-center sm:justify-start sm:ml-4">
        <Link 
          to="/" 
          className="group flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all duration-200 hover:scale-105"
        >
          <div className="flex items-center space-x-3">
            {/* Logo/Avatar */}
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <h1 className="font-bold text-xl bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-200">
                Sean's
              </h1>
              <span className="text-xs text-slate-500 font-medium tracking-wide hidden sm:block">
                Portfolio
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation Links - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:flex items-center space-x-1 mr-4">
        <Link 
          to="/projects" 
          className="px-4 py-2 text-slate-600 hover:text-blue-600 font-medium rounded-lg hover:bg-slate-50 transition-all duration-200"
        >
          Projects
        </Link>
        <Link 
          to="/about" 
          className="px-4 py-2 text-slate-600 hover:text-blue-600 font-medium rounded-lg hover:bg-slate-50 transition-all duration-200"
        >
          About
        </Link>
      </div>

      {/* GitHub Link */}
      <div className="flex items-center space-x-3">
        <a 
          href="https://github.com/2shoneycom" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group size-11 flex justify-center items-center rounded-xl hover:bg-slate-100 transition-all duration-200 hover:scale-105 relative overflow-hidden"
        >
          {/* GitHub Icon SVG */}
          <svg 
            className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors duration-200" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-xl"></div>
        </a>

        {/* Contact Button - Visible on larger screens */}
        <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">Contact</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;