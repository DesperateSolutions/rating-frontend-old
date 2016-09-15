import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import LeagueConstants from '../constants/LeagueConstants';

const CHANGE_EVENT = 'change';


class LeagueStore extends EventEmitter {
    constructor(...args) {
        super(...args);
        this.setAll([]);
    }

    setAll(leagues) {
        this._leagues = leagues;
        this.emitChange();
    }

    getAll() {
        return this._leagues;
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

let Store = new LeagueStore();

AppDispatcher.register(action => {
    switch(action.actionType) {
        case LeagueConstants.LEAGUES_UPDATED:
            Store.setAll(action.leagues);
            break;
    }
});

export default Store;
