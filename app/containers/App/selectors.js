import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectIsAuthenticated = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('isAuthenticated')
);

const selectUser = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('user')
);

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  selectIsAuthenticated,
  selectUser,
  selectLocationState,
};
