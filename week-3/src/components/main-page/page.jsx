import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Page = () => {
  const [response,
    setResponse] = useState([]);

  //used useEffect so that it fetched the data when the site is loaded
  useEffect(() => {
    // made an async function to fetch the data it will return a promise and the
    // result will be stored in a state
    const fetchGames = async() => {
      try {
        const result = await axios.request({
          method: 'GET',
          url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
          headers: {
            'x-rapidapi-key': 'ed53ff62ebmshd3703c3e6161c39p157812jsn6195af2cdf1d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          },
        });

        setResponse(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    // can also use a fetch function with then and catch blocks. the fetch function
    // will also return a promise

    fetchGames();
  }, []);
  return ( <> <h1>Welcome to Game Hub</h1> < h4 > Discover the latest games </h4>
      <p>Find your next favorite game from our extensive collection.</p > <div className="game-list">
    {/* the state is then mapped using the iterateable mapping function .map() */}
    {response.map((game) => (
      <div className="game-card" key={game.id}>
        <img src={game.thumbnail} alt={game.title}/>
        <h3>{game.title}</h3>
        <p>{game.short_description}</p>
        <a href={game.game_url} target="_blank" rel="noopener noreferrer">Play Now</a>
        <br/>
        <hr/>
      </div>
    ))}
  </div> < />
  );
};

export default Page;
