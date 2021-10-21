import React, { Component } from 'react';
import './game-over.css';

import { Route, Redirect } from 'react-router'

import Team from '../../Models/Team';

class GameOverPage extends Component {

  constructor(props) {
    super(props)
    console.log(props);

  }

  render() {
    if (this.props.winning_team === null) {
      return (
        <Redirect to = '/'/>
      )
    }

    return (
      <div className = "game-over-page container">
        <h1 className = "title text-center">Match Over</h1>

        <h2 className = "text-center">{this.props.winning_team.name} Win!</h2>
        <img className="img" src={this.props.winning_team.img_url}/>
        <h3 className = "text-center">Congrats all {this.props.winning_team.name} Fans!</h3>

      </div>
    );
  }
}

export default GameOverPage;
