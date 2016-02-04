import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import PlayerConstants from '../constants/PlayerConstants';

const CHANGE_EVENT = 'change';


class PlayerStore extends EventEmitter {
    constructor(...args) {
        super(...args);
        this.setAll([]);
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
    switch(action.actionType) {
        case PlayerConstants.PLAYERS_UPDATED:
            Store.setAll(action.players);
            break;
    }
});

export default Store;
