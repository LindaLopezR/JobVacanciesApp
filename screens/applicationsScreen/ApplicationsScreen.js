import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import moment from 'moment';

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

  const setDate = (date) => moment(date).format('DD MMMM YYYY');

  const renderNomination = (data) => {
    return data.map((nomination, i) => (
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

  let tableData = [];

  if (nominations && nominations.length) {
    nominations.sort((a ,b ) => b.date - a.date);
    nominations.map(item => {
      const date = new Date(item.date);
      item.dateString = moment(date).format('YYYY-MM-DD');
    })
  
    const groupBy = (data, prop) => {
      return data.reduce((groups, item) => {
        var val = item[prop];
        groups[val] 
          ? groups[val]['nominations'].push(item) 
          : groups[val] = { time:val, nominations: [item] };
        return groups;
      }, {});
    }
    
    tableData = groupBy(nominations,'dateString');
  }

  const renderData = () => {
    return Object.entries(tableData).map(([key, value], i) => (
      <View key={i} style={styles.content_history}>
        <Text style={[styles.h6, styles.font_weight, styles.mb_2, styles.text_gray]}>
          {setDate(key)}
        </Text>
        <View>
          {renderNomination(value.nominations)}
        </View>
      </View>
    ));
  }

  return (
    <ImageBackground
      source={require('../../assets/images/general_scene.png')}
      style={styles.bck_img}
    >
      <View style={styles.container}>
        <View style={styles.flexPointOne} />
        <View style={styles.flexPointNine}>
          <View style={styles.content_white}>
            {tableData && Object.keys(tableData)
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
