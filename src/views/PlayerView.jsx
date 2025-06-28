import React from 'react'
import "./PlayerView.css"; 

function PlayerView({player}) {
  return (
    <div className="PlayerView">
      <h1>{player.name}</h1>
      <h2><b>{player.profession}</b></h2>
      <img src={player.image} alt= {player.name + " image"}/>
    </div>
  )
}

export default PlayerView
