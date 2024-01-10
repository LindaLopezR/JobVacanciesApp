import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

export default function ViewLoading(props = {}) {
  return (
    <View style={{
      justifyContent:'center',
      alignItems:'center',
      flex: 1,
    }}>

      <ActivityIndicator size='large' color='#68a1aa' />
      <Text style={{
        color: '#808080',
        fontSize: 16,}}
      >
        {props.waitString ? props.waitString : '...'}
      </Text>
    </View>
  );
}
