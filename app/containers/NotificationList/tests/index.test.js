import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import NotificationSystem from 'react-notification-system';

import { NotificationList } from '../index';

describe('<NotificationList />', () => {
  it('should render the notifications', () => {
    const renderedComponent = shallow(
      <NotificationList />
    );
    expect(renderedComponent.find(NotificationSystem).length).toEqual(1);
  });
});
