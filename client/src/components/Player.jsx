import React from "react";

function Player(props) {
  console.log(props);
  return (
    <div>
      <p>Name: {props.player.name}</p>
    </div>
  );
}

export default Player;
