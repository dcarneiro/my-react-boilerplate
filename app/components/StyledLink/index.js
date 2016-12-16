import styled from 'styled-components';
import { Link } from 'react-router';

import {
  teal500,
  teal700,
} from 'material-ui/styles/colors';

const StyledLink = styled(Link)`
  color: ${teal500};
  text-decoration: none;

  &:hover {
    color: ${teal700};
  }
`;

export default StyledLink;
