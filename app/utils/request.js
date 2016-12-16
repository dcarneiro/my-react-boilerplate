import axios from 'axios';
import ApiError from './apiError';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object} The parsed JSON from the request
 */
function parseJSON(response) {
  return response.data;
}

/**
 * Handles errors returned by the backend
 *
 * @param {object} err Has a response with some headers, a status and a
 *                 statusText
 */
function handleError(err) {
  const error = new ApiError(err);
  throw error;
}

const config = {
  baseURL: 'http://localhost:4000/api/',
  headers: { 'Content-Type': 'application/json' },
};

export function getRequest(url) {
  return axios.get(url, config)
    .then(parseJSON)
    .catch(handleError);
}

export function postRequest(url, body) {
  return axios.post(url, body, config)
    .then(parseJSON)
    .catch(handleError);
}

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}
