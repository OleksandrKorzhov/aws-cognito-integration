import React, {useContext} from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {DataContext} from '../dataContext';
import Spinner from './spinner';

export const Page = ({children}) => {
  const {isLoading} = useContext(DataContext.context);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          width: '100%',
          paddingHorizontal: 20,
        }}>
        {/*<Spinner isActive={isLoading} />*/}
        <View style={{zIndex: 0}}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};
