import React from "react";
import "./Track.css";
import testdata from '../TESTDATA'



const Track = props => {
    return (
<div className="Track">  
    <h3>{props.track.name}</h3>
    <p>{props.track.artist}</p>
    <p>{props.track.album}</p>
    <p>{props.track.Year}</p>
</div>    
  
)
};

export default Track;