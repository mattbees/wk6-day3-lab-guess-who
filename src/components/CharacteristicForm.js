import React, { Component } from 'react';
import './CharacteristicForm.css';
import SelectOption from './SelectOption';

class CharacteristicForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characteristic: '',
      selection: '',
      selectionOptions: []
    }

    this.handleCharacteristicChange = this.handleCharacteristicChange.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);
  }

  handleCharacteristicChange(event) {
    this.setState({ characteristic: event.target.value }, () => {
      const options =
        this.props.getSelectionOptions(this.state.characteristic);
      this.setState({ selectionOptions: options });
    });
  };


  handleSelectionChange(event) {
    this.setState({ selection: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const characteristic = this.state.characteristic;
    const selection = this.state.selection;
    const newSelection = {characteristic, selection};
    this.props.handleSelectSubmit(newSelection);
    // this.setState({characteristic: '', selection: ''});
  }


  render() {
    const options = this.state.selectionOptions.map((option, index) => {
      return (
        <SelectOption option={option} key={index}>{option}</SelectOption>
      );
    });
    return (
      <form className='characteristic-form' onSubmit={this.handleSubmit}>
        <label className='ui right pointing label'>
          Guess a characteristic:
          <select className='ui selection dropdown' value={this.state.characteristic}
          onChange={this.handleCharacteristicChange}>
            <option value="gender">Gender</option>
            <option value="hair">Hair</option>
            <option value="house">House</option>
            <option value="death eater">Death eater</option>
          </select>
          <select className='ui selection dropdown' value={this.state.selection} onChange={this.handleSelectionChange}>
            {options}
          </select>
        </label>
        <input className='positive ui button' type="submit" value="Submit" />
      </form>
    );

  }

}

export default CharacteristicForm;
