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

    addPlayer(player) {
        this._players.push(player);
        this.emitChange();
    }

    removePlayer(playerId) {
        for(var i = 0; i < this._players.length; i++) {
            if (this._players[i]._id == playerId) {
                this._players.splice(i, 1);
                break;
            }
        }
        this.emitChange();
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
        case PlayerConstants.PLAYER_DELETED:
            Store.removePlayer(action.playerId);
            break;
        case PlayerConstants.PLAYER_CREATED:
            Store.addPlayer(action.player);
            break;
    }
});

export default Store;
