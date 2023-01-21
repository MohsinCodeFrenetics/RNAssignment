import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { COLORS } from './constants';
import { BMICalculator, BMIResult } from './screens';


const App = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer theme={{ colors: { background: COLORS.primary } }}>
      <StatusBar
        backgroundColor={COLORS.primary}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='bmiCal' component={BMICalculator} />
        <Stack.Screen name='bmiResult' component={BMIResult} />

      </Stack.Navigator>
    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
