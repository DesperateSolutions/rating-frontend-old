import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import GameConstants from '../constants/GameConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let _games = [];


class GameStore extends EventEmitter {
    constructor() {
      super();
    }

    getAll() {
        return _games;
    }

    removeGame(gameId) {
        for(var i = 0; i < _games.length; i++) {
            if (_games[i]._id == gameId) {
                _games.splice(i, 1);
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
                _games = action.games;
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

export default GameStore;
