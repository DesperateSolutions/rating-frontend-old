import React, { PropTypes } from 'react';

const propTypes = {
  league: PropTypes.object,
};

function League(props) {
  return (
    <tr>
      <th>{props.league.name}</th>
    </tr>
  );
}

League.propTypes = propTypes;

export default League;
