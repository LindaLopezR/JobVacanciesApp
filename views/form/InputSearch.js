import React from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon
          style={styles.iconSearch}
          icon={faSearch}
        />
      </View>
    </View>
  );
}
