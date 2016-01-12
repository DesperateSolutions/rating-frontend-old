import $ from 'jquery';

class GameApi {

  getAll(callback) {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        callback(null, JSON.parse(xmlHttp.responseText));
      }
    };

    let asynchronous = true;
    xmlHttp.open("GET", "/games", asynchronous);
    xmlHttp.send(null);
  }

  create(game, callback) {
    $.ajax({
      type: "POST",
      url: "/addgame",
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
      url: "/delete-game",
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

export default GameApi;
