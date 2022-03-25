import { StyleSheet } from 'react-native';
import mainStyles from '../../assets/styles/mainStyles.js';

let localStyles = {

  content_vacancy: {
    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 5
  },

};

Object.assign(localStyles, mainStyles);
const styles = StyleSheet.create(localStyles);

export default styles;
