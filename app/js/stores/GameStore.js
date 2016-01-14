import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import GameConstants from '../constants/GameConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';


class GameStore extends EventEmitter {
    constructor(...args) {
        super(...args);
        this._games = [];
    }

    getAll() {
        return this._games;
    }

    removeGame(gameId) {
        for(var i = 0; i < _games.length; i++) {
            if (this._games[i]._id == gameId) {
                this._games.splice(i, 1);
                break;
            }

        }
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

    dispatcherIndex(action) {
        switch(action.actionType) {
            case GameConstants.GAMES_UPDATED:
                this._games = action.games;
                GameStore.emitChange();
                break;
            case GameConstants.GAME_DELETED:
                GameStore.removeGame(action.gameId);
                GameStore.emitChange();
                break;
        }

        return true;
    }
}

let GameStoreSingleton = new GameStore();

export default GameStoreSingleton;
