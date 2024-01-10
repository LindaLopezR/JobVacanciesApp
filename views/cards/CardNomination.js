import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function CardNomination(props) {
  const { data, navigation } = props;
  const { date, vacancyName, status } = data;

  return (
    <TouchableOpacity
      style={[styles.card_vacancy]}
      onPress={() => navigation.navigate('NominationDetail', { data })}
    >
      <Text style={[styles.h5, styles.font_weight, styles.text_green_dark]}>
        {vacancyName}
      </Text>
      <View style={[styles.flexOne, styles.row_card, styles.row_description, styles.row_mess]}>
        <MaterialCommunityIcons
          name='comment'
          size={15}
          color="#0b8011"
        />
        <Text style={styles.description}>{data.historyMss&&data.historyMss.length}</Text>
      </View>
    </TouchableOpacity>
  );
}
