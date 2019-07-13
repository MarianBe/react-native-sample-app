import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'
import Animation from './components/animationShowcase/animationShowcase'
import API from './components/apiShowcase/apiShowcase'
import Flatlist from './components/flatlistShowcase/flatlistShowcase'
import FlexScreen from './components/flex/flex'
/* Screens */
// Main Application
import HomeScreen from './components/home/home'
import Maps from './components/mapsShowcase/mapsShowcase'
import Video from './components/videoShowcase/videoShowcase'

const commonHeaderConfig = {
  headerMode: 'float',
  headerLayoutPreset: 'center'
}
const headerNavigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.routeName,
    headerLeft: (
      <Icon
        name="ios-menu"
        size={30}
        style={{ marginStart: 10 }}
        backgroundColor="#000000"
        onPress={() => navigation.openDrawer()}
      />
    ),
    headerTitleStyle: {
      ...Platform.select({
        ios: { fontFamily: 'Arial' },
        android: { fontFamily: 'Roboto' }
      })
    }
  }
}
const Home = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: headerNavigationOptions
    }
  },
  { ...commonHeaderConfig }
)
const Flex = createStackNavigator(
  {
    'Flex und Style ': {
      screen: FlexScreen,
      navigationOptions: headerNavigationOptions
    }
  },
  { ...commonHeaderConfig }
)
const FlatlistShowcase = createStackNavigator(
  {
    'Flatlist Demo ': {
      screen: Flatlist,
      navigationOptions: headerNavigationOptions
    }
  },
  { ...commonHeaderConfig }
)
const AnimationShowcase = createStackNavigator(
  {
    'Animationen Demo ': {
      screen: Animation,
      navigationOptions: headerNavigationOptions
    }
  },
  { ...commonHeaderConfig }
)
const APIShowcase = createStackNavigator(
  {
    'API-Aufruf Demo ': {
      screen: API,
      navigationOptions: headerNavigationOptions
    }
  },
  { ...commonHeaderConfig }
)
const MapsShowcase = createStackNavigator(
  {
    'Google Maps Demo ': {
      screen: Maps,
      navigationOptions: headerNavigationOptions
    }
  },
  { ...commonHeaderConfig }
)
const VideoShowcase = createStackNavigator(
  {
    'Videoplayer Demo ': {
      screen: Video,
      navigationOptions: headerNavigationOptions
    }
  },
  { ...commonHeaderConfig }
)
const Drawer = createDrawerNavigator(
  {
    Home,
    'Flex und Style': { screen: Flex },
    'Flatlist Demo': { screen: FlatlistShowcase },
    'Animationen Demo': { screen: AnimationShowcase },
    'API-Aufruf Demo': { screen: APIShowcase },
    'Google Maps Demo': { screen: MapsShowcase },
    'Videoplayer Demo': { screen: VideoShowcase }
  },
  {
    swipeEnabled: false,
    animationEnabled: true,
    backBehavior: 'initialRoute',
    contentOptions: {
      labelStyle: {
        ...Platform.select({
          ios: { fontFamily: 'Arial' },
          android: { fontFamily: 'Roboto' }
        })
      }
    }
  }
)

export const Navigator = createSwitchNavigator(
  {
    /* Hier kommen die Auth Stacks rein, wenn es welche gibt
    /* CheckToken: { screen: CheckToken },
    Auth: { screen: Auth }, */
    Drawer
  },
  {
    cardStyle: { backgroundColor: 'black' },
    index: 0,
    initialRouteName: 'Drawer'
  }
)
const App = createAppContainer(Navigator)

export default App
