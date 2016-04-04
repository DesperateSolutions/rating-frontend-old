import $ from 'jquery';
import appConfig from '../config/appConfig';

class LeagueApi {

    getAll(callback) {
        let xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                callback(null, JSON.parse(xmlHttp.responseText));
            }
        };
        let asynchronous = true;
        xmlHttp.open("GET", appConfig.baseUrl + "leagues", asynchronous);
        xmlHttp.send(null);
    }

}

let LeagueApiSingleton = new LeagueApi();

export default LeagueApiSingleton;
