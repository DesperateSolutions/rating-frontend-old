import React from 'react';
import Game from './Game.jsx';
import GameStore from '../stores/GameStore';

export default class GamesList extends React.Component {

    constructor() {
        super();
        this.state = {games: GameStore.getAll()};
    }

    componentDidMount() {
        GameStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        GameStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        this.setState( () => {
            return {
                games : GameStore.getAll()
            }
        });
    }
    render() {
        let gameNodes = this.state.games.map((game) => {
            return (
                <Game game={game} key={game._id}/>
            )
        });

        gameNodes.reverse();

        return (
            <div>
                <h1 className="header green-text">Previous games</h1>
                <table className="striped">
                    <thead>
                    <tr>
                        <th>Player One</th>
                        <th>Player Two</th>
                        <th>Result</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {gameNodes}
                    </tbody>
                </table>
            </div>
        );
    }
}
