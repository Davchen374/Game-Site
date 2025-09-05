import NavBar from './navbar';
import HomePage from './Home';
import GameSite from './Game';
import MyAbout from './About';
import MyContact from './Contact';
import MyAuth from './auth';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function MyGames(){
  return (
    <div>
    <BrowserRouter>
      <NavBar/>
      <MyAuth/>
      <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/HomePage' element={<HomePage />}/>
      <Route path='/GameSite' element={<GameSite />}/>
      <Route path='/MyAbout' element={<MyAbout />}/>
       <Route path='/MyContact' element={<MyContact />}/>
      </Routes> 
    </BrowserRouter>
    </div>

  )
};

export default MyGames;



