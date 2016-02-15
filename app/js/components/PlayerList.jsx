import React from 'react';
import Player from './Player.jsx';
import Sort from '../utils/sorting.js';
import PlayerActions from '../actions/PlayerActions';
import PlayerStore from '../stores/PlayerStore';


export default class PlayerList extends React.Component {

    constructor() {
        super();
        this.state = {players : []};
    }

    getStatesz() {
        return {
            players: PlayerStore.getAll()
        };
    }

    componentDidMount() {
        PlayerActions.getAll();
        PlayerStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        PlayerStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        this.setState(this.getStatesz());
    }

    render() {
        let sortedPlayers = this.state.players.sort(Sort.sortBy('rating'));
        let jsxPlayers = sortedPlayers.map(player => {
            return (
                <Player player={player} key={player.name}/>
            )
        });

        return (
            <div>
                <h1 className="header green-text">Liga</h1>
                <table className="striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                        {jsxPlayers}
                    </tbody>
                </table>
            </div>
        );
    }
}
