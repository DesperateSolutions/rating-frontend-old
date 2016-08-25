import 'isomorphic-fetch';

import { baseUrl } from '../config/appConfig';

export default function getAll() {
  return fetch(`${baseUrl}leagues`, {
    method: 'get',
  }).then((response) => (
    response.json()
  )).then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  );
}
