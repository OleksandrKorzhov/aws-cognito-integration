import React, {useContext} from 'react';
import {DataContext} from '../dataContext';
import {ActivityIndicator, Keyboard, View} from 'react-native';
import Spinner from './spinner';

const BaseBtn = ({
  isLoading,
  hideKeyboardByPress,
  spinnerColor = 'white',
  onPress,
  title,
  btnComponent: BtnComponent,
  ...props
}) => {
  const patchedOnPress = (...args) => {
    if (hideKeyboardByPress) {
      Keyboard.dismiss();
    }
    onPress(...args);
  };

  return (
    <View>
      <View style={{zIndex: 0}}>
        <BtnComponent
          {...props}
          isLoading={isLoading}
          onPress={patchedOnPress}
          title={!isLoading ? title : ''}
        />
      </View>
      {isLoading ? <Spinner isActive={isLoading} color="white" /> : null}
      {/*{isLoading ? (*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      position: 'absolute',*/}
      {/*      top: 0,*/}
      {/*      bottom: 0,*/}
      {/*      left: 0,*/}
      {/*      right: 0,*/}
      {/*      justifyContent: 'center',*/}
      {/*      alignItems: 'center',*/}
      {/*      zIndex: 1,*/}
      {/*    }}>*/}
      {/*    <ActivityIndicator color={spinnerColor} size="small" />*/}
      {/*  </View>*/}
      {/*) : null}*/}
    </View>
  );
};

export default BaseBtn;
