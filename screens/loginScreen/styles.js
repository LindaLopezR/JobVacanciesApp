import { StyleSheet } from 'react-native';
import mainStyles from '../../assets/styles/mainStyles.js';

let localStyles = {
  logo:{
    width: 270,
    height: 270,
    marginBottom: 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 25,
    width: '70%',
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 25,
    color: '#fff',
  },
  version:{
    color: '#f2f2f2'
  },
  btn_login:{
    width: '70%',
    backgroundColor:"#0F495E",
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  text_btn:{
    color: '#fff',
    fontSize: 16
  }
};

Object.assign(localStyles, mainStyles);
const styles = StyleSheet.create(localStyles);

export default styles;
