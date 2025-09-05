import { useState } from 'react';
import MenuBar from '../components/MenuBar';
import NavBar from '../components/NavBar';
import '../styles/style.css';

function Home() {
  const [menuOnOff, setMenuOnOff] = useState(false);

  return (
    <div>
      <NavBar menuOnOff={menuOnOff} setMenuOnOff={setMenuOnOff} />
      <MenuBar menuOnOff={menuOnOff} />
    </div>
  )
}

export default Home;