import Description from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Description />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Description id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Description>{children}</Description>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
