import React from 'react';
import GameActions from '../actions/GameActions';

export default class Game extends React.Component {

    constructor() {
        super();
    }

    handleDelete() {
        GameActions.deleteGame(this.props.game._id);
    }

    render() {
        return (
            <tr>
                <th>{this.props.game.white}</th>
                <th>{this.props.game.black}</th>
                <th>{this.props.game.result}</th>
                <th><a className="secondary-content action-link" onClick={this.handleDelete.bind(this)}><i className="material-icons">delete</i></a></th>
            </tr>
        );
    }
}
