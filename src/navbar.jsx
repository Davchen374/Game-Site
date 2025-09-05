import './navbar.css';
import { Link } from "react-router-dom"
import React, {useState} from 'react'; 
function NavBar(){
  const [navBar, setNavBar] = useState('home');
  const colors = {
    home: 'white',
    games: 'white',
    about: 'white',
    contact: 'white'
  };
  return (
    <div>
    <nav className='navbar' style={{backgroundColor: colors[navBar]}}>
      <h1 className='h1bar'>Gime</h1>
      <ul style={{listStyleType:'none'}} className='ulbar'>
        <li onClick={() => setNavBar('home')}>
          <Link to='/HomePage'>Home</Link>
        </li>
        <li onClick={() => setNavBar('games')}>
          <Link to='/GameSite'>Games</Link>
        </li>
        <li onClick={() => setNavBar('about')}>
          <Link to='/myAbout'>About</Link>
        </li>
        <li onClick={() => setNavBar('contact')}>
          <Link to='./MyContact'>Contact</Link>
        </li>
      </ul>
    </nav>
  
  </div>

  )
}

export default NavBar;