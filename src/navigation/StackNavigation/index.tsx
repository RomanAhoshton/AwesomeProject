import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Detail from '../../screens/Detail';
import {RootStackParamList} from '../../types';

export default () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
