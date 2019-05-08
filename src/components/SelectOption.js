import React from "react";
import './SelectOption.css';

const SelectOption = (props) => {
  return (
    <option value={`${props.option}`}>{props.option}</option>
  );
}

export default SelectOption;
