import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { leagueName } from '../../config/appConfig';

import GameList from '../../components/GameList';
import * as GameActions from './actions';

const propTypes = {
  actions: PropTypes.object,
  games: PropTypes.object,
};

class Games extends React.Component {
  componentWillMount() {
    this.fetchGames();
  }

  fetchGames() {
    this.props.actions.getAllGames(`${leagueName}/games`);
  }

  render() {
    return (
      <div>
        <GameList games={this.props.games} />
      </div>
    );
  }
}

Games.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    games: state.games.games,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
