import PropTypes from 'prop-types'
import React from 'react'
import {
  ActivityIndicator,
  LayoutAnimation,
  SafeAreaView,
  Text,
  UIManager,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import FastImage from 'react-native-fast-image'
import Axios from 'axios'
import { showMessage } from 'react-native-flash-message'

import Styles from './styles'
let dataArray = []
for (let i = 0; i < 100; i++) {
  dataArray.push(i)
}
class apiShowcase extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeElement: null,
      events: null
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
          <FlatList
            data={this.state.events}
            extraData={this.state.activeElement}
            renderItem={this.renderItem}
          />
        ) : (
          <View style={[Styles.LoadingContainer]}>
            <ActivityIndicator />
            <Text style={[Styles.LoadingText]}>Daten werden geladen</Text>
          </View>
        )}
      </SafeAreaView>
    )
  }
  fetchCoins() {
    console.time('api')
    Axios.get('https://api.coingecko.com/api/v3/status_updates')
      .then(response => {
        this.setState({ events: response.data.status_updates })
        console.timeEnd('api')
        console.log(response)
        showMessage({
          message: 'Daten erfolgreich geholt',
          type: 'success',
          icon: 'auto'
        })
      })
      .catch(error => {
        console.log(error)
        showMessage({
          message: 'Fehler beim Laden',
          type: 'danger',
          icon: 'auto'
        })
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
