import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';
import {RoutesNames} from '../config';
import {Home, Category, Notification} from '../screens';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabRoutes"
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={TabRoutes} name="TabRoutes" />
      <Stack.Screen component={Home} name={RoutesNames.HOME} />
      <Stack.Screen component={Category} name={RoutesNames.CATEGORY} />
      <Stack.Screen component={Notification} name={RoutesNames.NOTIFICATION} />
    </Stack.Navigator>
  );
};
export default StackRoutes;
