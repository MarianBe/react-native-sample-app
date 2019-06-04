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
  ActivityIndicator
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Parallax from '../parallax/parallax'
import I18n from 'react-native-i18n'
import { NavigationEvents } from 'react-navigation'
import _ from 'lodash'
import SplashScreen from 'react-native-splash-screen'
import Styles from './styles'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
let dataArray = []
for (let i = 0; i < 100; i++) {
  dataArray.push(i)
}
class apiShowcase extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeElement: null
    }
  }

  componentDidMount() {
    this.fetchCoins()
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={[Styles.Root]}>
        {this.state.events ? (
          <FlatList data={this.state.events} renderItem={this.renderItem} />
        ) : (
          <View style={[Styles.LoadingContainer]}>
            <ActivityIndicator />
            <Text style={[Styles.LoadingText]}>Daten werden geladen</Text>
          </View>
        )}
      </SafeAreaView>
    )
  }
  async fetchCoins(page = 0) {
    fetch('https://api.coingecko.com/api/v3/status_updates')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.setState({ events: responseJson.status_updates })
      })
      .catch(error => {
        console.error(error)
      })
  }
  renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[Styles.Item]}
      onPress={() => this.toggleItem(index)}>
      <FastImage
        style={[Styles.ItemImage]}
        source={{ uri: item.project.image.large }}
      />
      <View style={[Styles.TextContainer]}>
        <Text style={[Styles.ItemText]}>{item.user_title}</Text>
        <Text
          numberOfLines={this.state.activeElement === index ? null : 1}
          style={[Styles.ItemDescription]}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
  toggleItem(index) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if (this.state.activeElement === index)
      this.setState({ activeElement: null })
    else this.setState({ activeElement: index })
  }
}

apiShowcase.propTypes = {
  navigation: PropTypes.object
}
export default apiShowcase
