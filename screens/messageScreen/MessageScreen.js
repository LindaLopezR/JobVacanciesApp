import React from 'react';
import { 
  ImageBackground, ScrollView, Text, View, 
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';

import ViewLoading from '../../views/viewLoading/ViewLoading.js';

import styles from '../../assets/styles/mainStyles.js';

export default function DetailVacancyScreen({ route, navigation }) {

  const { data, navigation, } = props;
  const { date, message } = data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Mensaje',
      headerTintColor: '#55bb4e',
      headerTransparent: true,
      headerStyle: { backgroundColor: 'transparent'},
    });
  }, [navigation]);

  if (loading) {
    return (<ViewLoading />);
  }

  const { width } = useWindowDimensions();
  const source = {
    html: message
  };

  return (
    <ImageBackground
      source={require('../../assets/images/blob-scene-haikei.png')}
      style={styles.bck_img}
    >
      {_renderModalConfirm(modalVisible, _confirmAction, setModalVisible)}
      <View style={styles.container}>
        <View style={styles.flexPointOne} />
        <View style={styles.flexPointNine}>
          <View style={styles.card_step}>
            <View style={styles.flexPointTwo}>
              <Text style={[styles.h3, styles.text_center, styles.font_weight,]}>
                Fecha:
              </Text>
            </View>
            <View style={styles.flexPointNine}>
              <ScrollView>
                <RenderHtml
                  contentWidth={width}
                  source={source}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
