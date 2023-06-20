import React, { useState, useCallback } from 'react';
import './App.css';
import monkeyImage from './monkeyheadphones.png'
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import Playlist from './Playlist/Playlist'

import testdata from "./TESTDATA";

/*
const [searchResults, setSearchResults] = useState([])

const songSearch = searchVal => {
  SpotifyAPI.search(searchVal).then(setSearchResults)
}
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><span>Jamming</span> app</h1>
        <img src={monkeyImage} alt='monkey wearing headphones logo' id='logo'/>
      </header>
      <SearchBar />
        <div id='resultsANDplaylist'>
          <SearchResults Searchresults={testdata}/>
          <Playlist playlist={testdata} />
        </div>

    </div>
  );
}

export default App;
