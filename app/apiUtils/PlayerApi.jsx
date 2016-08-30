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
  let formBody = [];
  formBody.push(`name=${playerName}`);
  formBody = formBody.join('&');
  return fetch(`${apiUrl}/players`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  }).then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  );
}
