import * as SecureStore from 'expo-secure-store';

const USER = 'User';
const INTRO = 'INTRO';
const COMPANY = 'COMPANY';
const PUSH_TOKEN = 'PUSH_TOKEN';
const PRODUCTS = 'PRODUCTS';

class SecureAppStorage {

  constructor() {
    //console.log("Creating secure storage....");
  }

  _getJSONItem(key) {
    return new Promise((resolve, reject) => {
      SecureStore.getItemAsync(key).then((response) => {
        resolve(JSON.parse(response));
      }).catch((error) => {
        reject(error);
      });
    });
  }

  _getStringItem(key) {
    return new Promise((resolve, reject) => {

      SecureStore.getItemAsync(key).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });

    });
  }

  saveUser(user) {
    user.picture = encodeURI(user.picture);
    let userString = JSON.stringify(user);
    return SecureStore.setItemAsync(USER, userString);
  }

  getUser() {
    return this._getJSONItem(USER);
  }

  deleteUser() {
    return SecureStore.deleteItemAsync(USER);
  }

  getCompany() {
    return this._getStringItem(COMPANY);
  }

  deleteCompany() {

  }

  deletePermissions() {
    return SecureStore.deleteItemAsync(PERMISISONS);
  }

  showIntro() {
    return new Promise((resolve, reject) => {

      SecureStore.getItemAsync(INTRO).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });

    });
  }

  stopShowingIntro() {
    return SecureStore.setItemAsync(INTRO, 'SKIP_INTRO');
  }

  savePushToken(token) {
    return SecureStore.setItemAsync(PUSH_TOKEN, token);
  }

  getPushToken() {
    return this._getStringItem(PUSH_TOKEN);
  }

};

export default SecureAppStorage;
