import ApiUtils from '../apiUtils/GameApi';
import AppDispatcher from '../dispatcher/AppDispatcher';
import GameConstants from '../constants/GameConstants';

class GameActions {
    getAll() {
        ApiUtils.getAll((err, games) => {
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
        let result;
        if (winner == "white"){
            result = "1-0";
        } else if (winner == "black") {
            result = "0-1";
        } else {
            result = "0-0";
        }

        ApiUtils.create({whiteId : whiteId, blackId : blackId, result : result}, (err, player) => {
        });
    }

    deleteGame(gameId) {
        ApiUtils.deleteGame(gameId, (err) => {
            if (err) {
                console.log(err);
            } else {
                AppDispatcher.dispatch({
                    actionType: GameConstants.GAME_DELETED,
                    gameId: gameId
                });
            }
        });
    }
}

let GameActionsSingleton = new GameActions();

export default GameActionsSingleton;
