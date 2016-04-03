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
                    <ul className="left hide-on-med-and-down">
                        <li><Link to="/game">Add game</Link></li>
                        <li><Link to="/ranking">Ranking</Link></li>
                        <li><Link to="/games">Games</Link></li>
                        <li><Link to="/ranking">Leagues</Link></li>
                    </ul>
                    <ul className="side-nav" id="slide-out">
                        <li><Link to="/game">Add game</Link></li>
                        <li><Link to="/ranking">Ranking</Link></li>
                        <li><Link to="/games">Games</Link></li>
                        <li><Link to="/ranking">Leagues</Link></li>
                    </ul>
                    <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
                    <a href="/" className="brand-logo right">{Config.leagueName}</a>
                </div>
            </nav>
        );
    }
}

