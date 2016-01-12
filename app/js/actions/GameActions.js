import ApiUtils from '../apiUtils/GameApi';
import AppDispatcher from '../dispatcher/AppDispatcher';
import GameConstants from '../constants/GameConstants';

class GameActions {
  getAll() {
    ApiUtils.getAll(function (err, games) {
      if(err) {
        console.log(err);
      } else {
        AppDispatcher.dispatch({
          actionType: GameConstants.GAMES_UPDATED,
          games: games
        });
      }
    });
  }

  create(whiteId, blackId, winner) {
    var result;
    if (winner == "white"){
      result = "1";
    } else if (winner == "black") {
      result = "-1";
    } else {
      result = "0";
    }

    ApiUtils.create({whiteId : whiteId, blackId : blackId, result : result}, function (err, player) {
    });
  }

  deleteGame(gameId) {
    ApiUtils.deleteGame(gameId, function (err) {
      if (err) {
        console.log(err);
      } else {
        AppDispatcher.dispatch({
          actionType: GameConstants.GAME_DELETED,
          gameId : gameId
        });
      }
    });
  }
}

export default GameActions;
