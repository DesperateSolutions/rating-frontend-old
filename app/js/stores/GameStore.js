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

    setAll(games) {
        this._games = games;
        this.emitChange();
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

let Store = new GameStore();

AppDispatcher.register((action) => {
    switch(action.actionType) {
        case GameConstants.GAMES_UPDATED:
            Store.setAll(action.games);
            break;
        case GameConstants.GAME_DELETED:
            Store.removeGame(action.gameId);
            break;
    }
});

export default Store;
