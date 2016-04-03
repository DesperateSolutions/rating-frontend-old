import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Config from "../config/appConfig";

export default class Navbar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <nav className="green">
                <div className="nav-wrapper container">
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="left hide-on-med-and-down">
                        <li><Link to="/game">Add game</Link></li>
                        <li><Link to="/ranking">Ranking</Link></li>
                        <li><Link to="/games">Games</Link></li>
                        <li><Link to="/ranking">Leagues</Link></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><Link to="/game">Add game</Link></li>
                        <li><Link to="/ranking">Ranking</Link></li>
                        <li><Link to="/games">Games</Link></li>
                        <li><Link to="/ranking">Leagues</Link></li>
                    </ul>
                    <a href="/" className="brand-logo right">{Config.leagueName}</a>
                </div>
            </nav>
        );
    }
}
