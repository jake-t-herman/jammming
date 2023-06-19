import React from "react";
import './SearchResults.css'
import testdata from '../TESTDATA'




const SearchResults = (props) => {

    const ResultsList = testdata.map((element) => 
        (
        <div className="Track">  
            <h3>{element.songName}</h3>
            <p>{element.artistName}</p>
            <p>{element.Year}</p>
        </div>      
        )
    )
    
/*
return (
    <section className="searchResults">
        <h2>Search Results</h2>
        <div className='results-container'>

                <h3>{testdata[1].songName}</h3>
                <p>{testdata[1].artistName}</p>
                <p>{testdata[1].Year}</p>
                <p>{ResultsList}</p>

        </div>
    </section>
    )*/
  
    return (
        <section className="searchResults">
            <h2>Search Results</h2>
            <div className='results-container'>{ResultsList}</div>
        </section>
    )
};


export default SearchResults;