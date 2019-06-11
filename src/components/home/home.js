import React from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  Animated,
  View,
  StatusBar,
  BackHandler,
  ToastAndroid,
  InteractionManager,
  Text,
  UIManager,
  SafeAreaView
} from 'react-native'
import I18n from 'react-native-i18n'
import { NavigationEvents } from 'react-navigation'
import _ from 'lodash'
import SplashScreen from 'react-native-splash-screen'
import Styles from './styles'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    SplashScreen.hide()

    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={[Styles.Root]}>
        <Text style={[Styles.Title]}>
          Das ist unser Homescreen. Er befindet sich in einem Drawer. Swipen Sie
          doch mal von Links um die einzelnen Tabs zu entdecken.
        </Text>
      </SafeAreaView>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object
}
export default Home
