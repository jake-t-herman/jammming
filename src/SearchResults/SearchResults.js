import React from "react";
import './SearchResults.css'
import TrackList from '../Tracklist/Tracklist'
import testdata from "../TESTDATA";




const SearchResults = (props) => {
    //direct inject testdata into searchresults circumventing TrackList to TEST
    /*
    const ResultsList = testdata.map((element) => 
        (
        <div className="Track">  
            <h3>{element.songName}</h3>
            <p>{element.artistName}</p>
            <p>{element.Year}</p>
        </div>      
        )
    )
    */
    return (
        <section className="search results">
            <h2 className='title'>Search Results</h2>
            <TrackList  Tracks={props.Searchresults} 
                        listType='searchlist'
                        onAdd={props.onAdd}/>
            {//<div>{ResultsList}</div>
}
        </section>
    )
};


export default SearchResults;