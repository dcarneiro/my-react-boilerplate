import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import UserTag from '../index';

describe('<UserTag />', () => {
  it('should render a Card', () => {
    const renderedComponent = shallow(
      <UserTag userName="daniel" />
    );
    expect(renderedComponent.find('Card').length).toEqual(1);
  });
});
