import React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import NavigationScreen from './controllers/screens/NavigationScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationScreen />
    </View>
  );
};

export default App;
