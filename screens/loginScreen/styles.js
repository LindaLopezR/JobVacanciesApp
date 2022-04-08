import { StyleSheet } from 'react-native';
import mainStyles from '../../assets/styles/mainStyles.js';

let localStyles = {
  logo:{
    width: 252,
    height: 65,
    marginBottom: 40
  },
  input: {
    borderStyle: 'solid',
    borderRadius: 25,
    width: '70%',
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 25,
    backgroundColor: '#e6f3e5',
    color: '#356233',
  },
  version:{
    color: '#356233'
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
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold'
  }
};

Object.assign(localStyles, mainStyles);
const styles = StyleSheet.create(localStyles);

export default styles;
