import NavBar from "../../components/NavBar";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";
import getProjectPosts from "../../utilities/getProjectPosts";
import { Link } from "react-router-dom";

function Projects_main() {
  const [menuOnOff, setMenuOnOff] = useState(false);
  const posts = getProjectPosts();

  return (
    <div className="relative">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar
        menuOnOff={menuOnOff}
        setMenuOnOff={setMenuOnOff}
      />
      <section className="w-full h-max px-10 pt-[var(--navbar-height)]">
        <div className="w-full h-50 my-10 flex justify-center items-center">
          <h1 className="text-6xl">Projects</h1>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) =>
            <Link to={`${post.slug}`}>
              <div className="w-full mb-4 h-60 border-1 bg-fuchsia-400" key={post.slug}>
                <h2>{post.title}</h2>
                <h2>{post.date}</h2>
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default Projects_main;