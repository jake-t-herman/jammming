import React, { useState, useCallback } from "react";
import './SearchBar.css';
import magnifier from './magnifying-glass-icon-transparent.png'


const SearchBar = (props) => {
    const [searchVal,setsearchVal] = useState('');
    const handleChange = e => {
        setsearchVal(e.target.value);
    };

    const logger = () => {
        alert(searchVal)
    }

    return (
        <section className='searchBarcontainer'>
                     <input type ='search'
                            placeholder = 'Enter a search value'
                            id="searchbar"
                            onChange = {handleChange} />
                    

                <button
                    
                    onClick = {logger}>
                        <img src={magnifier}></img>
                </button>
        </section>    
    );
}

export default SearchBar;