import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import PropTypes from 'prop-types';

const Spinner = ({color}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: 'black',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator color={color} size="small" />
    </View>
  );
};

Spinner.propTypes = {};

export default Spinner;
