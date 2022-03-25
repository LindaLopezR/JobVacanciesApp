import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/loginScreen/LoginScreen';
import HomeScreen from './screens/homeScreen/HomeScreen';
import VacanciesScreen from './screens/vacanciesScreen/VacanciesScreen';
import ApplicationsScreen from './screens/applicationsScreen/ApplicationsScreen';
import DetailVacancyScreen from './screens/detailVacancy/DetailVacancyScreen';
import DetailNominationScreen from './screens/detailNomination/DetailNominationScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShadowVisible: false}} />
        <Stack.Screen name="Vacancies" component={VacanciesScreen} options={{headerShadowVisible: false}} />
        <Stack.Screen name="VacancyDetail" component={DetailVacancyScreen} options={{headerShadowVisible: false}} />
        <Stack.Screen name="Applications" component={ApplicationsScreen} options={{headerShadowVisible: false}} />
        <Stack.Screen name="NominationDetail" component={DetailNominationScreen} options={{headerShadowVisible: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
