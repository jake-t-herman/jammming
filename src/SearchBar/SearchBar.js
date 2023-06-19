import React, { useState, useCallback } from "react";
import './SearchBar.css';
import magnifier from './magnifying-glass-icon-transparent.png'


const SearchBar = (props) => {
    const [searchVal,setsearchVal] = useState('');
    const handleSearch = (e) => {
        setsearchVal(e.target.value)
    };

    const logger = input => {
        console.log(searchVal)
    }

    return (
        <section id='searchBarcontainer'>
                     <input type ='search'
                            placeholder = 'Enter a search value'
                            onChange = {handleSearch}>
                    </input>

                <button
                    className="searchbutton"
                    onClick = {logger}><img src={magnifier}></img></button>
        </section>    
    );
}

export default SearchBar;