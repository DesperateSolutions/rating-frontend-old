import React from 'react';

class Navbar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <nav className="green">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">IFI Sjakk</a>
                </div>
            </nav>

        );
    }
}

export default Navbar;
