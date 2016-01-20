import React from 'react';
import ReactDOM from 'react-dom';

import PlayerStore from './stores/PlayerStore';
import GameStore from './stores/GameStore';
import PlayerActions from './actions/PlayerActions';
import GameActions from './actions/GameActions';

import PlayerList from './components/PlayerList';
import CreatePlayer from './components/CreatePlayer';
import GameList from './components/GamesList';
import AddGame from './components/AddGame';
import Navbar from './components/Navbar';


function getLeagueState() {
    return {
        players: PlayerStore.getAll(),
        games: GameStore.getAll()
    };
}

class App extends React.Component {
    constructor(options) {
        super(options);
        this.state = getLeagueState();
    }

    _onChange() {
        this.setState(getLeagueState());
    }

    componentDidMount() {
        PlayerStore.addChangeListener(this._onChange.bind(this));
        GameStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillMount() {
        PlayerActions.getAll();
        GameActions.getAll();
    }

    componentWillUnmount() {
        PlayerStore.removeChangeListener(this._onChange.bind(this));
        GameStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <PlayerList players={this.state.players}/>
                    <CreatePlayer/>
                    <GameList games={this.state.games} />
                    <AddGame players={this.state.players}/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('content')
);

