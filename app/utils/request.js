import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import ApiError from './apiError';

import { sendingRequest, requestError } from '../containers/RequestHandler/actions';

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
  baseURL: process.env.API_URL,
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

export function patchRequest(url, body) {
  return axios.patch(url, body, config)
    .then(parseJSON)
    .catch(handleError);
}

export function deleteRequest(url) {
  return axios.delete(url, config)
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

export function* callApi(url, successAction) {
  yield put(sendingRequest(true));

  try {
    const response = yield call(getRequest, url);
    yield put(successAction(response.data));
  } catch (error) {
    yield put(requestError(error));
  } finally {
    yield put(sendingRequest(false));
  }
}

export function* callApiPatch(url, body, successAction) {
  yield put(sendingRequest(true));

  try {
    const response = yield call(patchRequest, url, body);
    yield put(successAction(response.data));
  } catch (error) {
    yield put(requestError(error));
  } finally {
    yield put(sendingRequest(false));
  }
}
