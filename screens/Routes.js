import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackNavigator from './components/StackNavigator'
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();  

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="WelcomePage" component={StackNavigator} options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ black, size }) => (
              <Icon name="home" color={black} size={size} />
            ),
          }}/>
          <Tab.Screen name="Profil" component={StackNavigator} options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ black, size }) => (
              <Icon name="user" color={black} size={size} />
            ),
          }}/>
            <Tab.Screen name="Login" component={StackNavigator} options={{
            tabBarLabel: "Se connecter",
            tabBarIcon: ({ black, size }) => (
              <Icon name="user" color={black} size={size} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes