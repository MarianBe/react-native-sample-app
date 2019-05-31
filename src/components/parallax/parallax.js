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
  SafeAreaView,
  Image
} from 'react-native'
import I18n from 'react-native-i18n'
import { NavigationEvents } from 'react-navigation'
import _ from 'lodash'
import SplashScreen from 'react-native-splash-screen'
import Styles from './styles'
let AnimatedScrollViewValue = new Animated.Value(0)
const window = Dimensions.get('window')
/* let dataArray = []
for (let i = 0; i < 100; i++) {
  dataArray.push(i)
} */
class Animation extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.scaleDown = AnimatedScrollViewValue.interpolate({
      inputRange: [0, this.props.imageHeight * 0.8],
      outputRange: [1, 0.7],
      extrapolate: 'clamp'
    })
    this.titleTranslation = AnimatedScrollViewValue.interpolate({
      inputRange: [0, this.props.imageHeight * 0.8],
      outputRange: [0, window.width],
      extrapolate: 'clamp'
    })
    this.stayTranslation = AnimatedScrollViewValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
    this.fadeOut = AnimatedScrollViewValue.interpolate({
      inputRange: [0, this.props.imageHeight * 0.8],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={[Styles.Root]}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={this.props.stickyHeaderIndices}
          scrollEventThrottle={1} // wichtig für die 60 fps / updates bei jedem event
          bounces="never"
          overScrollMode="never"
          contentContainerStyle={{ paddingTop: this.props.imageHeight }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: AnimatedScrollViewValue
                  }
                }
              }
            ],
            { useNativeDriver: true }
          )}>
          <Animated.View
            style={[Styles.Header, { height: this.props.imageHeight }]}>
            <Animated.Text
              style={[
                Styles.Title, {
                  transform: [
                    { translateX: this.titleTranslation }, { translateY: this.stayTranslation }
                  ]
                }
              ]}>
              {this.props.title}
            </Animated.Text>
            <Animated.Image
              source={{
                uri: this.props.imageURL
              }}
              style={[
                Styles.Image, {
                  height: this.props.imageHeight,
                  transform: [{ scale: this.scaleDown }],
                  opacity: this.fadeOut
                }
              ]}
            />
          </Animated.View>
          {this.props.data.map(item => (
            <View key={item} style={[Styles.DataItem]}>
              <Text>{item}</Text>
            </View>
          ))}
        </Animated.ScrollView>
      </SafeAreaView>
    )
  }
}

Animation.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.array
}
export default Animation
