import React from "react";

const CharOption = (props) => {
  return (
    <option value={`${props.char}`}>{props.char}</option>
  );
}

export default CharOption;
