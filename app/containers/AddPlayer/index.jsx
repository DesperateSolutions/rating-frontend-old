/* global Materialize */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as CreatePlayerActions from './actions';
import { leagueName } from '../../config/appConfig';

const propTypes = {
  actions: PropTypes.object,
  createPlayer: PropTypes.object,
};

class AddPlayer extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.createPlayer();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.createPlayer();
  }

  createPlayer() {
    const query = {
      league: leagueName,
      endpoint: 'players',
      body: {
        name: this.state.input,
      },
    };

    this.props.actions.createPlayer(query);

    // TODO: Race-condition, need to fix it
    if (this.props.createPlayer.success === true) {
      browserHistory.push('/ranking');
      Materialize.toast('Player added!', 4000, 'green');
    } else {
      Materialize.toast('ERROR ADDING PLAYER', 4000, 'red');
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card green darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                Add Player
              </span>
            </div>
            <div className="card-action">
              <form
                onSubmit={this.handleFormSubmit}
                id="createplayer"
              >
                <div className="row">
                  <div className="col s8">
                    <input
                      className="white-text"
                      type="text"
                      id="createplayer2"
                      placeholder="Player name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col s4">
                    <button
                      type="button"
                      className="btn-large waves-effect waves-light right"
                      onClick={this.handleButtonClick}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddPlayer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    createPlayer: state.playerCreation,
  };
}

function mapDisptachToProps(dispatch) {
  return {
    actions: bindActionCreators(CreatePlayerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDisptachToProps)(AddPlayer);
