import ApiUtils from '../apiUtils/LeagueApi';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LeagueConstants from '../constants/LeagueConstants';

class LeagueActions {
    getAll() {
        ApiUtils.getAll((err, leagues) => {
            if(err) {
                console.log(err);
            } else {
                AppDispatcher.dispatch({
                    actionType: LeagueConstants.LEAGUES_UPDATED,
                    leagues: leagues
                });
            }
        });
    }

}

let LeagueActionsSingleton = new LeagueActions();

export default LeagueActionsSingleton;
