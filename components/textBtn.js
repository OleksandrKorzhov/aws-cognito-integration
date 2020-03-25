import React from 'react';
import PropTypes from 'prop-types';
import BaseBtn from './baseBtn';
import {Text, TouchableOpacity} from 'react-native';

const TextBtn = ({style, ...props}) => {
  return (
    <BaseBtn
      {...props}
      spinnerColor="black"
      btnComponent={({title, onPress, isLoading}) =>
        isLoading ? null : (
          <TouchableOpacity
            onPress={onPress}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              ...style,
            }}>
            <Text>{title}</Text>
          </TouchableOpacity>
        )
      }
    />
  );
};

TextBtn.propTypes = {};

export default TextBtn;
