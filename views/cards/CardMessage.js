import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import styles from './styles';

export default function CardVacancy(props) {
  const { data, navigation, } = props;
  const { date, message } = data;

  const setDate = () => moment(date).format('DD MMMM YYYY');

  return (
    <TouchableOpacity
      style={[styles.card_vacancy]}
      onPress={() => navigation.navigate('MessageDetail', { data })}
    >
      <View style={[styles.flexOne, styles.row_card, styles.row_description]}>
        <FontAwesomeIcon
          icon={faCalendar} 
          size={15}
          color="#55bb4e"
        />
        <Text style={styles.description}>{setDate()}</Text>
      </View>
      <Text
        style={[styles.h5, styles.font_weight, styles.text_green_dark, ]}
        numberOfLines={1}
      >
        {message}
      </Text>
    </TouchableOpacity>
  );
}
