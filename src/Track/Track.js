import React from "react";
import "./Track.css";
import testdata from '../TESTDATA'



const Track = props => {
    return (
<div className="Track">  
    <h3>{props.track.songName}</h3>
    <p>{props.track.artistName}</p>
    <p>{props.track.Year}</p>
</div>    
  
)
};

export default Track;