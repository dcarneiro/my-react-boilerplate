/**
*
* UserTag
*
*/

import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import Img from './Img';
import Background from './background.jpg';

const UserTag = ({ userName }) => (
  <Card>
    <CardMedia overlay={<CardTitle title={userName} />} >
      <Img src={Background} alt="user-tag background" />
    </CardMedia>
  </Card>
);

UserTag.propTypes = {
  userName: React.PropTypes.string.isRequired,
};

export default UserTag;
