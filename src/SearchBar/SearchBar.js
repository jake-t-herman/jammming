import React, { useState, useCallback } from "react";
import './SearchBar/SearchBar.css';
import magnifier from './SearchBar/magnifying-glass-icon-transparent.png'


const SearchBar = (props) => {
    const [searchVal,setsearchVal] = useState('');
    const handleSearch = (e) => {
        setsearchVal(e.target.value)
    };



    return (
        <section id='searchBarcontainer'>
                     <input type ='search'
                            placeholder = 'Enter a search value'
                            onChange = {handleSearch}>
                    </input>

                <button
                    className="searchbutton"
                    onClick = {props.onSearch(searchVal)}><img src={magnifier}></img></button>
        </section>    
    );
}

export default SearchBar