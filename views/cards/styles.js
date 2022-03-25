import { StyleSheet } from 'react-native';
import mainStyles from '../../assets/styles/mainStyles.js';

let localStyles = {

  card_vacancy: {
    backgroundColor: '#fff',
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    padding: 20
  },

  row_description: {
    marginTop: 10
  },
};

Object.assign(localStyles, mainStyles);
const styles = StyleSheet.create(localStyles);

export default styles;
