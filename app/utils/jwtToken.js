import jwtDecode from 'jwt-decode';
import { setAuthorizationToken } from './request';

export function jwtTokenKey() {
  'unique-jwt-token';
}

/**
 * Parses the JWT token received from the server. Sets the token on the
 * localStorage and add the token to the axios request headers.
 *
 * @param  {Object} data A hash with an access_token
 *
 * @return {Object} Returns the decoded token
 */
export function handleJwtToken(data) {
  const { access_token } = data;
  localStorage.setItem('jwtToken', access_token);
  setAuthorizationToken(access_token);
  return jwtDecode(access_token).sub;
}

/**
 * This method removes the current JwtToken, invalidating the session
 *
 * @return null
 */
export function expireJwtToken() {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(null);
  return null;
}
