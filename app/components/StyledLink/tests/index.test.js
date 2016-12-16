import StyledLink from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<StyledLink />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <StyledLink id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <StyledLink>{children}</StyledLink>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
