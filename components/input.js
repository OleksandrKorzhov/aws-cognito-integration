import React from 'react';
import {Text, TextInput, View} from 'react-native';

export const Input = ({label, onChange, type = 'numeric'}) => (
  <View style={{marginVertical: 10}}>
    <Text>{label}</Text>
    <TextInput
      onChangeText={onChange}
      keyboardType={type}
      style={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 5,
      }}
    />
  </View>
);
