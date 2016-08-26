import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PlayerList from '../../components/PlayerList';
import * as PlayerActions from './actions';

const propTypes = {
  actions: PropTypes.object,
  players: PropTypes.array,
};

class Ranking extends React.Component {
  componentWillMount() {
    this.fetchPlayers();
  }

  fetchPlayers() {
    this.props.actions.getAllPlayers();
  }

  render() {
    return (
      <div>
        <PlayerList players={this.props.players} />
      </div>
    );
  }
}

Ranking.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    players: state.players.players,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlayerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
