import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Home } from './screens';
import Counter from './screens/Counter';
import store from './redux-toolkit/store';
import { Provider } from 'react-redux';
import Test1 from './screens/Test1';


const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator();

const Navigator = () =>{
  return(
    <NavigationContainer theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
      initalRouteName={'Test1'}
    >
      <Stack.Screen name='Test1' component={Test1}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const App = () => {
  return (
      <Provider store={store}>
        <Navigator />
      </Provider>
  );
};

export default App;