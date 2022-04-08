import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments, } from '@fortawesome/free-solid-svg-icons';

import styles from './styles';

export default function CardMessage(props) {

  const { data, navigation, } = props;
  const { labelMessage} = data;

  return (
    <TouchableOpacity
      style={styles.card_vacancy}
      onPress={() => navigation.navigate('MessageDetail', { data })}
    >
      <View style={[styles.flexOne, styles.row_card]}>
        <View style={styles.flexPointOne}>
          <FontAwesomeIcon
            icon={faComments}
            size={15}
            color="#0b8011"
          />
        </View>
        <View style={styles.flexPointNine}>
          <View style={{width: '100%'}}>
            <Text
              style={[styles.h5, styles.font_weight, styles.text_green_dark]}
              numberOfLines={1}
            >
              {labelMessage}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
