import React from 'react';
import './CharacterImage.css';

const CharacterImage = (props) => {
  return (
    <div className="character-image">
      <img src={props.url} alt={props.name} />
    </div>
  );
}

export default CharacterImage;
