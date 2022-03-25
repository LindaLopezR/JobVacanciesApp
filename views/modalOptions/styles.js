import { StyleSheet } from 'react-native';
import mainStyles from './../../assets/styles/mainStyles.js';

let localStyles = {

  headerModal:{
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomColor: '#003D52',
    borderBottomWidth: 1,
  },

  modalContent: {
    backgroundColor : '#fff',
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 22,
    marginRight: 10,
    marginLeft: 10,
    width: '80%'
  },

  textContent: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 16
  },

  info:{
    height: 15
  },

  buttonsOption:{
    flexDirection: 'row',
  },

  btn_cancel:{
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderColor: '#C9252C',
    borderWidth: 1,
    borderStyle: 'solid',
  },

  btn_succes:{
    width: '100%',
    backgroundColor: "#003D52",
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  content_body_modal: {
    maxHeight: 380
  },

  picker: {
    marginTop: 10,
    marginBottom: 5,
  }
};

Object.assign(localStyles, mainStyles);
const styles = StyleSheet.create(localStyles);

export default styles;