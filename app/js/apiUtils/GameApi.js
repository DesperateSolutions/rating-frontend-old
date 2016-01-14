import $ from 'jquery';
import appConfig from '../config/appConfig';

class GameApi {

    getAll(callback) {
        let xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                callback(null, JSON.parse(xmlHttp.responseText));
            }
        };
        let asynchronous = true;
        xmlHttp.open("GET", appConfig.apiUrl + "/games", asynchronous);
        xmlHttp.send(null);
    }

    create(game, callback) {
        $.ajax({
            type: "POST",
            url: appConfig.apiUrl + "/games",
            data: game,
            success: (data) => {
                location.href = "/";
            },
            error: (err) => {
                console.log(err);
            },
            statusCode: {
                406: (msg) => {
                    msg = JSON.parse(msg.responseJSON.error);
                }
            }
        });
    }

    deleteGame(gameId, callback) {
        $.ajax({
            type: "DELETE",
            url: appConfig.apiUrl + "/delete-game",
            data: {_id:  gameId},
            success: (data) => {
                callback(null);
            },
            error: (err) => {
                console.log(err);
            },
            statusCode: {
                406: (msg) => {
                    msg = JSON.parse(msg.responseJSON.error);
                }
            }
        });
    }
}

let GameApiSingleton = new GameApi();

export default GameApiSingleton;
