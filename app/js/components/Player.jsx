import React from 'react';

export default class Player extends React.Component {

    render() {
        return (
            <tr>
                <th>{this.props.player.name}</th>
                <th>{this.props.player.rating}</th>
            </tr>
        );
    }
}
