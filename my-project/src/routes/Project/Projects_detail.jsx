import { useParams } from "react-router-dom";
import getProjectPosts from "../../utilities/getProjectPosts";
import ReactMarkdown from "react-markdown"; // for rendering markdown
import NavBar from "../../components/NavBar";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";

function Projects_detail() {
  const { slug } = useParams();  // get the slug from URL
  const posts = getProjectPosts(); // get all posts
  const post = posts.find(p => p.slug === slug); // find the one that matches

  if (!post) return <div>Post not found</div>;

  const [menuOnOff, setMenuOnOff] = useState(false);

  return (
    <div className="relative">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar
        menuOnOff={menuOnOff}
        setMenuOnOff={setMenuOnOff}
      />
      <section className="w-full h-max px-10 pt-[var(--navbar-height)]">
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <h2 className="text-gray-500 mb-6">{post.date}</h2>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
}

export default Projects_detail;