import React from "react";
import TrackList from "../Tracklist/Tracklist";

const Playlist = (props) => {
    const handleNamechange = e => {
        props.onNamechange(e.target.value)
    };

    return (
        <section className="playlist results">
            <input 
                    defaultValue={`New Playlist ${Date.now()}`}
                    id='playlistTitle'
                    onChange=''
                />
            <TrackList Tracks={props.playlist} />
        </section>
    )

}


export default Playlist;