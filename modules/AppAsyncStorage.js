import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORIES = 'HISTORIES';

class AppAsyncStorage {

  constructor() {
  }

  // funciones auxiliares para guardar y obtener
  _getJSONItem(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key).then((response) => {
        resolve(JSON.parse(response));
      }).catch((error) => {
        reject(error);
      });
    });
  }

  _getStringItem(key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });

    });
  }

  async getAllHistories() {
    let allItems  = [];
    try {
      allItems = await this._getJSONItem(HISTORIES);
    } catch(error) {
      console.log('Error => ', error);
    }

    if (allItems == null) {
      allItems = [];
    }

    return allItems;
  }

  async deleteHistory(historyId) {
    let allItems  = await this._getJSONItem(HISTORIES);

    allItems = allItems.filter(item => {
      return item._id != historyId;
    });

    //Delete circular
    allItems = allItems.map(item => {
      delete item.item;
      return item;
    });

    allItems = JSON.stringify(allItems);
    return AsyncStorage.setItem(HISTORIES, allItems);
  }

  async insertOnlyNewHistories(data) {
    let allItems  = [];
    try {
      allItems = await this._getJSONItem(HISTORIES);
    } catch(error) {
      console.log('Error => ', error);
    }

    if (allItems == null) {
      allItems  = [];
    }

    const newHistories = [ data ];

    allItems = [...allItems, ...newHistories];
    allItems = JSON.stringify(allItems);
    return AsyncStorage.setItem(HISTORIES, allItems);
  }

  async getHistory(historyId) {
    let allItems = [];
    try {
      allItems = await this._getJSONItem(HISTORIES);
    } catch(error) {
      console.log('Error => ', error);
    }

    if (allItems == null) {
      allItems = [];
    }

    const finded = allItems.find(item => {
      return item._id == historyId;
    });

    return finded;
  }

  deleteAllHistories() {
    AsyncStorage.removeItem(HISTORIES);
  }

  deleteAllData() {
    return AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
  }

};

export default AppAsyncStorage;
