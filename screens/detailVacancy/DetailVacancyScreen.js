import React, { useState, useEffect } from 'react';
import { 
  Alert, ImageBackground, ScrollView, Text, View, 
  useWindowDimensions, TouchableOpacity 
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBriefcase, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { getTypeSite, getTypeWork } from '../../views/form/utilities';

import ApiFetcher from '../../modules/ApiFetcher.js';
import SecureAppStorage from '../../modules/SecureAppStorage.js';
import ModalOptions from '../../views/modalOptions/ModalOptions';
import ViewLoading from '../../views/viewLoading/ViewLoading.js';

import styles from '../../assets/styles/mainStyles.js';

const _renderModalConfirm = function(logoutModalVisible, actionCallback = () => {}, setLogoutModalVisible) {
  if (!logoutModalVisible) {
    return null;
  }
  
  return (
    <ModalOptions
      message="¿Desea postular a esta vacante?"
      cancelString="Cancelar"
      succesString="Aceptar"
      titleString="Confirmar"
      successCallback={() => {
        actionCallback();
      }}
      cancelCallback={() => {
        setLogoutModalVisible(false);
      }}
    />
  );
}

export default function DetailVacancyScreen({ route, navigation }) {

  const { data } = route.params;
  const { _id, description, name, typeSite, typeWork, status } = data;

  const [ modalVisible, setModalVisible ] = useState(false);
  const [ user, setUser ] = useState(null);
  const [ statusVacancy, setStatusVacancy ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const apiFetcher = new ApiFetcher();
  const secureAppStorage = new SecureAppStorage();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Detalle de la vacante',
      headerTintColor: '#55bb4e',
      headerTransparent: true,
      headerStyle: { backgroundColor: 'transparent'},
    });
  }, [navigation]);

  async function _loadData() {
    setLoading(true);
    try {
      const tempUser = await secureAppStorage.getUser();
      const nomination = await apiFetcher.getNominations(tempUser._id);
      const isApliqued = nomination.find(item => item.vacancy == _id);

      setStatusVacancy(isApliqued);
      setUser(tempUser);
    } catch(error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    _loadData();
  }, []);

  const confirmAction = async function() {

    setModalVisible(false);

    const dataToSend = {
      candidate: user._id,
      vacancy: _id,
    };

    setLoading(true);
    
    try {
      await apiFetcher.completeVacancy(dataToSend);
      setLoading(false);
      Alert.alert('¡Gracias por aplicar!', 'Te deseamos mucho éxito en esta postulación, te estaremos notificando en que proceso te encuentras.');
      navigation.navigate('Home'); 
    } catch(error) {
      setLoading(false);
      console.log('Error logout 1 => ', error);
      Alert.alert('Error', 'Ocurrió un error al postularte, inténtalo de nuevo más tarde.');
    }
  };

  const { width } = useWindowDimensions();
  const source = {
    html: description
  };
  const work = getTypeWork(typeWork);
  const contract = getTypeSite(typeSite);
  const activeButton = status == 'ACTIVE' && statusVacancy;
  const activatedButton = status == 'ACTIVE' && statusVacancy ? {opacity: 0.5} : null;

  if (loading) {
    return (<ViewLoading />);
  }

  return (
    <ImageBackground
      source={require('../../assets/images/blob-scene-haikei.png')}
      style={styles.bck_img}
    >
      {_renderModalConfirm(modalVisible, confirmAction, setModalVisible)}
      <View style={styles.container}>
        <View style={styles.flexPointOne} />
        <View style={styles.flexPointNine}>
          <View style={styles.card_step}>
            <View style={styles.flexPointNine}>
              <View style={styles.flexOne}>
                <View style={styles.flexPointTwo}>
                  <Text style={[styles.h3, styles.text_center, styles.font_weight,]}>
                    {name}
                  </Text>
                </View>
                <View style={styles.flexPointNine}>
                  <ScrollView>
                    <RenderHtml
                      contentWidth={width}
                      source={source}
                    />
                  </ScrollView>
                </View>
                <View style={styles.flexPointOne}>
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
                </View>
              </View>
            </View>

            <View style={styles.flexPointOne}>
              <View style={[styles.flexOne, activatedButton]}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={[styles.btn, styles.btn_info, styles.btn_view_cart,]}
                  disabled={activeButton}
                >
                  <Text style={[styles.h5, styles.font_weight, styles.text_light]}>
                    Postular
                  </Text>
                </TouchableOpacity>
              </View>
              {statusVacancy && (
                <Text style={[styles.text_danger, styles.font_weight]}>
                  * Ya has realizado prostulación a esta vacante
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
