import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Updates from 'expo-updates';

import ApiFetcher from '../../modules/ApiFetcher.js';
import SecureAppStorage from '../../modules/SecureAppStorage';
import AppPushNotifications from '../../modules/AppPushNotifications.js';
import ViewLoading from '../../views/viewLoading/ViewLoading';

import styles from './styles.js';

const goToScreen = function(navigation, screen) {
  console.log('Go to => ', screen);
  navigation.navigate(screen);
}

const replaceScreen = function(navigation, screen, params) {
  console.log('Go to => ', screen);
  navigation.replace(screen, params);
}

export default function LoginScreen({ navigation }) {
  const [ loading, setLoading ] = useState(false);
  const [ data, setData ] = useState({
    username : '',
    password : ''
  });

  const apiFetcher = new ApiFetcher();
  const secureAppStorage = new SecureAppStorage();
  const version = 'Versión v1.0.0 ';

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

  useEffect(() => {
    checkIfUpdate();
    try {
      const apppPushNotifications = new AppPushNotifications();
      apppPushNotifications.registerForPushNotifications();
    } catch (error) {
      console.log('Error getting token =>', error);
    }
  }, []);

  const updateData = function(key, newValue) {
    const newData = Object.assign({}, data);
    newData[key] = newValue;
    setData(newData);
  }

  const hideLoadingAndAlert = function(message) {
    setLoading(false);
    setTimeout(() => {
      Alert.alert( 'Error', message);
    }, 100);
  }

  const handleLogin = async function() {
    const username = data.username.trim();
    const password = data.password.trim();

    if (!username || !password ) {
      Alert.alert('Error, faltan datos');
      return;
    }

    setLoading(true);

    try {
      let response = await apiFetcher.login(username, password);
      if (response.success) {
        console.log('=> ', response.user);
        await secureAppStorage.saveUser(response.user);
        replaceScreen(navigation, 'Home');
      } else {
        hideLoadingAndAlert('Nombre de usuario o contraseña inválidos.');
        return;
      }
    } catch(error) {
      console.log('Real error => ', error);
      hideLoadingAndAlert('Ocurrió un error, revisa tu conexión a internet.');
    }
    setLoading(false);
  }

  useEffect(() => {
    async function isLogged() {
      try {
        const user = await secureAppStorage.getUser();
        if (user) {
          goToScreen(navigation, 'Home');
        }
      } catch(error) {
        console.log('Not logged');
      }
    }
    isLogged();
  }, []);

  if (loading) {
    return <ViewLoading />;
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#1760bf'}}
      enableOnAndroid={true}
    >
      {/* <ImageBackground
        source={require('../../assets/images/login.png')}
        style={styles.bck_img}
      > */}
        <View style={styles.flexOne}>
          <View style={styles.flexPointSix}>
            
            <View style={styles.content_center}>
              {/* <Image
                style={styles.logo}
                source={require('../../assets/images/medallalogin.png')}
              /> */}
            </View>
          </View>

          <Text style={{
            flex: 1,
            color: '#FFF',
            fontSize: 25,
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: "bold"
          }}>SomosReconocimientos</Text>

          <View style={[styles.flexPointTwo, styles.column]}>
            <View style={styles.content_center}>
              <TextInput
                style={styles.input}
                placeholder={'Usuario'}
                placeholderTextColor="#f2f2f2"
                underlineColorAndroid='transparent'
                multiline={false}
                onChangeText={text => updateData('username', text)}
                value={data.username}
              />
              <TextInput
                style={styles.input}
                placeholder={'Contraseña'}
                placeholderTextColor="#f2f2f2"
                underlineColorAndroid='transparent'
                multiline={false}
                secureTextEntry
                onChangeText={text => updateData('password', text)}
                value={data.password}
              />

              <TouchableOpacity
                onPress={handleLogin}
                style={styles.btn_login}
              >
                <Text style={styles.text_light}>Entrar</Text>
              </TouchableOpacity>

              <Text style={styles.version}>{version}</Text>
            </View>
          </View>   

        </View>
      {/* </ImageBackground> */}
    </KeyboardAwareScrollView>
  );
}
