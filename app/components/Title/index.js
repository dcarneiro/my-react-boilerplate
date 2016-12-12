import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 2.92rem;
  -webkit-font-smoothing: antialiased;
`;

const Title = (props) => <Heading>{props.children}</Heading>;

Title.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
  ]).isRequired,
};

export default Title;
