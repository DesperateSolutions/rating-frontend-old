/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import sortList from '../../utils/sort';
import Player from '../Player';

const propTypes = {
  players: PropTypes.array,
};

function PlayerList(props) {
  const sortedPlayers = props.players.sort(sortList('rating'));
  const playerItems = sortedPlayers.map((player, i) => {
    const newPlayer = player;
    newPlayer.rank = `${i + 1}.`;
    return (
      <Player player={newPlayer} key={newPlayer._id} />
    );
  });
  return (
    <div className="row">
      <div className="col m10 s12">
        <h1 className="header green-text">Liga</h1>
      </div>
      <div className="col m2 s12 table-header">
        <Link to="/addplayer">
          <button
            type="button"
            className="btn-large waves-effect waves-light"
          >
            Add Player
          </button>
        </Link>
      </div>

      <div className="col s12">
        <table className="striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
          {playerItems}
          </tbody>
        </table>
      </div>

    </div>
  );
}

PlayerList.propTypes = propTypes;

export default PlayerList;
