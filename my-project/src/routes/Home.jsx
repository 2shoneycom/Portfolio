import { useState } from 'react';
import MenuBar from '../components/MenuBar';
import NavBar from '../components/NavBar';
import '../styles/style.css';
import PostList from '../components/PostList';

function Home() {
  const [menuOnOff, setMenuOnOff] = useState(false);

  return (
    <div className="relative">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar menuOnOff={menuOnOff} />
      <section className="w-full h-max px-10 pt-[var(--navbar-height)]">
        <article className="w-full h-max my-10 flex flex-col bg-amber-300">
          <div className="w-full basis-40 bg-amber-400">
            <h1 className="text-6xl ">Welcome to Sean's Portfolio Website!</h1>
          </div>
        </article>
        <PostList />
        <PostList />
        <PostList />
      </section>
    </div>
  )
}

export default Home;