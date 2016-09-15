/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React, { PropTypes } from 'react';
import League from '../League';

const propTypes = {
  leagues: PropTypes.array,
};

function LeagueList(props) {
  const leagueNodes = props.leagues.map((league) => (
    <League league={league} key={league._id} />
  ));
  return (
    <div>
      <h1 className="header green-text">League</h1>
      <table className="striped">
        <thead>
          <tr>
            <th>League</th>
          </tr>
        </thead>
        <tbody>
          {leagueNodes}
        </tbody>
      </table>
    </div>
  );
}

LeagueList.propTypes = propTypes;

export default LeagueList;
