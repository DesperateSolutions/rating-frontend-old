import React from 'react';
import LeagueStore from '../stores/LeagueStore';

export default class League extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <th>{this.props.league.name}</th>
            </tr>
        );
    }
}


export default class GamesList extends React.Component {

    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this.state = {leagues: LeagueStore.getAll()};
    }

    componentDidMount() {
        LeagueStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        LeagueStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState( () => {
            return {
                leagues : LeagueStore.getAll()
            }
        });
    }
    render() {
        let leagueNodes = this.state.leagues.map((league) => {
            return (
                <League league={league} key={league._id}/>
            )
        });

        return (
            <div>
                <h1 className="header green-text">Leagues</h1>
                <table className="striped">
                    <thead>
                    <tr>
                        <th>League</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leagueNodes}
                    </tbody>
                </table>
            </div>
        );
    }
}
