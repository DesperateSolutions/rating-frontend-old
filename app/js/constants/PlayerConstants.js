import keyMirror from 'keymirror';

let PlayerConstants = keyMirror({
  PLAYERS_UPDATED: null,
  TODO_COMPLETE: null,
  TODO_DESTROY: null,
  TODO_DESTROY_COMPLETED: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_UNDO_COMPLETE: null,
  TODO_UPDATE_TEXT: null
});

export default PlayerConstants;