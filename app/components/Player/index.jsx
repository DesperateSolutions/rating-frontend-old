import React, { PropTypes } from 'react';

const propTypes = {
  player: PropTypes.object,
};

function Player(props) {
  return (
    <tr>
      <th>{props.player.rank}</th>
      <th>{props.player.name}</th>
      <th>{props.player.rating}</th>
      <th>
        <a className="secondary-content action-link">
          <i className="material-icons">
            delete
          </i></a>
      </th>
    </tr>
  );
}

Player.propTypes = propTypes;

export default Player;
