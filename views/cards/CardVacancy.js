import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faFileSignature } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon
            icon={faFileSignature} 
            size={15}
            color="#55bb4e"
          />
          <Text style={styles.description}>{work}</Text>
        </View>
        <View style={[styles.flexPointSix, styles.row_card]}>
          <FontAwesomeIcon
            icon={faBriefcase} 
            size={15}
            color="#55bb4e"
          />
          <Text style={styles.description}>{contract}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
