/**
 * Direct selector to the requestHandler state domain
 */
const selectRequestHandler = () => (state) => state.get('requestHandler');

export {
  selectRequestHandler,
};
