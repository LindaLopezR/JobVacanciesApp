import React from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function ViewLoading(props = {}) {
  return (
    <View style={{
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
    }}>

      <Spinner visible={true} textStyle={{color: '#FFF'}} />
      <Text style={{
        color: '#808080',
        fontSize: 16,}}
      >
        {props.waitString ? props.waitString : '...'}
      </Text>
    </View>
  );
}
