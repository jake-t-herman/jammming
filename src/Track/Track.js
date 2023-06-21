import React from "react";
import "./Track.css";
import testdata from '../TESTDATA'



const Track = props => {
    const ListButton = props => {
        if (props.listType === 'searchlist') {
            return 'Add to Playlist'
        } else {return typeof props.listType};
    };

    return (
<div className="Track">  
    <h3>{props.track.name}</h3>
    <p>{props.track.artist}</p>
    <p>{props.track.album}</p>
    <p>{props.track.Year}</p>
    <p>{props.listType}</p>
    <button>{ListButton(props.listType)}</button>
</div>    
  
)
};

export default Track;