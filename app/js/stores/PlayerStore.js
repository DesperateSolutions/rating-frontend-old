import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import PlayerConstants from '../constants/PlayerConstants';
import Assign from 'object-assign';

const CHANGE_EVENT = 'change';


class PlayerStore extends EventEmitter {
    constructor(...args) {
        super(...args);
        this._players = [];
    }

    setAll(players) {
        this._players = players;
        this.emitChange();
    }

    getAll() {
        return this._players;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

}

let Store = new PlayerStore();

AppDispatcher.register((action) => {
    console.log('received action from PlayerStore');
    console.log(action.actionType);
    switch(action.actionType) {
        case PlayerConstants.PLAYERS_UPDATED:
            Store.setAll(action.players);
            break;
    }
});

export default Store;
