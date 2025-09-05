import React from 'react';
import './Home.css';

function HomePage(){
  return (
    <div className='layout'>
      <div className='league'>
        <h1>League of Legend</h1>
        <a href="https://www.leagueoflegends.com/en-us/" target='_blank' rel="noreferrer" >
          <img src= "./images/leagueoflegend.jpg" alt="League of Legend" className="w-3/4 h-4/4 flex flex-col items-center object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 " />
        </a>
      </div>
      <div className='tft'>
        <h1>Teamfight Tactics</h1>
        <a href="https://teamfighttactics.leagueoflegends.com/en-us/" target='_blank' rel="noreferrer">
        <img src="./images/tft.webp" alt="Teamfight Tactics" className="w-3/4 h-4/4 object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
      <div className='poe2'>
        <h1>Path of Exile 2</h1>
        <a href="https://pathofexile2.com/home" target='_blank' rel="noreferrer">
        <img src="./images/poe2.webp" alt="Path of Exile 2" className="w-4/4 h-4/4 flex flex-col items-center object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
      <div className='warcraft'>
        <h1>World of Warcraft</h1>
        <a href="https://worldofwarcraft.blizzard.com/en-us/" target='_blank' rel="noreferrer">
        <img src="./images/warcraft.jpg" alt="World of Warcraft" className="w-4/4 h-4/4  object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 " />
        </a>
      </div>
      <div className='csgo2'>
        <h1>CSGO 2</h1>
        <a href="https://www.counter-strike.net/cs2" target='_blank' rel="noreferrer">
        <img src="./images/cs2.jpg" alt="CSGO 2" className="h-3/4 w-4/4  object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300"/>
        </a>
      </div>
      <div className='valorant'>
        <h1>Valorant</h1>
        <a href="https://playvalorant.com/en-us/" target='_blank' rel="noreferrer">
        <img src="./images/valorant.png" alt="Valorant" className="w-4/4 h-4/4 object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
      <div className='fortnite'>
        <h1>Fortnite</h1>
        <a href="https://www.fortnite.com/?lang=en-US" target='_blank' rel="noreferrer">
        <img src="./images/fortnite.jpg" alt="Fortnite" className="w-4/4 h-4/4  object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
      <div className='marvel'>
        <h1>Marvel Rivals</h1>
        <a href="https://www.marvelrivals.com/" target='_blank' rel="noreferrer">
        <img src="./images/marvelrivals.png" alt="Marvel Rivals" className="w-4/4 h-4/4  object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
      <div className='rocket'>
        <h1>Rocket League</h1>
        <a href="https://www.rocketleague.com/en/" target='_blank' rel="noreferrer">
        <img src="./images/rocketleague.webp" alt="Rocket League" className="w-4/4 h-4/4  object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
      <div className='minecraft'>
        <h1>Minecraft</h1>
        <a href="https://www.minecraft.net/en-us" target='_blank' rel="noreferrer">
        <img src="./images/minecraft.webp" alt="Minecraft" className=" w-4/4 h-4/4  object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
      <div className='escape'>
        <h1>Escape from Tarkov</h1>
        <a href="https://www.escapefromtarkov.com/" target='_blank' rel="noreferrer">
        <img src="./images/escape.jpg" alt="Escape from Tarkov" className="w-4/4 h-4/4 flex flex-col items-center  object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
      <div className='overwatch'>
        <h1>Overwatch 2</h1>
        <a href="https://overwatch.blizzard.com/en-us/" target='_blank' rel="noreferrer">
        <img src="./images/overwatch.png" alt="Overwatch 2" className="w-4/4 h-4/4 flex flex-col items-center object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300 "/>
        </a>
      </div>
    </div>
  )

}

export default HomePage;