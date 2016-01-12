var $ = require('jquery');
var appConfig = require('../config/appConfig');

var PlayerApi = {
    getAll: function(callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                callback(null, JSON.parse(xmlHttp.responseText));
            }
        };
        var asynchronous = true;
        xmlHttp.open("GET", appConfig.apiUrl + "/players", asynchronous);
        xmlHttp.send(null);
    },

    create: function (name, callback) {
        $.ajax({
            type: "POST",
            url: appConfig.apiUrl + "/addplayer",
            data: {name : name.name},
            success: function(data) {
                location.href = "/";
            },
            error: function(err) {
                console.log(err);
            },
            statusCode: {
                406: function(msg) {
                    msg = JSON.parse(msg.responseJSON.error);
                }
            }
        });
    }
};

module.exports = PlayerApi;