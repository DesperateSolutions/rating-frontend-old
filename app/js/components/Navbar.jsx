import React from 'react';

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
                        <li><a href="badges.html">Add game</a></li>
                        <li><a href="mobile.html">Ranking</a></li>
                        <li><a href="collapsible.html">Leagues</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="badges.html">Add game</a></li>
                        <li><a href="mobile.html">Ranking</a></li>
                        <li><a href="collapsible.html">Leagues</a></li>
                    </ul>
                    <a href="#!" className="brand-logo right">Logo</a>
                </div>
            </nav>
        );
    }
}
