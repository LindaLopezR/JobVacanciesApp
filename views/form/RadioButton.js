import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles.js';

export default function RadioButton({ isChecked, text, onRadioButtonPress }) {

  const _renderCheckedView = () => {
    return isChecked ? (
      <View style={styles.radioButtonIconInnerIcon} />
    ) : null;
  };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onRadioButtonPress}>
      <View style={styles.radioButtonIcon}>
        {_renderCheckedView()}
      </View>
      <View style={styles.radioButtonTextContainer}>
        <Text style={styles.radioButtonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
