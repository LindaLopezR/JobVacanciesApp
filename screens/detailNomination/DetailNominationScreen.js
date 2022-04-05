import React from 'react';
import { 
  ImageBackground, ScrollView, Text, View, Image 
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelopeOpenText, } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import { colorLineStatus, textStatus } from '../../views/form/utilities.js';

import styles from '../../assets/styles/mainStyles.js';
import CardMessage from '../../views/cards/CardMessage.js';

export default function DetailNominationScreen({ route, navigation }) {

  const { data } = route.params;
  const { date, historyMss, status, vacancyName } = data;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Detalle de mi postulación',
      headerTintColor: '#55bb4e',
      headerTransparent: true,
      headerStyle: { backgroundColor: 'transparent'},
    });
  }, [navigation]);

  const setStatus = () => {
    const color = colorLineStatus(status);
    return (
      <Text style={[styles.status, styles.font_weight, styles.badge, color]}>
        {textStatus(status)}
      </Text>
    );
  };

  const setDate = () => moment(date).format('DD MMMM YYYY');

  const renderData = () => {
    return historyMss.map((message, i) => (
      <View key={i} style={styles.content_vacancy}>
        <CardMessage
          data={message}
          navigation={navigation}
        />
      </View>
    ));
  };

  return (
    <ImageBackground
      source={require('../../assets/images/blob-scene-haikei.png')}
      style={styles.bck_img}
    >
      <View style={styles.container}>
        <View style={styles.flexPointOne} />
        <View style={styles.flexPointNine}>
          <View style={styles.card_step}>
            <View style={styles.flexPointThree}>
              <View style={[styles.flexOne, styles.row_card, styles.row_description]}>
                <View style={styles.flexPointSix}>
                  <Text style={[styles.h3, styles.font_weight,]}>
                    {vacancyName}
                  </Text>
                </View>
                <View style={styles.flexPointSix}>
                  <Text style={styles.description}>
                    Fecha de postulación: {setDate()}
                  </Text>
                  {setStatus()}
                </View>
              </View>
            </View>
            <View style={styles.flexPointSeven}>
              <View style={styles.flexOne}>
                <View style={[styles.flexPointOne, styles.row_card]}>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpenText} 
                    size={15}
                    color="#55bb4e"
                  />
                  <Text style={[styles.description, styles.font_weight]}>Mensajes</Text>
                </View>
                <View style={styles.flexPointNine}>
                  {historyMss && historyMss.length 
                    ? (
                      <ScrollView>
                        {renderData()}
                      </ScrollView>
                    )
                    : (
                      <View style={styles.content_center}>
                        <View style={styles.contentImg}>
                          <Image
                            style={styles.image_noData}
                            source={require('../../assets/images/jobs.png')}
                          />
                        </View>
                        <Text style={[styles.h2, styles.text_center, styles.text_gray]}>
                          Sin mensajes
                        </Text>
                      </View>
                    )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
