import PropTypes from 'prop-types'
import React from 'react'
import { SafeAreaView, Text, UIManager, View, StyleSheet } from 'react-native'
import Video from 'react-native-video'
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
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Video
          source={{
            uri: 'http://video2.ignitemotion.com/files/mp4/EarthSun.mp4'
          }}
          resizeMode="cover"
          style={[StyleSheet.absoluteFill]}
          repeat
        />

        <SafeAreaView style={[Styles.Root]}>
          <Text style={[Styles.Title]}>
            Das ist unser Homescreen. Er befindet sich in einem Drawer. Swipen
            Sie doch mal von Links um die einzelnen Tabs zu entdecken.
          </Text>
        </SafeAreaView>
      </View>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object
}
export default Home
