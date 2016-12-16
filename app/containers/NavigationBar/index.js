import React from 'react';
import Drawer from 'material-ui/Drawer';

import GuestBar from './GuestBar';
import UserBar from './UserBar';

const NavigationBar = (props) => (
  <Drawer width={300} docked>
    { props.isAuthenticated ? <UserBar /> : <GuestBar /> }
  </Drawer>
);

NavigationBar.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
};

export default NavigationBar;
