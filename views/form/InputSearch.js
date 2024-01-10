import React from 'react';
import { TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles.js';

export default function InputSearch(props = {}) {

  const { search, setSearch = () => {}, name } = props;

  return (
    <View style={styles.contentSearch}>
      <View style={styles.contentInput}>
        <TextInput
          style={styles.inputSearch}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder={name ? name : 'Buscar'}
        />
      </View>
      <View style={styles.contentIcon}>
        <MaterialCommunityIcons
          style={styles.iconSearch}
          name='card-search-outline'
        />
      </View>
    </View>
  );
}
