import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getTypeSite, getTypeWork } from '../form/utilities';

import styles from './styles';

export default function CardVacancy(props) {
  const { data, navigation } = props;
  const { name, typeSite, typeWork, } = data;

  const work = getTypeWork(typeWork);
  const contract = getTypeSite(typeSite);

  return (
    <TouchableOpacity
      style={[styles.card_vacancy]}
      onPress={() => navigation.navigate('VacancyDetail', { data })}
    >
      <Text style={[styles.h5, styles.font_weight, styles.text_green_dark]}>
        {name}
      </Text>
      <View style={[styles.flexOne, styles.row_card, styles.row_description]}>
        <View style={[styles.flexPointSix, styles.row_card]}>
          <MaterialCommunityIcons
            name='file-sign'
            size={15}
            color="#6a6a6a"
          />
          <Text style={styles.description}>{work}</Text>
        </View>
        <View style={[styles.flexPointSix, styles.row_card]}>
          <MaterialCommunityIcons
            name='briefcase'
            size={15}
            color="#6a6a6a"
          />
          <Text style={styles.description}>{contract}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
