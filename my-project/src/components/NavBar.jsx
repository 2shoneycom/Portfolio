import { useState } from 'react';
import '../styles/style.css';
import { Bars3Icon } from "@heroicons/react/24/outline";

function NavBar({ menuOnOff, setMenuOnOff }) {
  const onClick = () => {
    setMenuOnOff(!menuOnOff);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-15 px-4 py-2 flex justify-between items-center z-10 bg-gray-800">
      {/* menu button */}
      <div
        className="size-[44px] flex justify-center items-center rounded-md hover:bg-white/5 hover:cursor-pointer"
        onClick={onClick}
      >
        <Bars3Icon className="h-6 w-6 text-gray-700" />
      </div>
      {/* title */}
      <div className="w-fit px-2 font-bold text-2xl text-gray-100 sm:grow">
        Sean's
      </div>
      {/* github link */}
      <div className="size-[44px] flex justify-center items-center">
        <img
          className="w-full h-full"
          src={"/img/github_link.jpg"}
        />
      </div>
    </nav>
  );
}

export default NavBar;