import React from 'react';
import {Button} from 'react-native';
import BaseBtn from './baseBtn';

const Btn = props => {
  return <BaseBtn {...props} btnComponent={Button} hideKeyboardByPress />;
};

Btn.propTypes = {};

export default Btn;
