import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import { colorLineStatus, textStatus, } from '../form/utilities';

import styles from './styles';

export default function CardNomination(props) {
  const { data, navigation } = props;
  const { date, vacancyName, status } = data;

  const setDate = () => moment(date).format('DD MMMM YYYY');

  const setStatus = () => {
    const color = colorLineStatus(status);
    return (
      <Text style={[styles.status, styles.font_weight, styles.badge, color]}>
        {textStatus(status)}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      style={[styles.card_vacancy]}
      onPress={() => navigation.navigate('NominationDetail', { data })}
    >
      <Text style={[styles.h5, styles.font_weight, styles.text_green_dark]}>
        {vacancyName}
      </Text>
      <View style={[styles.flexOne, styles.row_card, styles.row_description]}>
        <View style={[styles.flexPointSix, styles.row_card]}>
          <FontAwesomeIcon
            icon={faCalendar} 
            size={15}
            color="#55bb4e"
          />
          <Text style={styles.description}>{setDate()}</Text>
        </View>
        <View style={[styles.flexPointSix, styles.row_card]}>
          {setStatus()}
        </View>
      </View>
    </TouchableOpacity>
  );
}
