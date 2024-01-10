import React from 'react';
import { 
  ImageBackground, ScrollView, Text, View, Image 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

import styles from '../../assets/styles/mainStyles.js';
import CardMessage from '../../views/cards/CardMessage.js';
import { colorLineStatus, textStatus } from '../../views/form/utilities.js';

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

  const renderMessagesData = (data) => {
    return data.map((message, i) => (
      <View key={i} style={styles.content_vacancy}>
        <CardMessage
          data={message}
          navigation={navigation}
        />
      </View>
    ));
  };

  let tableData = [];

  if (historyMss && historyMss.length) {
    
    historyMss.sort((a ,b ) => b.date - a.date);
    historyMss.map(item => {
      const date = new Date(item.date);
      item.dateString = moment(date).format('YYYY-MM-DD');
    })
    const groupBy = (data, prop) => {
      return data.reduce((groups, item) => {
        var val = item[prop];
        groups[val] 
          ? groups[val]['messages'].push(item) 
          : groups[val] = { time:val, messages: [item] };
        return groups;
      }, {});
    }
    
    tableData = groupBy(historyMss,'dateString');
  }

  const renderData = () => {
    return Object.entries(tableData).map(([key, value], i) => (
      <View key={i} style={styles.content_history}>
        <Text style={[styles.h6, styles.font_weight, styles.mb_2, styles.text_gray]}>
          {setDate(key)}
        </Text>
        <View style={styles.content_vacancy}>
          {renderMessagesData(value.messages)}
        </View>
      </View>
    ));
  }

  return (
    <ImageBackground
      source={require('../../assets/images/general_scene.png')}
      style={styles.bck_img}
    >
      <View style={styles.container}>
        <View style={styles.flexPointOne} />
        <View style={styles.flexPointNine}>
          <View style={styles.content_white}>
            <View style={[styles.flexPointTwo,]}>
              <View style={styles.content_center}>
                <Text style={[styles.h5, styles.font_weight, styles.text_center]}>
                  {vacancyName}
                </Text>
                <Text style={[styles.description, styles.text_center]}>
                  Fecha de postulación: {setDate()}
                </Text>
                {setStatus()}
              </View>
            </View>
            <View style={styles.flexPointNine}>
              <View style={styles.flexOne}>
                <View style={[styles.flexPointOne, styles.row_card]}>
                  <MaterialCommunityIcons
                    name='comment'
                    size={15}
                    color="#55bb4e"
                  />
                  <Text style={[styles.description, styles.font_weight]}>Mensajes</Text>
                </View>
                <View style={styles.flexPointNine}>
                  {/* {tableData && Object.keys(tableData)
                    ? (
                      <ScrollView>
                        {renderData()}
                      </ScrollView>
                    )
                    : ( */}
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
                    {/* )} */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
