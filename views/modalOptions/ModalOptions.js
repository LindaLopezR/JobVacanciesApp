 import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';

import styles from './styles.js';

export default function ModalOptions(props) {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      onRequestClose={() => {console.log("Modal has been closed.")}}
    >
        <View style={styles.content_center}>
          <View style={styles.modalContent}>
            <Text style={styles.headerModal}>
              {props.titleString?props.titleString:'Confirmar:'}
            </Text>

            <Text style={styles.textContent}>
              {props.message?props.message:''}
            </Text>

            <View style={styles.buttonsOption}>
              <View style={{flex: 0.5}}>
                <TouchableOpacity
                  onPress={()=>{
                    let callback = props.cancelCallback || (()=>{});
                    callback();
                  }}
                  style={styles.btn_cancel}
                >
                  <Text style={styles.text_danger}>
                    {props.cancelString?props.cancelString:''}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 0.5}}>
                <TouchableOpacity
                  onPress={()=>{
                    let callback = props.successCallback || (()=>{});
                    callback();
                  }}
                  style={styles.btn_succes}
                >
                  <Text style={styles.text_light}>
                    {props.succesString?props.succesString:'OK'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    </Modal>
  );
};
