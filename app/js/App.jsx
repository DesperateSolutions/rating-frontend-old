import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
import GamesList from './components/GamesList';
import LeagueList from './components/LeagueList';
import AddGame from './components/AddGame';
import GameActions from "./actions/GameActions";
import PlayerActions from "./actions/PlayerActions";
import LeagueActions from "./actions/LeagueActions";

class App extends React.Component {

    constructor(options) {
        super(options);
    }

    componentDidMount() {
        GameActions.getAll();
        PlayerActions.getAll();
        LeagueActions.getAll();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AddGame} />
            <Route path="game" component={AddGame}/>
            <Route path="games" component={GamesList}/>
            <Route path="ranking" component={PlayerList}/>
            <Route path="leagues" component={LeagueList}/>
        </Route>
    </Router>
, document.getElementById('content'));
