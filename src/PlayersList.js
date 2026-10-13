import React from "react";
import player from "./player";
import players from "./players";

const PlayersList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {players.map((player, index) => (
        <player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
