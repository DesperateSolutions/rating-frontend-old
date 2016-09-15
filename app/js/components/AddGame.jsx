import React from 'react';
import GameActions from '../actions/GameActions';
import PlayerStore from "../stores/PlayerStore";
import { browserHistory } from 'react-router';

export default class AddGame extends React.Component {

    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this.state = {
            players : PlayerStore.getAll(),
            selectedWhitePlayer : {
                name : "Player one"
            },
            selectedBlackPlayer : {
                name : "Player Two"}
        }
    }

    componentDidMount() {
        PlayerStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        PlayerStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(() => {
            return {
                players : PlayerStore.getAll()
            }
        });
    }

    _idToPlayer(id) {
        return this.state.players.find((player) => {
            return player._id === id;
        });
    }

    onWhitePlayerChange(event) {
        this.setState({selectedWhitePlayer : this._idToPlayer(event.target.value)});
    }

    onBlackPlayerChange(event) {
        this.setState({selectedBlackPlayer : this._idToPlayer(event.target.value)});
    }

    onWinnerChange(event) {
        this.setState({result : event.target.value});
    }

    handleSubmit() {
        if (!this.state.result) {
            Materialize.toast('Please set the result', 4000, 'red');
        } else {
            GameActions.create(this.state.selectedWhitePlayer._id, this.state.selectedBlackPlayer._id, this.state.result, (err) => {
                if (err) {
                    Materialize.toast(err, 4000, 'red');
                } else {
                    browserHistory.push("/ranking");
                    Materialize.toast("Game added!", 4000, 'green');
                }
            });
        }
    }

    render() {
        let playerNodes = this.state.players.map((player) => {
            return (
                <option key={player._id} value={player._id}>{player.name}</option>
            )
        });

        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card green darken-1 add-player-card">
                        <div className="card-content white-text">
                            <span className="card-title">Add Game</span>
                        </div>
                        <div className="card-action">
                            <form>
                                <div className="input-field">
                                    <select className="browser-default" defaultValue="" name="white-id" onChange={this.onWhitePlayerChange.bind(this)}>
                                        <option value="" disabled>Select player one</option>
                                        {playerNodes}
                                    </select>
                                    <select className="browser-default" defaultValue="" name="black-id" onChange={this.onBlackPlayerChange.bind(this)}>
                                        <option value="" disabled>Select player two</option>
                                        {playerNodes}
                                    </select>
                                    <p>
                                        <input name="resultGroup" type="radio" id="whiteRadio" value="white" onChange={this.onWinnerChange.bind(this)}/>
                                        <label className="white-text" htmlFor="whiteRadio">{this.state.selectedWhitePlayer.name}</label>
                                        <input name="resultGroup" type="radio" id="drawRadio" value="draw" onChange={this.onWinnerChange.bind(this)}/>
                                        <label className="white-text" htmlFor="drawRadio">Draw</label>
                                        <input name="resultGroup" type="radio" id="blackRadio" value="black" onChange={this.onWinnerChange.bind(this)}/>
                                        <label className="white-text"htmlFor="blackRadio">{this.state.selectedBlackPlayer.name}</label>
                                    </p>
                                    <button type="button" className="btn-large waves-effect waves-light submit-button" onClick={this.handleSubmit.bind(this)}>Add game</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
