var React = require('react');
var config = require('../config/appConfig');

var Navbar = React.createClass({

    render: function() {
        return (
            <nav className="green">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">{config.tournamentName}</a>
                </div>
            </nav>

        );
    }
});

module.exports = Navbar;