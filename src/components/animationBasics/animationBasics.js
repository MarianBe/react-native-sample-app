import PropTypes from 'prop-types'
import React from 'react'
import {
  Animated,
  Dimensions,
  Easing,
  PanResponder,
  SafeAreaView,
  Text,
  View
} from 'react-native'
import Styles from './styles'
const window = Dimensions.get('window')
let pan = new Animated.ValueXY()
let scale = new Animated.Value(1)
let textScale = new Animated.Value(1)
let translateOutBaseValue = new Animated.Value(0)
let translateOutAnimationX = translateOutBaseValue.interpolate({
  inputRange: [0, 0.25, 0.6, 1],
  outputRange: [0, -window.width / 4, window.width / 2, 0],
  extrapolate: 'clamp'
})
let translateOutAnimationY = translateOutBaseValue.interpolate({
  inputRange: [0, 0.25, 0.75, 1],
  outputRange: [0, window.height / 4, -window.height, 0],
  extrapolate: 'clamp'
})
class Basics extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.createPanResponder()
    this.textScaleValue = 1
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    /* die Values von pan deconstructen */
    const [translateX, translateY] = [pan.x, pan.y]

    const rotate = '0deg'

    /* unsere transform animation berechnen */
    const imageStyle = {
      transform: [{ translateX }, { translateY }, { rotate }, { scale }]
    }

    return (
      <SafeAreaView style={[Styles.Root]}>
        <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
          <View style={[Styles.Draggable]}>
            <Text style={[Styles.DraggableText]}>Zieh mich herum</Text>
          </View>
        </Animated.View>
        <Animated.Text
          style={[Styles.SizeMeUpText, { transform: [{ scale: textScale }] }]}
          onPress={() => this.sizeUp()}
          onLongPress={() => this.sizeUp(1)}>
          {'Drück mich!\nzum zurücksetzen lange drücken!'}
        </Animated.Text>
        <Animated.View
          style={[
            Styles.FlyMeOutContainer, {
              transform: [
                { translateX: translateOutAnimationX }, { translateY: translateOutAnimationY }
              ]
            }
          ]}>
          <Text onPress={this.flyMeOut}>Drück mich und seh mich fliegen</Text>
        </Animated.View>
      </SafeAreaView>
    )
  }

  sizeUp = valueArgument => {
    const newValue = valueArgument || this.textScaleValue * 1.1
    Animated.spring(textScale, {
      toValue: newValue,
      friction: 3,
      useNativeDriver: true
    }).start()
    this.textScaleValue = newValue
  }

  flyMeOut = () => {
    Animated.timing(translateOutBaseValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.quad
    }).start(() => translateOutBaseValue.setValue(0))
  }

  createPanResponder() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        /* Wenn der PanResponder aktiviert wird, wird unsere View größer animiert */
        Animated.spring(scale, {
          toValue: 1.3,
          friction: 3,
          useNativeDriver: true
        }).start()
      },

      /* Beim bewegen schreiben wir den Wert und animieren die View, damit sie sich entsprechend der Ziehbewegungen mitbewegt */
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),

      onPanResponderRelease: (e, { vx, vy }) => {
        /* Beim loslassen wieder klein machen und zurück zum Startpunkt bouncen */
        Animated.spring(scale, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true
        }).start()
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          friction: 3,
          useNativeDriver: true
        }).start()
      }
    })
  }
}

Basics.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.array,
  title: PropTypes.string,
  imageHeight: PropTypes.number,
  stickyHeaderIndices: PropTypes.array,
  imageURL: PropTypes.string
}
export default Basics
