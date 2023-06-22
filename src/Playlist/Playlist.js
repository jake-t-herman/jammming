import React from "react";
import TrackList from "../Tracklist/Tracklist";
import './Playlist.css'

const Playlist = (props) => {
    const handleNamechange = e => {
        props.onNamechange(e.target.value)
    };

    const newNum = () => {
        let num = Date.now();
        let numStr = num.toString()
        return numStr.slice(-4)      
    }

    const testclickalert = () => {
        alert(`playlist saved`)
    }

    return (
        <section className="playlist results">
            <input 
                    className='title'
                    defaultValue={`New Playlist ${newNum()}`}
                    id='playlistTitle'
                    
                />
            <TrackList  Tracks={props.playlist}
                        listType='playlist' 
                        onRemove={props.onRemove}/>
            <button id='savetoSpotify' onClick={testclickalert}>Save to Spotify</button>
        </section>
    )

}


export default Playlist;