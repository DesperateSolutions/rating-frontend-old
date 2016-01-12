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


class App extends React.Component {

  constructor(options) {
    super(options);
    this.state = this.getLeagueState();
  }

  componentDidMount () {
    PlayerStore.addChangeListener(this._onChange);
    GameStore.addChangeListener(this._onChange);
  }

  componentWillMount() {
    PlayerActions.getAll();
    GameActions.getAll();
  }

  componentWillUnmount() {
    PlayerStore.removeChangeListener(this._onChange);
    GameStore.removeChangeListener(this._onChange);
  }

  getLeagueState() {
    return {
      players: PlayerStore.getAll(),
      games: GameStore.getAll()
    };
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

  _onChange() {
    this.setState(this.getLeagueState());
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('content')
);

