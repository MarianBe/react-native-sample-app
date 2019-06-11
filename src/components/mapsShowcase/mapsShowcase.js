/* eslint-disable react/jsx-key */
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
  UIManager,
  LayoutAnimation,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Alert
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Parallax from '../parallax/parallax'
import I18n from 'react-native-i18n'
import { NavigationEvents } from 'react-navigation'
import _ from 'lodash'
import SplashScreen from 'react-native-splash-screen'
import Styles from './styles'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'

const marker = [
  {
    index: 0,
    title: 'Hochschule Aalen',
    description: 'https://hs-aalen.de',
    coordinate: { latitude: 48.837801, longitude: 10.073617 },
    pinColor: 'blue',
    onCalloutPress: () => Alert.alert('Hochschule Aalen pressed')
  }, {
    index: 1,
    title: 'Innovationszentrum Aalen',
    description: 'https://innovationszentrum-aalen.de/',
    coordinate: { latitude: 48.841438, longitude: 10.066715 },
    pinColor: 'yellow',
    onCalloutPress: () => Alert.alert('Innovationszentrum Aalen pressed')
  }, {
    index: 2,
    title: 'Cafeteria Burren',
    description: 'Cafeteria Burren',
    coordinate: { latitude: 48.840933, longitude: 10.067914 },
    pinColor: 'green',
    onCalloutPress: () => Alert.alert('Innovationszentrum Aalen pressed')
  }
]
class MapsShowcase extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.marker = []
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={[Styles.Root]}>
        <MapView
          ref={ref => {
            this.map = ref
          }}
          initialCamera={{
            center: {
              latitude: 48.83777,
              longitude: 10.09
            },
            zoom: 10
          }}
          showsUserLocation
          followsUserLocation
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          onUserLocationChange={event =>
            this.onUserLocationChange(event.nativeEvent.coordinate)
          }>
          {marker.map(marker => (
            <Marker
              coordinate={marker.coordinate}
              pinColor={marker.pinColor}
              draggable
              onDragEnd={event =>
                Alert.alert(
                  `Neue Position: ${JSON.stringify(
                    event.nativeEvent.coordinate
                  )}`
                )
              }>
              <Callout onPress={marker.onCalloutPress}>
                <Text>{marker.title}</Text>
                <Text>{marker.description}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    )
  }
  onUserLocationChange = location => {
    console.log('location', location)
    this.map.animateCamera({
      center: {
        latitude: location.latitude,
        longitude: location.longitude
      }
    })
  }
}

MapsShowcase.propTypes = {
  navigation: PropTypes.object
}
export default MapsShowcase
