/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { PropTypes } from 'react';

const propTypes = {
  players: PropTypes.array,
  whiteChange: PropTypes.func,
  blackChange: PropTypes.func,
  winnerChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  whitePlayer: PropTypes.object,
  blackPlayer: PropTypes.object,
};

function AddGameCard(props) {
  const playerNodes = props.players.map((player) => (
    <option key={player._id} value={player._id}>
      {player.name}
    </option>
  ));

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card green darken-1 add-player-card">
          <div className="card-content white-text">
            <span className="card-title">
              Add Game
            </span>
          </div>
          <div className="card-action">
            <form>
              <div className="input-field">
                <select
                  className="browser-default"
                  defaultValue=""
                  name="white-id"
                  onChange={props.whiteChange}
                >
                  <option value="" disabled>
                    Select player one
                  </option>
                  {playerNodes}
                </select>
                <select
                  className="browser-default"
                  defaultValue=""
                  name="black-id"
                  onChange={props.blackChange}
                >
                  <option value="" disabled>
                    Select player two
                  </option>
                  {playerNodes}
                </select>
                <p>
                  <input
                    name="resultGroup"
                    type="radio"
                    id="whiteRadio"
                    value="white"
                    onChange={props.winnerChange}
                  />
                  <label
                    className="white-text"
                    htmlFor="whiteRadio"
                  >
                    {props.whitePlayer.name}
                  </label>
                  <input
                    name="resultGroup"
                    type="radio"
                    id="drawRadio"
                    value="draw"
                    onChange={props.winnerChange}
                  />
                  <label
                    className="white-text"
                    htmlFor="drawRadio"
                  >
                    Draw
                  </label>
                  <input
                    name="resultGroup"
                    type="radio"
                    id="blackRadio"
                    value="black"
                    onChange={props.winnerChange}
                  />
                  <label
                    className="white-text"
                    htmlFor="blackRadio"
                  >
                    {props.blackPlayer.name}
                  </label>
                </p>
                <button
                  type="button"
                  className="btn-large waves-effect waves-light submit-button"
                  onClick={props.handleSubmit}
                >
                  Add Game
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddGameCard.propTypes = propTypes;

export default AddGameCard;
