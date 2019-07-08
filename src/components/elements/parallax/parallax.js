import PropTypes from 'prop-types'
import React from 'react'
import { Animated, SafeAreaView, Text, View } from 'react-native'
import Styles from './styles'
let AnimatedScrollViewValue = new Animated.Value(0)
class Animation extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.imageScale = AnimatedScrollViewValue.interpolate({
      inputRange: [0, this.props.imageHeight * 0.8],
      outputRange: [1, 1.3]
    })
    this.titleTranslation = AnimatedScrollViewValue.interpolate({
      inputRange: [0, this.props.imageHeight * 0.8],
      outputRange: [0, -this.props.imageHeight * 0.4],
      extrapolate: 'clamp'
    })
    this.titleScale = AnimatedScrollViewValue.interpolate({
      inputRange: [0, this.props.imageHeight * 0.8],
      outputRange: [1, 0]
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
                    { translateY: this.titleTranslation }, { scale: this.titleScale }
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
                  transform: [{ scale: this.imageScale }],
                  opacity: this.fadeOut
                }
              ]}
            />
          </Animated.View>
          {this.props.data.map((item, index) => {
            return (
              <View
                key={item}
                style={[
                  Styles.DataItem, this.props.stickyHeaderIndices.includes(index + 1) &&
                    Styles.DataItemSticky
                ]}>
                <Text style={[Styles.DataItemText]}>{item}</Text>
              </View>
            )
          })}
        </Animated.ScrollView>
      </SafeAreaView>
    )
  }
}

Animation.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.array,
  title: PropTypes.string,
  imageHeight: PropTypes.number,
  stickyHeaderIndices: PropTypes.array,
  imageURL: PropTypes.string
}
export default Animation
