import 'isomorphic-fetch';

import { baseUrl } from '../config/appConfig';

const GET = 'GET';
const POST = 'POST';

function buildGET(url, endpoint) {
  return `${url}${endpoint}`;
}

function callApi(url, endpoint) {
  console.log(url);
  console.log(endpoint);
  const geturl = buildGET(url, endpoint);
  console.log(geturl);
  return (
    fetch(geturl)
      .then(
        response => ({ response }),
        error => ({ error: error.message || 'Something bad happened' })
      )
  );
}

export const getAllPlayers = query => callApi(baseUrl, query);
export const getAllLeagues = query => callApi(baseUrl, query);
