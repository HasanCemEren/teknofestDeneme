import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabRouter} from '@react-navigation/native';
import {RoutesNames} from '../config';
import {Home, Category, Notification} from '../screens';
import {Icons} from '../assets';
import {Image} from 'react-native';

const BottomTab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name={RoutesNames.HOME_ICON}
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Icons.home}
              style={{
                tintColor: focused ? 'orange' : 'gray',
                width: 32,
                height: 32,
                alignSelf: 'center',
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={RoutesNames.CATEGORY_ICON}
        component={Category}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Icons.location}
              style={{
                tintColor: focused ? 'orange' : 'gray',
                width: 32,
                height: 32,
                alignSelf: 'center',
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AAA"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Icons.camera}
              style={{
                tintColor: focused ? 'orange' : 'gray',
                width: 32,
                height: 32,
                alignSelf: 'center',
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={RoutesNames.NOTIFICATION_ICON}
        component={Notification}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Icons.medal}
              style={{
                tintColor: focused ? 'orange' : 'gray',
                width: 32,
                height: 32,
                alignSelf: 'center',
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="BBB"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Icons.user}
              style={{
                tintColor: focused ? 'orange' : 'gray',
                width: 32,
                height: 32,
                alignSelf: 'center',
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default TabRoutes;
