import SecureAppStorage from './SecureAppStorage.js';
import { Platform } from 'react-native';
import axios from 'axios';

export default class ApiFetcher {

  constructor() {
    this.secureAppStorage = new SecureAppStorage();
    this.userId = null;
    this.company = null;
  }

  getBaseUrl() {
    return 'http://d7cd-2806-106e-23-b558-65e9-feac-7b89-6d0d.ngrok.io/api/v1/';
  }

  getUserId() {
    return new Promise((resolve, reject) => {

      if (this.userId !== null) {
        //console.log('Return user id from cache');
        resolve(this.userId);
      }

      //TODO bind?
      let self = this;

      this.secureAppStorage.getUser().then(userData => {
        self.userId = userData.id;
        resolve(self.userId);
      }).catch(error => {
        reject(error)
      });
    });

  }

  async _get(url) {
    console.log('Get => ', url);
    const response = await axios.get(url, {
      timeout : 5000
    })

    if (response.status == 200) {
      console.log(typeof(response.data))
      return response.data;
      
    } else {
      const error = 'Status code error';
      console.log(error)
      throw error;
    }
  }

  async _post(url, data) {
    const response = await axios.post(url, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      timeout : 5000
    });

    if (response.status == 200) {
      return response.data;
    }

    const error = 'Status code error';
    throw error;
  }

  async testEndpoint(company) {
    let toTest = `${company}/api/v1/testEndpoint`;
    const response = await axios.get(toTest);
    if (response.status == 200) {
      return response.data;
    } else {
      const error = 'Status code error';
      throw error;
    }
  }

  async login(username, password) {
    const endpoint = 'login';
    const baseUrl = this.getBaseUrl();
    let pushToken = '';
    try {
      pushToken = await this.secureAppStorage.getPushToken();
      console.log('Token => ', pushToken);
    } catch(error) {
      console.log('Push Token Error => ', error);
    }

    const url = `${baseUrl}${endpoint}`;
    console.log('Url => ', url);

    let data = {
      username : username,
      password : password,
      pushToken : pushToken,
      os : Platform.OS,
      version : 'rewards',
      product : 'merit'
    };

    return await this._post(url, data);
  }

  async getVacancies() {
    const endpoint = 'getVacancies';
    const baseUrl = this.getBaseUrl();
    const url = `${baseUrl}${endpoint}`;
    return await this._get(url);
  }

  async completeVacancy(data) {
    const endpoint = 'completeVacancy';
    const baseUrl = this.getBaseUrl();
    const url = `${baseUrl}${endpoint}`;
    return await this._post(url, data);
  }

  async getNominations(data) {
    const endpoint = 'getNominationsByUser';
    const baseUrl = this.getBaseUrl();
    const url = `${baseUrl}${endpoint}/${data}`;
    return await this._get(url);
  }

}
