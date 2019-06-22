/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types'
import React from 'react'
import { Alert, Text, View } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Styles from './styles'

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
            zoom: 10,
            pitch: 0,
            heading: 0,
            altitude: 100
          }}
          showsUserLocation
          followsUserLocation
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          onUserLocationChange={event =>
            this.onUserLocationChange(event.nativeEvent.coordinate)
          }>
          {marker.map((marker, index) => (
            <Marker
              key={index}
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
