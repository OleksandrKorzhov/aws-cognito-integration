import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import PropTypes from 'prop-types';

const Spinner = ({isActive}) => {
  return isActive ? (
    <View
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="green" />
    </View>
  ) : null;
};

Spinner.propTypes = {};

export default Spinner;
