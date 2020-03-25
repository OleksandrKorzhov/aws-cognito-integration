import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import PropTypes from 'prop-types';

const Loader = ({show}) => {
  return show ? (
    <View style={styles.container}>
      <ActivityIndicator color="#4B57FF" size="large" />
    </View>
  ) : null;
};

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});

export default Loader;
