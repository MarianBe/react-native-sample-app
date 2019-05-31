import React, { Component } from 'react'
import { YellowBox, View } from 'react-native'
import Navigation from './navigation'
import ApiAxios from './plugins/axios'
import FlashMessage from 'react-native-flash-message'
import { Variables } from 'themes'
// Language, wichtig für default language
import I18n from './locales/I18n' // eslint-disable-line

// Global Axios
global.apiAxios = ApiAxios.apiAxios
global.allAccessEnabled = false
YellowBox.ignoreWarnings(['Require cycles', 'Required dispatch_sync', 'Module'])
console.disableYellowBox = true
const ColorTheme = {
  success: Variables.brandSuccess,
  info: Variables.brandInfo,
  warning: Variables.brandWarning,
  danger: Variables.brandError
}
class AppRoot extends Component {
  componentDidMount() {
    FlashMessage.setColorTheme(ColorTheme)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigation // navigation container
        />
        <FlashMessage position="top" />
      </View>
    )
  }
}
export default AppRoot
