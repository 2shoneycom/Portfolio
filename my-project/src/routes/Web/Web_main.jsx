import NavBar from "../../components/NavBar";
import MenuBar from "../../components/MenuBar";
import { useState } from "react";

function Web_main() {
  const [menuOnOff, setMenuOnOff] = useState(false);

  return (
    <div className="relative">
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar
        menuOnOff={menuOnOff}
        setMenuOnOff={setMenuOnOff}
      />
      <section className="w-full h-max px-10 pt-[var(--navbar-height)]">
        <div className="w-full h-50 my-10 flex justify-center items-center">
          <h1 className="text-6xl">Web Courses</h1>
        </div>
      </section>
    </div>
  );
}

export default Web_main;