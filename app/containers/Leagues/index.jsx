import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LeagueList from '../../components/LeagueList';
import * as LeagueActions from './actions';

const propTypes = {
  actions: PropTypes.object,
  leagues: PropTypes.object,
};

class Leagues extends React.Component {
  componentWillMount() {
    this.fetchLeagues();
  }

  fetchLeagues() {
    this.props.actions.getAllLeagues();
  }

  render() {
    return (
      <div>
        <LeagueList leagues={this.props.leagues.leagues} />
      </div>
    );
  }
}

Leagues.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    leagues: state.leagues,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LeagueActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);
