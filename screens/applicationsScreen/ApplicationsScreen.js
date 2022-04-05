import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';

import ApiFetcher from '../../modules/ApiFetcher.js';
import SecureAppStorage from '../../modules/SecureAppStorage.js';
import CardNomination from '../../views/cards/CardNomination.js';
import ViewLoading from '../../views/viewLoading/ViewLoading.js';

import styles from './styles.js';

export default function ApplicationsScreen({ route, navigation }) {

  const [ loading, setLoading ] = useState(false);
  const [ nominations, setNominations ] = useState([]);

  const apiFetcher = new ApiFetcher();
  const secureAppStorage = new SecureAppStorage();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Mis postulaciones',
      headerTintColor: '#55bb4e',
      headerTransparent: true,
      headerStyle: { backgroundColor: 'transparent'},
    });
  }, [navigation]);

  async function _loadData() {
    setLoading(true);

    try {
      const tempUser = await secureAppStorage.getUser();
      const dataNominations = await apiFetcher.getNominations(tempUser._id);
      setNominations(dataNominations);
    } catch(error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    _loadData();
  }, []);

  const renderData = () => {
    return nominations.map((nomination, i) => (
      <View key={i} style={styles.content_vacancy}>
        <CardNomination
          data={nomination}
          navigation={navigation}
        />
      </View>
    ));
  }

  if (loading) {
    return (<ViewLoading />);
  }

  return (
    <ImageBackground
      source={require('../../assets/images/blob-scene-haikei.png')}
      style={styles.bck_img}
    >
      <View style={styles.container}>
        <View style={styles.flexPointOne} />
        <View style={styles.flexPointNine}>
          <View style={styles.card_step}>
            {nominations && nominations.length 
              ? (
                <ScrollView>
                  {renderData()}
                </ScrollView>
              )
              : (
                <View style={styles.content_center}>
                  <View style={styles.contentImg}>
                    <Image
                      style={styles.image_noData}
                      source={require('../../assets/images/enrollment.png')}
                    />
                  </View>
                  <Text style={[styles.h2, styles.text_center, styles.text_gray]}>
                    Sin registro
                  </Text>
                </View>
              )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
