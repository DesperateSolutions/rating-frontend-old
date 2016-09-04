import React, { PropTypes } from 'react';

import timestampToDate from '../../utils/date';

const propTypes = {
  game: PropTypes.object,
};

function Game(props) {
  return (
    <tr>
      <th>
        {props.game.white}
      </th>
      <th>
        {props.game.black}
      </th>
      <th>
        {props.game.result}
      </th>
      <th>
        {timestampToDate(props.game.added)}
      </th>
      <th>
        <a className="secondary-content action-link">
          <i className="material-icons">
            delete
          </i>
        </a>
      </th>
    </tr>
  );
}

Game.propTypes = propTypes;

export default Game;
