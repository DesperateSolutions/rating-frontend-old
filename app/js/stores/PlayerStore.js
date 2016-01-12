import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import PlayerConstants from '../constants/PlayerConstants';
import Assign from 'object-assign';

const CHANGE_EVENT = 'change';

let _players = [];


class PlayerStore extends EventEmitter {
  constructor() {
    super();
  }

  getAll() {
    return _players;
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
        _players = action.players;
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

export default PlayerStore;
