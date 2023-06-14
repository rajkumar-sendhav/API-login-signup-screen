import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerLogin from '../Post Api Call With Reduxe/screens/function/CustomerLogin';
import CustomerRegister from '../Post Api Call With Reduxe/screens/function/CustomerRegister';
// Import Redux
import { Provider } from 'react-redux';
import gstore from '../reduxthunk/Store';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
}

function NavigationScreen() {
  return (
    <Provider store={gstore}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomerLogin" screenOptions={screenOptions} >
        <Stack.Screen name="CustomerLogin" component={CustomerLogin} />
        <Stack.Screen name="CustomerRegister" component={CustomerRegister} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default NavigationScreen;
