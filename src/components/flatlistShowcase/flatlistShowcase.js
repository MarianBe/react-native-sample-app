import PropTypes from 'prop-types'
import React from 'react'
import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from './styles'
let dataArray = []
for (let i = 0; i < 100; i++) {
  dataArray.push(i)
}
class FlatlistShowcase extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      scrollToValue: null,
      scrollToIndex: null,
      inverted: false,
      horizontal: false,
      refreshing: false
    }
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={[Styles.Root]}>
        <View style={[Styles.ConfigContainer]}>
          <View style={[Styles.ConfigItem]}>
            <TextInput
              value={this.state.scrollToValue}
              placeholder="Scrolle zu Koordinate"
              onChangeText={value => this.setState({ scrollToValue: value })}
              style={[Styles.TextInput]}
            />
            <Icon
              style={[Styles.ScrollToIcon]}
              name="ios-arrow-dropright"
              onPress={() =>
                this.flatlist.scrollToOffset({
                  offset: parseInt(this.state.scrollToValue),
                  animated: true
                })
              }
            />
          </View>
          <View style={[Styles.ConfigItem]}>
            <TextInput
              value={this.state.scrollToIndex}
              placeholder="Scrolle zu Index"
              onChangeText={value => this.setState({ scrollToIndex: value })}
              style={[Styles.TextInput]}
            />
            <Icon
              style={[Styles.ScrollToIcon]}
              name="ios-arrow-dropright"
              onPress={() => this.scrollToIndex()}
            />
          </View>
          <View style={[Styles.ConfigItem]}>
            <Text>Invertiert?</Text>
            <Switch
              value={this.state.inverted}
              onValueChange={value => this.setState({ inverted: value })}
            />
            <Text>Horizontal?</Text>
            <Switch
              value={this.state.horizontal}
              onValueChange={value => this.setState({ horizontal: value })}
            />
          </View>
        </View>
        <FlatList
          data={dataArray}
          ref={flatlist => {
            this.flatlist = flatlist
          }}
          inverted={this.state.inverted}
          horizontal={this.state.horizontal}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          renderItem={({ item }) => (
            <View style={[Styles.Item]}>
              <Text>{item}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    )
  }

  scrollToIndex() {
    const index = parseInt(this.state.scrollToIndex)
    if (index > dataArray.length - 1) {
      Alert.alert(`Wert zu groß, maximal ${dataArray.length - 1} erlaubt`)
      return
    }
    this.flatlist.scrollToIndex({
      index: parseInt(this.state.scrollToIndex),
      animated: true
    })
  }
  _onRefresh = () => {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 1000)
  }
}

FlatlistShowcase.propTypes = {
  navigation: PropTypes.object
}
export default FlatlistShowcase
