import PropTypes from 'prop-types'
import React from 'react'
import {
  LayoutAnimation,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  UIManager,
  View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/Ionicons'
import Styles from './styles'

class FlexShowcase extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flexDirectionRow: false,
      justifyContentCenter: false,
      alignItemsCenter: false,
      flex1: 0,
      flex2: 0,
      flex3: 0,
      animationEnabled: true,
      showConfig: false
    }
  }

  componentDidMount() {
    SplashScreen.hide()
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  componentWillUnmount() {}

  render() {
    const ConfigItem = props => (
      <View style={[Styles.ConfigItem]}>
        <Text style={Styles.Text}>{props.offText}</Text>
        <Switch
          value={this.state[props.value]}
          onValueChange={value => {
            this.animateChange()
            this.setState({ [props.value]: value })
          }}
        />
        <Text style={Styles.Text}>{props.onText}</Text>
      </View>
    )
    return (
      <SafeAreaView style={[Styles.Root]}>
        <TouchableOpacity
          style={[Styles.ConfigEnabler]}
          onPress={() => {
            this.animateChange()
            this.setState({ showConfig: !this.state.showConfig })
          }}>
          <Text style={[Styles.ConfigEnablerText]}>Einstellungen</Text>
          <Icon
            name={this.state.showConfig ? 'ios-arrow-up' : 'ios-arrow-down'}
          />
        </TouchableOpacity>
        {this.state.showConfig && (
          <View style={[Styles.ConfigContainer]}>
            <ConfigItem
              onText="FlexDirection: 'row'"
              offText="FlexDirection: 'column'"
              value={'flexDirectionRow'}
            />
            <ConfigItem
              onText="justifyContent: 'center'"
              offText="justifyContent: 'space-between'"
              value={'justifyContentCenter'}
            />
            <ConfigItem
              onText="alignItems: 'center'"
              offText="alignItems: 'flex-start'"
              value={'alignItemsCenter'}
            />
            <ConfigItem
              onText="Animationen an"
              offText="Animationen aus"
              value={'animationEnabled'}
            />
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                this.animateChange()
                this.setState({ flex1: 0, flex2: 0, flex3: 0 })
              }}
              style={[Styles.ConfigItem, Styles.ResetButton]}>
              <Text>Flex zurücksetzen</Text>
            </TouchableOpacity>
            <Text>{JSON.stringify(this.state, 0, 4)}</Text>
          </View>
        )}
        <View
          style={{
            flex: 1,
            flexDirection: this.state.flexDirectionRow ? 'row' : 'column',
            justifyContent: this.state.justifyContentCenter
              ? 'center'
              : 'space-between',
            alignItems: this.state.alignItemsCenter ? 'center' : 'flex-start'
          }}>
          {this.renderFlexItem('flex1', 'powderblue')}

          {this.renderFlexItem('flex2', 'skyblue')}

          {this.renderFlexItem('flex3', 'steelblue')}
        </View>
      </SafeAreaView>
    )
  }
  renderFlexItem(value, backgroundColor) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          width: 90,
          height: 90,
          backgroundColor,
          flex: this.state[value],

          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => this.increaseFlex(value)}>
        <Text>{`Flex: ${this.state[value]}\nDrück mich!`}</Text>
      </TouchableOpacity>
    )
  }
  increaseFlex(property) {
    this.animateChange()
    this.setState({ [property]: this.state[property] + 1 })
  }
  animateChange() {
    if (this.state.animationEnabled)
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }
}

FlexShowcase.propTypes = {
  navigation: PropTypes.object
}
export default FlexShowcase
