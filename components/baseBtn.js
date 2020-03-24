import React, {useContext} from 'react';
import {DataContext} from '../dataContext';
import {ActivityIndicator, Keyboard, View} from 'react-native';

const BaseBtn = ({
  loadingKey,
  hideKeyboardByPress,
  spinnerColor = 'white',
  onPress,
  title,
  btnComponent: BtnComponent,
  ...props
}) => {
  const {hasLoadingByKey} = useContext(DataContext.context);
  const patchedOnPress = (...args) => {
    if (hideKeyboardByPress) {
      Keyboard.dismiss();
    }
    onPress(...args);
  };

  const hasLoading = hasLoadingByKey(loadingKey);
  // const hasLoading = true;

  return (
    <View>
      <View style={{zIndex: 0}}>
        <BtnComponent
          {...props}
          onPress={patchedOnPress}
          title={!hasLoading ? title : ''}
        />
      </View>
      {hasLoading ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}>
          <ActivityIndicator color={spinnerColor} size="small" />
        </View>
      ) : null}
    </View>
  );
};

export default BaseBtn;
