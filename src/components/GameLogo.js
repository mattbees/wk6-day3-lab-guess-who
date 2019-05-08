import React from 'react';
import './GameLogo.css';

const GameLogo = (props) => {
  return (
    <img src={props.logo} className='game-logo' alt='Logo' />
  );
}

export default GameLogo;
