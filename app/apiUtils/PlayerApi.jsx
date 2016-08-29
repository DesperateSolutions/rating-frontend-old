import 'isomorphic-fetch';

import { apiUrl } from '../config/appConfig';

export function getAllPlayers() {
  return fetch(`${apiUrl}/players`, {
    method: 'get',
  }).then((response) => (
    response.json()
  )).then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  );
}

export function create(playerName) {
  console.log(playerName);
  return fetch(`${apiUrl}/players`, {
    method: 'post',
    body: new FormData(document.getElementById('createplayer2')),
  }).then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  );
}
