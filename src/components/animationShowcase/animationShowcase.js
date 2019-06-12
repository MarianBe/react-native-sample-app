import React from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  Animated,
  View,
  StatusBar,
  BackHandler,
  TouchableOpacity,
  ToastAndroid,
  InteractionManager,
  Text,
  SafeAreaView
} from 'react-native'
import Parallax from '../parallax/parallax'
import Basics from '../animationBasics/animationBasics'
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
    this.state = {
      activeTab: 1
    }
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={[Styles.Root]}>
        <View style={[Styles.TabContainer]}>
          <TouchableOpacity
            style={[Styles.Tab, this.state.activeTab === 1 && Styles.ActiveTab]}
            onPress={() => this.setActiveTab(1)}>
            <Text>Basics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.Tab, this.state.activeTab === 2 && Styles.ActiveTab]}
            onPress={() => this.setActiveTab(2)}>
            <Text>Fortgeschritten</Text>
          </TouchableOpacity>
        </View>
        {this.state.activeTab === 1 ? (
          <Basics />
        ) : (
          <Parallax
            data={dataArray}
            imageHeight={320}
            title="test"
            stickyHeaderIndices={[4, 6, 9, 23, 34, 67]}
            imageURL={
              'https://cdn-images-1.medium.com/max/1200/1*ub1DguhAtkCLvhUGuVGr6w.png'
            }
          />
        )}
      </SafeAreaView>
    )
  }
  setActiveTab(tab) {
    this.setState({ activeTab: tab })
  }
}

AnimationShowcase.propTypes = {
  navigation: PropTypes.object
}
export default AnimationShowcase
