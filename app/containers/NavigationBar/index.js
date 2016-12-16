import React from 'react';
import Drawer from 'material-ui/Drawer';

import GuestBar from './GuestBar';
import UserBar from './UserBar';

const NavigationBar = ({ isAuthenticated, user }) => (
  <Drawer width={300} docked>
    { isAuthenticated ? <UserBar user={user} /> : <GuestBar /> }
  </Drawer>
);

NavigationBar.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object,
};

export default NavigationBar;
