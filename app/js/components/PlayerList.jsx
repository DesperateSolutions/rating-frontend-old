import React from 'react';
import Player from './Player.jsx';

export default class PlayerList extends React.Component {

    constructor() {
        super();
    }

    render() {
        let playerNodes = this.props.players.map(function(player) {
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
                    {playerNodes}
                    </tbody>
                </table>
            </div>
        );
    }
}
