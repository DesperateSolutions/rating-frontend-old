import React from 'react';
import PlayerActions from '../actions/PlayerActions';

export default class Player extends React.Component {

    handleDelete() {
        PlayerActions.deletePlayer(this.props.player._id);
    }

    render() {
        return (
            <tr>
                <th>{this.props.player.name}</th>
                <th>{this.props.player.rating}</th>
                <th><a className="secondary-content action-link" onClick={this.handleDelete.bind(this)}><i className="material-icons">delete</i></a></th>
            </tr>
        );
    }
}
