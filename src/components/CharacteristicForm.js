import React, { Component } from 'react';
import './CharacteristicForm.css';
import SelectOption from './SelectOption';

class CharacteristicForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characteristic: 'gender',
      selection: 'Male',
      selectionOptions: [ 'Male', 'Female' ],
      feedback: ''
    }

    console.log(props.winner); // DELETE

    this.handleCharacteristicChange = this.handleCharacteristicChange.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this) // DELETE
  }

  handleCharacteristicChange(event) {
    this.setState({ characteristic: event.target.value }, () => {
      const options =
        this.props.getSelectionOptions(this.state.characteristic);
      this.setState({ selectionOptions: options });
      this.setState({ selection: options[0] });
    });
    this.setState({ feedback: '' });
  };


  handleSelectionChange(event) {
    this.setState({ selection: event.target.value })
    this.setState({ feedback: '' });
  }

  handleSubmit(event) {
    event.preventDefault();
    const characteristic = this.state.characteristic;
    const selection = this.state.selection;
    const newSelection = {characteristic, selection};
    this.handleFormSubmit(newSelection); // DELETED this.props. ...
  }

  // THIS SHOULD BE IN CONTAINER BUT I CAN'T RETAIN WINNER THERE
  handleFormSubmit(newSelection) {
    if (this.props.winner[newSelection.characteristic] === newSelection.selection) {
      this.setState({ feedback: 'Yes!' });
    } else {
      this.setState({ feedback: 'No!' });
    };
  };


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
        <input className='positive ui button' type="submit" value="Do they have this?" />
        <span>{this.state.feedback}</span>
      </form>
    );

  }

}

export default CharacteristicForm;
