import { StyleSheet } from 'react-native';
import mainStyles from './../../assets/styles/mainStyles.js';

let localStyles = {
  mainContainer: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0.5,
    borderColor: '#1760BF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  radioButtonIcon: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#1760BF',
    height: 25,
    width: 25,
    borderRadius: 30 / 2,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIconInnerIcon: {
    height: 20,
    width: 20,
    backgroundColor: '#1760BF',
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: 'white',
  },
  radioButtonTextContainer: {
    flex: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  radioButtonText: {
    fontSize: 16,
  },
}

Object.assign(localStyles, mainStyles);
const styles = StyleSheet.create(localStyles);

export default styles;
