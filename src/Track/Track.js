import React from "react";
import "./Track.css";
import testdata from '../TESTDATA'



const Track = props => {

    const addTrack = () => {
          props.onAdd(props.track);
        };
    
      const removeTrack = () => {
          props.onRemove(props.track);
        };
    

    const playlistButton = () => {
        if(props.isRemove) {
            return <button className='addRemove' onClick={removeTrack}>Remove from Playlist</button>

        }
        return <button className='addRemove' onClick={addTrack}>Add to Playlist</button>
    };

    return (
    <div className="Track">  
        <h3>{props.track.name}</h3>
        <p>{props.track.artist}</p>
        <p>{props.track.album}</p>
        <p>{props.track.Year}</p>
        <p>{props.listType}</p>
        {playlistButton}
    </div>    
  
)
};

export default Track;