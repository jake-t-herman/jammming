import React, { useState, useCallback } from "react";
import './SearchBar.css';
import magnifier from './magnifying-glass-icon-transparent.png'


const SearchBar = (props) => {
    const [searchVal,setsearchVal] = useState('');
    const handleChange = e => {
        setsearchVal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(searchVal)
        setsearchVal('')
    }

    return (
        <form className='searchBarcontainer' onSubmit={handleSubmit}>
                     <input type ='search'
                            placeholder = 'Enter a search value'
                            id="searchbar"
                            onChange = {handleChange}
                            value={searchVal} />
                    

                <button
                    style={{fontSize: '1.5rem'}}
                    type='submit'>🔍
                        
                </button>
        </form>    
    );
}

export default SearchBar;