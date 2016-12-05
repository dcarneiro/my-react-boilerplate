/**
 * Direct selector to the notificationList state domain
 */
const selectNotificationList = () => (state) => state.get('notificationList');

export {
  selectNotificationList,
};
