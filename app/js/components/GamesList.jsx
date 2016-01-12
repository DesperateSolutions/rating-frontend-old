import React from 'react';
import GameActions from '../actions/GameActions';
import Game from './Game.jsx';

class GamesList extends React.Component {

  constructor() {
    super();
  }

  render() {
    let gameNodes = this.props.games.map(function(game) {
      return (
        <Game game={game} key={game._id}/>
      )
    });

    return (
      <div>
        <h1 className="header green-text">Previous games</h1>
        <table className="striped">
          <thead>
          <tr>
            <th>White</th>
            <th>Black</th>
            <th>Result</th>
          </tr>
          </thead>
          <tbody>
          {gameNodes}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GamesList;
