import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
import AddGame from './components/AddGame';

class App extends React.Component {

    constructor(options) {
        super(options);
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
            <Route path="ranking" component={PlayerList}/>
        </Route>
    </Router>
, document.getElementById('content'));
