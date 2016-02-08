import React from 'react';
import Player from './Player.jsx';
import Sort from '../utils/sorting.js';

export default class PlayerList extends React.Component {

    constructor() {
        super();
    }

    render() {
        let sortedPlayers = this.props.players.sort(Sort.sortBy('rating'));
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
