import React from 'react';
import PlayerActions from './../actions/PlayerActions';

class CreatePlayer extends React.Component {

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    handleSubmit() {
        PlayerActions.create(this.state.input);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card green darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Add Player</span>
                        </div>
                        <div className="card-action">
                            <form>
                                <div className="row">
                                    <div className="col s8">
                                        <input className="white-text" type="text" placeholder="Player name" onChange={this.handleChange.bind(this)}/>
                                    </div>
                                    <div className="col s4">
                                        <button type="button" className="btn-large waves-effect waves-light right" onClick={this.handleSubmit.bind(this)} >Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePlayer;
