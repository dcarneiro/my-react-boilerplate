import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { List, ListItem, makeSelectable } from 'material-ui/List';

const SelectableList = makeSelectable(List);

class UserBar extends Component {
  handleRequestChangeLink(event, value) {
    browserHistory.push(value);
  }

  render() {
    return (
      <SelectableList value="" onChange={this.handleRequestChangeLink}>
        <ListItem primaryText="Logout" value="/logout" />
      </SelectableList>
    );
  }
}

export default UserBar;
