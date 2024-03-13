import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import React from 'react';

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigator;
