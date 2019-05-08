import React from 'react';
import './CharacterImages.css';
import CharacterImage from './CharacterImage';

const CharacterImages = (props) => {
  const images = props.data.map((image, index) => {
    return (
      <CharacterImage url={`../character_images/${image.image}`} name={image.name} key={index} />
    );
  });

  return (
    <div className="character-images">
      {images}
    </div>
  )
};

export default CharacterImages;
