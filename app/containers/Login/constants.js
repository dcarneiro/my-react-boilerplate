/*
 * LoginConstants
 *
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOGIN_REQUEST = 'media-groups-ui/Login/LOGIN_REQUEST';
export const SET_AUTH_TOKEN = 'media-groups-ui/Login/SET_AUTH_TOKEN';
export const SET_CURRENT_USER = 'media-groups-ui/Login/SET_CURRENT_USER';
export const LOGIN_SUCCESSFUL = 'media-groups-ui/Login/LOGIN_SUCCESSFUL';