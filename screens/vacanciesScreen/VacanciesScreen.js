import React, { useState, useEffect } from 'react';
import { Alert, Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import ApiFetcher from '../../modules/ApiFetcher.js';

import InputSearch from '../../views/form/InputSearch.js';
import CardVacancy from '../../views/cards/CardVacancy.js';
import ViewLoading from '../../views/viewLoading/ViewLoading.js';

import styles from './styles.js';

export default function VacanciesScreen({ route, navigation }) {

  const [ loading, setLoading ] = useState(false);
  const [ search, setSearch ] = useState('');
  const [ data, setData ] = useState([]);
  const [ vacancies, setVacancies ] = useState([]);

  const apiFetcher = new ApiFetcher();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Vacantes',
      headerTintColor: '#55bb4e',
      headerTransparent: true,
      headerStyle: { backgroundColor: 'transparent'},
    });
  }, [navigation]);

  const _loadData = async function() {
    setLoading(true);

    let vacanciesData = [];

    try {
      const dataVacancies = await apiFetcher.getVacancies();
      // Mostrar solo vacantes activas
      vacanciesData = dataVacancies.filter(vacancy => vacancy.status == 'ACTIVE');
      setVacancies(vacanciesData);
      setData(vacanciesData);
    } catch(error) {
      setTimeout(() => { Alert.alert('Error', error) }, 100);
    }
    setLoading(false);
  }

  useEffect(() => {
    _loadData();
  }, []);

  const handleSearch = text => {
    let results = data;
    if (text) {
      const textSearch = text.trim().toLowerCase();
      results = vacancies.filter(item => item.name.toLowerCase().includes(textSearch));
    }
    setVacancies(results);
  };

  const renderData = () => {
    return vacancies.map((vacancy, i) => (
      <View key={i} style={styles.content_vacancy}>
        <CardVacancy
          data={vacancy}
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
      source={require('../../assets/images/general_scene.png')}
      style={styles.bck_img}
    >
      <View style={styles.container}>
        <View style={styles.flexPointOne} />
        <View style={styles.flexPointNine}>
          <View style={styles.card_step}>
            {vacancies && vacancies.length 
              ? (
                <View style={styles.flexOne}>
                  <View style={styles.flexPointOne}>
                    <InputSearch
                      search={search}
                      setSearch={(e) => {
                        setSearch(e);
                        handleSearch(e)
                      }}
                    />
                  </View>
                  <ScrollView style={styles.flexPointEight}>
                    {renderData()}
                  </ScrollView>
                </View>
              )
              : (
                <View style={styles.content_center}>
                  <View style={styles.contentImg}>
                    <Image 
                      style={styles.image_noData}
                      source={require('../../assets/images/jobs.png')}
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
