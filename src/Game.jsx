
import React, {useState, useEffect} from 'react';
import './Game.css';
import handleGameClick from './clicks';

function GameSite(){
  
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=8b1520e8b0014c34b84f9e3253b222e7&page_size=40&ordering=-added')
    .then(response => response.json())
    .then(data => setGames(data.results))
    .catch(error => console.log('Error'))
    }, []);
    return(
      <div className='layer grid grid-cols-3 gap-6 p-5'>
        {myGames.map(game => {
          return(
          <div key={game.position} className='old' onClick={() => handleGameClick(game)}>
            <h1>{game.title}</h1>
             <a href={game.url} target="_blank" rel="noreferrer">
                <img src={game.image} alt={game.name} className='w-full object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300' />
              </a>
          </div>
          );
        })}
        {games.map(game => {
          return(
          <div key={game.id} className='games' onClick={() => handleGameClick(game)}>
            <h1>{game.name}</h1>
             <a href={`http://rawg.io/games/${game.slug}`} target="_blank" rel="noreferrer">
                <img src={game.background_image} alt={game.name} className=' object-cover rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300'/>
              </a>
          </div>
          );
        })}
      </div>

    );
}
const myGames = [
    { position: 1, title: "League of Legends", image: "./images/leagueoflegend.jpg", url: "https://www.leagueoflegends.com/en-us/" },
    { position: 2, title: "Teamfight Tactics", image: "./images/tft.webp", url: "https://teamfighttactics.leagueoflegends.com/en-us/" },
    { position: 3, title: "Path of Exile 2", image: "./images/poe2.webp", url: "https://pathofexile2.com/home" },
    { position: 4, title: "World of Warcraft", image: "./images/warcraft.jpg", url: "https://worldofwarcraft.blizzard.com/en-us/" },
    { position: 5, title: "CSGO 2", image: "./images/cs2.jpg", url: "https://www.counter-strike.net/cs2" },
    { position: 6, title: "Valorant", image: "./images/valorant.png", url: "https://playvalorant.com/en-us/" },
    { position: 7, title: "Fortnite", image: "./images/fortnite.jpg", url: "https://www.fortnite.com/?lang=en-US" },
    { position: 8, title: "Marvel Rivals", image: "./images/marvelrivals.png", url: "https://www.marvelrivals.com/" },
    { position: 9, title: "Rocket League", image: "./images/rocketleague.webp", url: "https://www.rocketleague.com/en/" },
    { position: 10, title: "Minecraft", image: "./images/minecraft.webp", url: "https://www.minecraft.net/en-us" },
    { position: 11, title: "Escape from Tarkov", image: "./images/escape.jpg", url: "https://www.escapefromtarkov.com/" },
    { position: 12, title: "Overwatch 2", image: "./images/overwatch.png", url: "https://overwatch.blizzard.com/en-us/" },
  ];

export default GameSite;