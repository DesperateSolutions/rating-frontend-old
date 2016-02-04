import React from 'react';
import GameActions from '../actions/GameActions';
import moment from 'moment';

export default class Game extends React.Component {

    constructor() {
        super();
    }

    handleDelete() {
        GameActions.deleteGame(this.props.game._id);
    }

    timestampToDate(timestamp) {
        let gameDate = moment(timestamp);

        if (!gameDate.isValid()) {
            return 'Invalid date';
        }

        return gameDate.format('D MMM');
    }

    render() {
        return (
            <tr>
                <th>{this.props.game.white}</th>
                <th>{this.props.game.black}</th>
                <th>{this.props.game.result}</th>
                <th>{this.timestampToDate(this.props.game.timestamp)}</th>
                <th><a className="secondary-content action-link" onClick={this.handleDelete.bind(this)}><i className="material-icons">delete</i></a></th>
            </tr>
        );
    }
}
