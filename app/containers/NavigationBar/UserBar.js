import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { List, ListItem, makeSelectable } from 'material-ui/List';

import UserTag from '../../components/UserTag';

const SelectableList = makeSelectable(List);

class UserBar extends Component {
  handleRequestChangeLink(event, value) {
    browserHistory.push(value);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <UserTag userName={user.name} />
        <SelectableList value="" onChange={this.handleRequestChangeLink}>
          <ListItem primaryText="Logout" value="/logout" />
        </SelectableList>
      </div>
    );
  }
}

UserBar.propTypes = {
  user: React.PropTypes.object,
};

export default UserBar;
