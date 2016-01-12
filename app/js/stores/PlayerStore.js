import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import PlayerConstants from '../constants/PlayerConstants';
import Assign from 'object-assign';

const CHANGE_EVENT = 'change';


class PlayerStore extends EventEmitter {
  constructor(...args) {
    super(args);
    this._players = [];
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

  dispatcherIndex(action) {
    switch(action.actionType) {
      case PlayerConstants.PLAYERS_UPDATED:
        this._players = action.players;
        PlayerStore.emitChange();
        break;

      case PlayerConstants.TODO_DESTROY:
        //destroy(action.id);
        PlayerStore.emitChange();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  }
}

let playerStore = new PlayerStore();

export default playerStore;
