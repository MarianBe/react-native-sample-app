import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation'
import { Animated, Easing } from 'react-native'

import { Variables } from './themes'

/* Screens */

// Main Application
import Home from './components/home/home'
import AnimationShowcase from './components/animationShowcase/animationShowcase'
import APIShowcase from './components/apiShowcase/apiShowcase'
import FlatlistShowcase from './components/flatlistShowcase/flatlistShowcase'
/* 
const Auth = createStackNavigator(
  {
    Intro: { screen: Intro },
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    index: 0,
    initialRouteName: 'Intro',
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
    headerMode: 'none'
    // transitionConfig: getSlideFromRightTransition
  }
) */
const TabNav = createBottomTabNavigator(
  {
    Home: { screen: Home },
    FlatlistShowcase,
    AnimationShowcase,
    APIShowcase
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      /* tabBarIcon: ({ focused, horizontal, tintColor }) => {
        // eslint-disable-line
        const { routeName } = navigation.state
        if (routeName === 'Home') {
          return (
            <CustomIcon
              name={'home' + (focused ? '_filled' : '_outline')}
              style={{ color: tintColor, fontSize: 25 }}
            />
          )
        }
        if (routeName === 'Discover') {
          return (
            <CustomIcon
              name={'search' + (focused ? '_filled' : '_outline')}
              style={{ color: tintColor, fontSize: 25 }}
            />
          )
        }
        if (routeName === 'MyMasters') {
          return (
            <CustomIcon
              name={'mymasters' + (focused ? '_filled' : '_outline')}
              style={{ color: tintColor, fontSize: 25 }}
            />
          )
        }
        if (routeName === 'Profile') {
          return (
            <CustomIcon
              name={'profile' + (focused ? '_filled' : '_outline')}
              style={{ color: tintColor, fontSize: 25 }}
            />
          )
        }
      } */
    }),
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    backBehavior: 'initialRoute',

    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: 'white'
      },
      activeTintColor: Variables.brandPrimary,
      inactiveTintColor: 'gray'
    }
  }
)
/* const fluidTransitionConfig = {
  duration: 300,
  easing: Easing.quad,
  timing: Animated.timing,
  useNativeDriver: true
} */

export const Navigator = createSwitchNavigator(
  {
    /* CheckToken: { screen: CheckToken },
    Auth: { screen: Auth },
    Stack: { screen: ParentStack },
    NoInternet: { screen: NoInternet },
    UpdateNow: { screen: UpdateNow } */
    TabNav
  },
  {
    cardStyle: { backgroundColor: 'black' },
    index: 0,
    initialRouteName: 'TabNav'
  }
)
const App = createAppContainer(Navigator)

export default App
