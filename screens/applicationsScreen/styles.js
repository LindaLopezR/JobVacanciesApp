import { StyleSheet } from 'react-native';
import mainStyles from '../../assets/styles/mainStyles.js';

let localStyles = {};

Object.assign(localStyles, mainStyles);
const styles = StyleSheet.create(localStyles);

export default styles;
