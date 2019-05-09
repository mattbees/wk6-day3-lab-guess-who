import React, { Component } from 'react';
import './GuessForm.css';

class GuessForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      names: {this.props.}
    }

  this.handleSelectionChange = this.handleSelectionChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectionChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const newName = {name};
    this.props.handleGuessSubmit(newName);
  }

  render() {
    return (
      <form className='guess-form' onSubmit={this.handleSubmit}>
        <label className='ui right pointing label'>
          Make a guess:
          <select className='ui selection dropdown' value={this.state.names}
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
