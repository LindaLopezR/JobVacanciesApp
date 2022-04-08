import { StyleSheet } from 'react-native';
import mainStyles from '../../assets/styles/mainStyles.js';

let localStyles = {

  item: {
    borderColor: '#00568C',
    backgroundColor: '#fff',
    paddingTop: 55,
    paddingBottom: 55,
    margin: 15,
    borderRadius: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  icon_menu:{
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 70,
    height: 70,
    backgroundColor: '#C7E3C5'
  }
}

Object.assign(localStyles, mainStyles);
const styles = StyleSheet.create(localStyles);

export default styles;
