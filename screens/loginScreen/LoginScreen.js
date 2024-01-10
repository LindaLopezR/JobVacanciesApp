import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import * as Updates from 'expo-updates';

import ApiFetcher from '../../modules/ApiFetcher.js';
import SecureAppStorage from '../../modules/SecureAppStorage';
import AppPushNotifications from '../../modules/AppPushNotifications.js';
import ViewLoading from '../../views/viewLoading/ViewLoading';

import styles from './styles.js';

const goToScreen = function(navigation, screen) {
  navigation.navigate(screen);
}

const replaceScreen = function(navigation, screen, params) {
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flexGrow: 1, backgroundColor: '#c7e3c5'}}
    >
      <ImageBackground
        source={require('../../assets/images/login_scene.png')}
        style={styles.bck_img}
      >
        <View style={[styles.flexOne, { padding: 20}]}>
          <View style={[styles.flexPointSeven, styles.column]}>
            <View style={styles.content_center}>
              <Text style={styles.title}>Jobs</Text>
            </View>
          </View>

          <View style={[styles.flexPointThree, styles.column]}>
            <View style={styles.content_center}>
              <TextInput
                style={styles.input}
                placeholder='Usuario'
                placeholderTextColor="#407c3d"
                multiline={false}
                onChangeText={text => updateData('username', text)}
                value={data.username}
              />
              <TextInput
                style={styles.input}
                placeholder='Contraseña'
                placeholderTextColor="#407c3d"
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
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
