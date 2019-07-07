/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types'
import React from 'react'
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  Text,
  View
} from 'react-native'
import Orientation from 'react-native-orientation-locker'
import Icon from 'react-native-vector-icons/Ionicons'
import Video from 'react-native-video'
import { NavigationEvents } from 'react-navigation'
import { AndroidBackHandler } from 'react-navigation-backhandler'
import Styles from './styles'

class VideoShowcase extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    // Setup the header and tabBarVisible status
    const header = state.params && (state.params.fullscreen ? undefined : null)
    const tabBarVisible = state.params ? state.params.fullscreen : true
    return {
      // For stack navigators, you can hide the header bar like so
      header,
      // For the tab navigators, you can hide the tab bar like so
      tabBarVisible
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      fullscreen: false,
      paused: false
    }
  }

  componentDidMount() {}

  componentWillUnmount() {
    Orientation.lockToPortrait()
  }

  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <View style={[Styles.Root]}>
          <NavigationEvents
            onWillFocus={() => this.setState({ paused: false })}
            onWillBlur={() => this.setState({ paused: true })}
          />
          <View
            style={[
              this.state.fullscreen
                ? Styles.FullscreenVideoContainer
                : Styles.VideoContainer
            ]}>
            <Video
              ref={ref => {
                this.player = ref
              }}
              source={{
                uri:
                  'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4'
              }}
              style={[Styles.Video]}
              controls
              repeat
              paused={this.state.paused}
              onLoad={() => this.setState({ loaded: true })}
              fullscreenAutorotate
              fullscreenOrientation="landscape"
            />
            {Platform.OS === 'android' && (
              <Icon
                name={this.state.fullscreen ? 'ios-contract' : 'ios-expand'}
                style={[Styles.FullscreenIcon]}
                onPress={() =>
                  this.presentFullscreenPlayer(!this.state.fullscreen)
                }
              />
            )}
            {!this.state.loaded && (
              <ActivityIndicator size="large" style={[Styles.Loader]} />
            )}
          </View>
          <View style={[Styles.DescriptionContainer]}>
            <Text style={[Styles.Description]}>
              Hier könnte die Beschreibung des Video stehen. Aute Lorem dolor
              labore labore commodo tempor irure eu id voluptate eu enim. Amet
              ut do amet voluptate pariatur eu laborum dolor nisi eiusmod
              nostrud mollit. Nisi laboris sunt duis commodo.
            </Text>
          </View>
        </View>
      </AndroidBackHandler>
    )
  }
  onBackButtonPressAndroid = () => {
    if (this.state.fullscreen) {
      this.presentFullscreenPlayer(false)
      return true
    }
    return false
  }
  presentFullscreenPlayer(fullscreen) {
    this.setState({ fullscreen })
    this.onFullScreen(fullscreen)
    StatusBar.setHidden(fullscreen)
    if (fullscreen) {
      Orientation.lockToLandscape()
    } else Orientation.lockToPortrait()
  }
  onFullScreen(status) {
    // Set the params to pass in fullscreen status to navigationOptions
    this.props.navigation.setParams({
      fullscreen: !status
    })
  }
}

VideoShowcase.propTypes = {
  navigation: PropTypes.object
}
export default VideoShowcase