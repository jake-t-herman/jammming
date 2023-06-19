import React, { useState, useCallback } from 'react';
import './App.css';
import monkeyImage from './monkeyheadphones.png'
import SearchBar from './SearchBar'
import spotifySearch from './Spotify'

const [searchResults, setSearchResults] = useState([])

const spotifySearch = searchVal => {
  SpotifyAPI.search(searchVal).then(setSearchResults)
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><span>Jamming</span> app</h1>
        <img src={monkeyImage} alt='monkey wearing headphones logo' id='logo'/>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
