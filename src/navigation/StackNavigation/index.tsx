import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'screens/Home';
import Detail from 'screens/Detail';
import {RootStackParamList} from '../../types';

export enum ScreenNames {
  Home = 'Home',
  Detail = 'Detail',
}

export default () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName={ScreenNames.Home}>
      <Stack.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ScreenNames.Detail} component={Detail} />
    </Stack.Navigator>
  );
};
