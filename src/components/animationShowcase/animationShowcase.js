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
  SafeAreaView
} from 'react-native'
import Parallax from '../parallax/parallax'
import I18n from 'react-native-i18n'
import { NavigationEvents } from 'react-navigation'
import _ from 'lodash'
import SplashScreen from 'react-native-splash-screen'
import Styles from './styles'
let dataArray = []
for (let i = 0; i < 100; i++) {
  dataArray.push(i)
}
class AnimationShowcase extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={[Styles.Root]}>
        <Parallax
          data={dataArray}
          imageHeight={320}
          title="test"
          stickyHeaderIndices={[4, 6, 9, 23, 34, 67]}
          imageURL={
            'https://cdn-images-1.medium.com/max/1200/1*ub1DguhAtkCLvhUGuVGr6w.png'
          }
        />
      </SafeAreaView>
    )
  }
}

AnimationShowcase.propTypes = {
  navigation: PropTypes.object
}
export default AnimationShowcase
