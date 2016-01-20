import AppDispatcher from '../dispatcher/AppDispatcher';
import PlayerConstants from '../constants/PlayerConstants';
import ApiUtils from '../apiUtils/PlayerApi';

class PlayerActions {
    getAll() {
        ApiUtils.getAll((err, players) => {
            if(err) {
                console.log(err);
            } else {
                AppDispatcher.dispatch({
                    actionType: PlayerConstants.PLAYERS_UPDATED,
                    players: players
                });
            }
        });
    }

    create(name) {
        ApiUtils.create({name : name}, (err, player) => {
        });
    }
}

let PlayerActionsSingleton = new PlayerActions();

export default PlayerActionsSingleton;
