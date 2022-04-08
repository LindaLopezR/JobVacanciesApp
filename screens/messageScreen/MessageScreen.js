import React from 'react';
import { 
  ImageBackground, ScrollView, Text, View, 
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import moment from 'moment';

import styles from '../../assets/styles/mainStyles.js';

export default function MessageScreen({ route, navigation }) {

  const { data } = route.params;
  const { completeMessage, date } = data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Mensaje',
      headerTintColor: '#55bb4e',
      headerTransparent: true,
      headerStyle: { backgroundColor: 'transparent'},
    });
  }, [navigation]);

  const setDate = () => moment(date).format('DD MMMM YYYY');
  const { width } = useWindowDimensions();
  const source = {
    html: completeMessage
  };

  return (
    <ImageBackground
      source={require('../../assets/images/general_scene.png')}
      style={styles.bck_img}
    >
      <View style={styles.container}>
        <View style={styles.flexPointOne} />
        <View style={styles.flexPointNine}>
          <View style={styles.content_white}>
            <View style={styles.flexPointTwo}>
              <Text style={[styles.h6, styles.text_center, styles.font_weight,]}>
                Fecha: {setDate()}
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
