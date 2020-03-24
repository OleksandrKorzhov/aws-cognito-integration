import {WebView} from 'react-native-webview';
import React from 'react';
import PropTypes from 'prop-types';

const SSOScreen = ({navigation}) => {
  return (
    <WebView
      source={{uri: 'https://github.com/facebook/react-native'}}
      style={{marginTop: 20}}
    />
  );
};

SSOScreen.propTypes = {

};

export default SSOScreen;
