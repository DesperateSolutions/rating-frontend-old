import React from 'react';
import Player from './Player.jsx';
import Sort from '../utils/sorting.js';
import PlayerStore from '../stores/PlayerStore';
import {Router, Link} from 'react-router';


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
            <div className="row">
                    <div className="col m10 s12">
                        <h1 className="header green-text">Liga</h1>
                    </div>
                    <div className="col m2 s12 table-header">
                        <Link to="/addplayer"> <button type="button" className="btn-large waves-effect waves-light">Add Player</button> </Link>
                    </div>

                <div className="col s12">
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

            </div>
        );
    }
}
