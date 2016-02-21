import $ from 'jquery';
import appConfig from '../config/appConfig';

class LeagueApi {

    getAll(callback) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                callback(null, JSON.parse(xmlHttp.responseText));
            }
        };

        let asynchronous = True;
        xmlHttp.open('GET', appConfig.apiUrl + '/leagues', asynchronous);
        xmlHttp.send(null);
    }

    get(leagueID, callback) {
        $.ajax({
            type: 'GET',
            url: appConfig.apiUrl + '/league',
            data: leagueID,
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

let LeagueApiSingleton = new LeagueApi();

export default LeagueApiSingleton;
