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

export function create(name) {
  return fetch(`${apiUrl}/players`, {
    method: 'post',
    body: JSON.stringify({ name: name.name }),
  }).then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  );
}
