import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { List, ListItem, makeSelectable } from 'material-ui/List';

const SelectableList = makeSelectable(List);

class GuestBar extends Component {
  handleRequestChangeLink(event, value) {
    browserHistory.push(value);
  }

  render() {
    return (
      <SelectableList value="" onChange={this.handleRequestChangeLink}>
        <ListItem primaryText="Login" value="/login" />
        <ListItem primaryText="Sign Up" value="/sign-up" />
      </SelectableList>
    );
  }
}

export default GuestBar;
