import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import LeagueConstants from '../constants/LeagueConstants';

const CHANGE_EVENT = 'change';

class LeagueStore extends EventEmitter {

    constructor(...args) {
        super(...args);
        this.setAll([]);
    }

    getAll() {
        return this._leagues;
    }

    setAll(leagues) {
        this._leagues = leagues;
        this.emitChange();
    }

    removeLeague(leagueID) {
        this._leagues = this._leagues.filter(league => league._id != leagueID);
        this.emitChange();
    }

    addLeague(league) {
        this.leagues.push(league);
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

let Store = new LeagueStore();

AppDispatcher.register(action => {
    switch(action.actionType) {
        case LeagueConstants.LEAGUES_UPDATED:
            Store.setAll(action.leagues);
            break;
        case LeagueConstants.LEAGUE_DELETED:
            Store.removeLeague(action.leagueID);
            break;
        case LeagueConstants.LEAGUE_CREATED:
            Store.addLeague(action.league);
            break;
    }
});

export default Store;
