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
  const form = new FormData();
  form.append('name', playerName);
  console.log(form.get('name'));
  return fetch(`${apiUrl}/players`, {
    method: 'POST',
    body: form,
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  }).then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  );
}
