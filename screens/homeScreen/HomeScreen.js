import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, Text, TouchableHighlight, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'
import * as Updates from 'expo-updates';
;
import SecureAppStorage from '../../modules/SecureAppStorage';
import AppAsyncStorage from '../../modules/AppAsyncStorage.js';
import ModalOptions from '../../views/modalOptions/ModalOptions.js';
import ViewLoading from '../../views/viewLoading/ViewLoading';

import styles from './styles.js';

const goToScreen = function(navigation, screen, params) {
  navigation.navigate(screen, params);
};

const replaceScreen = function(navigation, screen, params) {
  navigation.replace(screen, params);
}

const _renderModalLogout = function(logoutModalVisible, _logoutApp, setLogoutModalVisible) {
  if (!logoutModalVisible) {
    return null;
  }
  
  return (
    <ModalOptions
      message="¿Estás seguro de cerrar sesión?"
      cancelString="Cancelar"
      succesString="Aceptar"
      titleString="Confirmar"
      successCallback={() => {
        _logoutApp();
      }}
      cancelCallback={() => {
        setLogoutModalVisible(false);
      }}
    />
  );
}

export default function HomeScreen({ navigation }) {

  const [ loading, setLoading ] = useState(false);
  const [ logoutModalVisible, setLogoutModalVisible ] = useState(false);
  const [ username, setUsername ] = useState('--');

  const appAsyncStorage = new AppAsyncStorage();
  const secureAppStorage = new SecureAppStorage();

  const checkIfUpdate = async function() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        navigation.navigate('Update');
      }
    } catch (e) {
      console.log('Error updating PS => ', e);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      async function getUserData () {
        const user = await secureAppStorage.getUser();
        let nameUser = user.name.split(' ').slice(0,3).join(' ');
        setUsername(nameUser);
      };
  
      getUserData();
    }, [username])
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerTransparent: true,
      headerStyle: { backgroundColor: 'transparent'},
      headerRight: () => {   
        return (
          <>
            <TouchableHighlight underlayColor='#591C1C50' style={styles.icon_header}
              onPress={() => setLogoutModalVisible(true)}>
              <MaterialCommunityIcons name='login' size={20} color="#348a2f" />
            </TouchableHighlight>
          </>
        )
      }
    });
  }, [navigation]);

  useEffect(() => {
    checkIfUpdate();
  }, []);

  const _logoutApp = async function() {
    setLogoutModalVisible(false);
    
    try {
      await secureAppStorage.deleteUser();
      await appAsyncStorage.deleteAllData();

      setTimeout(() => {
        replaceScreen(navigation, 'Login');
      }, 300);
          
    } catch(error) {
      console.log('Error logout 1 => ', error);
      Alert.alert(`Error ${error}`);
    }
  };

  if (loading) {
    return <ViewLoading />;
  }

  return (
    <>
      {_renderModalLogout(logoutModalVisible, _logoutApp, setLogoutModalVisible)}
      <View style={styles.flexOne}>
      <ImageBackground
        source={require('../../assets/images/general_scene.png')}
        style={styles.bck_img}
      >
        <View style={styles.flexPointOne}/>
        <View style={styles.flexPointOne}>
          <View style={styles.header_menu}>
            <Text style={[styles.h4]}>Hola,</Text>
            <Text style={[styles.h2, styles.font_weight, styles.text_green]}>
              {username}
            </Text>
          </View>
        </View>
        <View style={[styles.flexPointEight]}>
          <View style={[styles.flexOne, styles.column, { justifyContent: 'space-evenly'}]}>
            <TouchableHighlight
              underlayColor='#f8f1e7'
              onPress={() => goToScreen(navigation, 'Vacancies')}
            >
              <View style={styles.item}>
                <View style={styles.icon_menu}>
                  <MaterialCommunityIcons
                    name='newspaper-variant-multiple'
                    size={40}
                    color="#0b8011"
                  />
                </View>
                <Text style={[styles.h5, styles.text_marine, styles.font_weight, styles.mt_2]}>
                  Vacantes
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#f8f1e7'
              onPress={() => goToScreen(navigation, 'Applications')}
            >
              <View style={styles.item}>
                <View style={styles.icon_menu}>
                  <MaterialCommunityIcons
                    name='briefcase'
                    size={40}
                    color="#0b8011"
                  />
                </View>
                <Text style={[styles.h5, styles.text_marine, styles.font_weight, styles.mt_2]}>
                  Mis postulaciones
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
    </>
  );
}
