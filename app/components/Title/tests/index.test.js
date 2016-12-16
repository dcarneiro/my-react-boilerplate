import Title from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Title />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Title id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Title>{children}</Title>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
