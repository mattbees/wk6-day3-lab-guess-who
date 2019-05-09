import React from "react";

const SelectOption = (props) => {
  return (
    <option value={`${props.option}`}>{props.option}</option>
  );
}

export default SelectOption;
