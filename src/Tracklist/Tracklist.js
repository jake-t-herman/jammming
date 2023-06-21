import React from "react";
import Track from "../Track/Track";

const TrackList = props => {
    return (
        <div className="TrackList">
          {props.Tracks?.map((track) => {
            return (
              <Track    track={track}
                        key={track.id}
                        listType={props.listType} />
            );
          })}
        </div>
      );
}

export default TrackList;