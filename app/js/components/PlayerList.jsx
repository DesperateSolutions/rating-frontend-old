import React from 'react';
import Player from './Player.jsx';
import Sort from '../utils/sorting.js';
import PlayerStore from '../stores/PlayerStore';


export default class PlayerList extends React.Component {

    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this.state = {players : PlayerStore.getAll()};
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
                players: PlayerStore.getAll()
            }
        });
    }

    render() {
        let sortedPlayers = this.state.players.sort(Sort.sortBy('rating'));
        let jsxPlayers = sortedPlayers.map( (player, i) => {
            player.rank = (i + 1)  + ".";
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
                        <th>#</th>
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
