import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/navigations/HomeScreen';
import {library} from '@fortawesome/fontawesome-svg-core';

import {
  faSearch,
  faToggleOn,
  faToggleOff,
  faHouse,
  faList,
  faBell,
  faUser,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Catogories from './src/navigations/Catogories';
import Notifications from './src/navigations/Notifications';
import Account from './src/navigations/Account';
import Cart from './src/navigations/Cart';

library.add(
  faSearch,
  faToggleOff,
  faToggleOn,
  faList,
  faBell,
  faUser,
  faCartShopping,
);

export default function App() {
  const toggleSwitch = () => {
    setToggle(!toggle);
  };
  const [toggle, setToggle] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerShown: true,
            header: () => (
              <View style={styles.headerContainer}>
                <View style={styles.toggleContainer}>
                  <Text>Brand Mall</Text>
                  <TouchableOpacity
                    onPress={toggleSwitch}
                    style={styles.toggleButton}>
                    {toggle ? (
                      <FontAwesomeIcon
                        icon={faToggleOn}
                        size={28}
                        color="gray"
                        style={{
                          alignSelf: 'center',
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faToggleOff}
                        size={28}
                        color="gray"
                        style={{
                          alignSelf: 'center',
                        }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.searchBar}>
                  <FontAwesomeIcon icon={faSearch} size={20} color="gray" />
                  <Text>Search for products</Text>
                </View>
              </View>
            ),
          }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = faHouse;

            if (route.name === 'Home') {
              iconName = faHouse;
            } else if (route.name === 'Categories') {
              iconName = faList;
            } else if (route.name === 'Notifications') {
              iconName = faBell;
            } else if (route.name === 'Account') {
              iconName = faUser;
            } else if (route.name === 'Cart') {
              iconName = faCartShopping;
            }
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: '#1582E8',
          tabBarInactiveTintColor: 'darkgray',
          tabBarContainerStyle: {backgroundColor: 'blue'},
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            header: () => (
              <View style={styles.headerContainer}>
                <View style={styles.toggleContainer}>
                  <Text>Brand Mall</Text>
                  <TouchableOpacity
                    onPress={toggleSwitch}
                    style={styles.toggleButton}>
                    {toggle ? (
                      <FontAwesomeIcon
                        icon={faToggleOn}
                        size={28}
                        color="gray"
                        style={{
                          alignSelf: 'center',
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faToggleOff}
                        size={28}
                        color="gray"
                        style={{
                          alignSelf: 'center',
                        }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.searchBar}>
                  <FontAwesomeIcon icon={faSearch} size={20} color="gray" />
                  <Text>Search for products</Text>
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Catogories}
          options={{
            headerShown: true,
            title: 'All Categories',
            headerRight: () => (
              <View style={styles.headerRight}>
                <FontAwesomeIcon icon={faSearch} size={20} />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginRight: 10,
    marginVertical: 10,
  },
  toggleButton: {
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 4,
    flexDirection: 'row',
    gap: 15,
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
    borderColor: 'gray',
    padding: 5,
    borderWidth: 0.2,
    borderRadius: 3,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  toggleContainer: {
    flex: 1,
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
  },
});
