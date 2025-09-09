import { useState } from "react";
import { Link } from "react-router-dom";

function MenuBar({ menuOnOff, setMenuOnOff }) {
  const [menuList, setMenuList] = useState([
    "Projects", "Web", "Languages", "Algorithms", "Git"
  ]);

  let linkList = ["projects", "web_courses", "languages", "algorithms", "git_courses"];

  // Icon mapping for each menu item
  const iconMap = {
    "Projects": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    "Web": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    "Languages": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    "Algorithms": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    "Git": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  };

  return (
    <>
      {/* Backdrop Overlay */}
      {menuOnOff && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => {
            setMenuOnOff(false);
          }} // Could add close menu functionality here
        />
      )}

      {/* Menu Panel */}
      <div className={`fixed top-[var(--navbar-height)] left-0 h-[calc(100vh-var(--navbar-height))] bg-white/95 backdrop-blur-md border-r border-slate-200/50 shadow-2xl z-50 transform transition-all duration-300 ease-in-out ${menuOnOff
          ? 'translate-x-0 opacity-100'
          : '-translate-x-full opacity-0 pointer-events-none'
        } w-80 sm:w-72`}>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuList.map((item, index) => (
              <li key={index} className="group">
                <Link
                  to={`/${linkList[index]}`}
                  className="flex items-center space-x-4 w-full p-4 rounded-xl hover:bg-slate-100 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:border-transparent transition-all duration-200">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-200">
                      {iconMap[item]}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                      {item}
                    </h3>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-200 truncate">
                      {item === "Projects" && "View my latest work"}
                      {item === "Web" && "Web development courses"}
                      {item === "Languages" && "Programming languages"}
                      {item === "Algorithms" && "Algorithm challenges"}
                      {item === "Git" && "Version control tutorials"}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MenuBar;