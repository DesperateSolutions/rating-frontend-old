/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { PropTypes } from 'react';
import Game from '../Game';

const propTypes = {
  games: PropTypes.array,
};

function GameList(props) {
  const gameNodes = props.games.map((game) => (
    <Game game={game} key={game._id} />
  ));
  return (
    <div>
      <h1 className="header green-text">Previous games</h1>
      <table>
        <thead>
          <tr>
            <th>
              Player One
            </th>
            <th>
              Player Two
            </th>
            <th>
              Result
            </th>
            <th>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {gameNodes}
        </tbody>
      </table>
    </div>
  );
}

GameList.propTypes = propTypes;

export default GameList;
