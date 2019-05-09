import React, { Component } from 'react';
import './GameContainer.css';
import GameLogo from '../components/GameLogo';
import CharacterImages from '../components/CharacterImages';
import CharacteristicForm from '../components/CharacteristicForm';
// import GuessForm from '../components/GuessForm';
const harryPotterData = require('../game_data/harry_potter_data'); // BETTER METHOD?

class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: harryPotterData.default,
      logo: '../images/logo.png'
    }

  this.randomNumber = this.randomNumber.bind(this);
  this.selectWinner = this.selectWinner.bind(this);
  this.getSelectionOptions = this.getSelectionOptions.bind(this);
  this.getFullOptions = this.getFullOptions.bind(this);
  // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // So far unable to store random winner as state here. Passing as props.
  selectWinner() {
    const winner = this.state.data[this.randomNumber()];
    return winner;
  }

  randomNumber() {
    return Math.floor(Math.random() * 8);
  };

  getSelectionOptions(characteristic) {
    const fullOptions = this.getFullOptions(characteristic);
    const filtered = this.filterOptions(fullOptions)
    return filtered;
  }

  getFullOptions(characteristic) {
    const fullSelectOptions = this.state.data.map((character) => {
      return character[characteristic];
    });
    return fullSelectOptions;
  };

  filterOptions(options) {
    const selectOptions = options.filter((option, index) => {
      return options.indexOf(option) === index;
    });
    return selectOptions;
  };

  

  render() {
    return (
      <div className="game-container">
        <GameLogo logo={this.state.logo} />
        <CharacterImages data={this.state.data} />
        <CharacteristicForm
          getSelectionOptions={this.getSelectionOptions}
          // handleFormSubmit={this.handleFormSubmit}
          winner={this.selectWinner()}
        />
      </div>
      // <GuessForm />
    );
  };

};

export default GameContainer;
