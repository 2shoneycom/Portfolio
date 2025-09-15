import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import MenuBar from "../../components/MenuBar";
// Course categories data - moved outside component for better organization
const courseCategories = [
  
];

// Reusable CategoryCard component
const CategoryCard = ({ category }) => (
  <Link
    to={category.id}
    className="group block transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <div className={`
      relative overflow-hidden rounded-xl border-2 p-6 h-32
      ${category.bgColor} ${category.borderColor} ${category.hoverColor}
      transition-all duration-300
    `}>
      {/* Gradient overlay */}
      <div className={`
        absolute inset-0 bg-gradient-to-r ${category.gradient} 
        opacity-0 group-hover:opacity-10 transition-opacity duration-300
      `} />

      <div className="relative flex items-center gap-4 h-full">
        {/* Icon container */}
        <div className="
          flex-shrink-0 w-16 h-16 rounded-lg bg-white shadow-sm
          flex items-center justify-center text-2xl
          group-hover:shadow-md transition-shadow duration-300
        ">
          {category.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-gray-900">
            {category.title}
          </h2>
          <p className="text-sm text-gray-600 group-hover:text-gray-700">
            {category.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="
          flex-shrink-0 w-8 h-8 rounded-full bg-white/50 
          flex items-center justify-center opacity-0 
          group-hover:opacity-100 transition-all duration-300
          transform translate-x-2 group-hover:translate-x-0
        ">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </Link>
);

function Algorithm_main() {
  const [menuOnOff, setMenuOnOff] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />

      <main className="w-full px-6 sm:px-10 lg:px-16 pt-[var(--navbar-height)]">
        {/* Hero Section */}
        <section className="w-full py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
              font-bold text-gray-900 mb-4
              bg-gradient-to-r from-indigo-600 to-purple-600 
              bg-clip-text text-transparent
            ">
              Algorithm Section
            </h1>
          </div>
        </section>

        {/* Courses Section */}
        <section className="w-full pb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Choose Your Path
            </h2>
            <p className="text-gray-600">
              Select a technology to start your learning journey
            </p>
          </div>

          <div className="
            grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
            gap-6 lg:gap-8
          ">
            {courseCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Algorithm_main;