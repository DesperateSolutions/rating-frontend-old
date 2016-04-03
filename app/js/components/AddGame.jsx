import React from 'react';
import GameActions from '../actions/GameActions';
import PlayerStore from "../stores/PlayerStore";

export default class AddGame extends React.Component {

    constructor() {
        super();
        this.state = {players : PlayerStore.getAll()}
    }

    componentDidMount() {
        PlayerStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        PlayerStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        this.setState(() => {
            return {
                players : PlayerStore.getAll()
            }
        });
    }

    onWhitePlayerChange(event) {
        this.setState({selectedWhitePlayer : event.target.value});
    }

    onBlackPlayerChange(event) {
        this.setState({selectedBlackPlayer : event.target.value});
    }

    onWinnerChange(event) {
        this.setState({result : event.target.value});
    }

    handleSubmit() {
        GameActions.create(this.state.selectedWhitePlayer, this.state.selectedBlackPlayer, this.state.result);
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
                                        <option value="" disabled>Select white player</option>
                                        {playerNodes}
                                    </select>
                                    <select className="browser-default" defaultValue="" name="black-id" onChange={this.onBlackPlayerChange.bind(this)}>
                                        <option value="" disabled>Select black player</option>
                                        {playerNodes}
                                    </select>
                                    <p>
                                        <input name="resultGroup" type="radio" id="whiteRadio" value="white" onChange={this.onWinnerChange.bind(this)}/>
                                        <label className="white-text" htmlFor="whiteRadio">White</label>
                                        <input name="resultGroup" type="radio" id="drawRadio" value="draw" onChange={this.onWinnerChange.bind(this)}/>
                                        <label className="white-text" htmlFor="drawRadio">Draw</label>
                                        <input name="resultGroup" type="radio" id="blackRadio" value="black" onChange={this.onWinnerChange.bind(this)}/>
                                        <label className="white-text"htmlFor="blackRadio">Black</label>
                                        <button type="button" type="button" className="right btn-large waves-effect waves-light" onClick={this.handleSubmit.bind(this)}>Add game</button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
