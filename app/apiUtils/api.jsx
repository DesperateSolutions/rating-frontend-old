import 'isomorphic-fetch';

import { baseUrl } from '../config/appConfig';

const GET = 'GET';
const POST = 'POST';

function buildGET(url, endpoint) {
  return [`${url}${endpoint}`, { method: GET }];
}

function buildPOSTBody(body) {
  return Object.keys(body).map((p) => (
    (`${encodeURIComponent(p)}=${encodeURIComponent(body[p])}`)
  )).join('&');
}

function buildPOST(url, query) {
  const postUrl = `${url}${query.league}/${query.endpoint}`;
  return [
    postUrl,
    {
      method: POST,
      body: buildPOSTBody(query.body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  ];
}

function checkStatus(response) {
  if (response.status < 200 && response.status > 300) {
    const error = new Error(response.status);
    error.response = response;
    return Promise.reject(error);
  }
  return response;
}

function callApi(url, query, method) {
  const [getUrl, options] = method === GET ? buildGET(url, query) : buildPOST(url, query);
  return (
    fetch(getUrl, options)
      .then(checkStatus)
      .then((response) => (
        response.json()
      ))
      .then(
        response => ({ response }),
        error => ({ error: error.message || 'Something bad happened' })
      )
  );
}

export const getAllPlayers = query => callApi(baseUrl, query, GET);
export const getAllLeagues = query => callApi(baseUrl, query, GET);
export const createPlayer = query => callApi(baseUrl, query, POST);
export const getAllGames = query => callApi(baseUrl, query, GET);
export const addGame = query => callApi(baseUrl, query, POST);
