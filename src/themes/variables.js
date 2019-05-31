import { Platform, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
export default {
  platform,
  deviceHeight,
  deviceWidth,

  // Color
  brandPrimary: '#AC9D74',
  brandTouch: 'rgb(220, 220, 200)',
  brandLightBackground: '#F2F2F2',
  brandSecondary: 'rgb(104, 160, 151)',
  brandBackground: 'white',
  brandListItem: '#212121',
  brandGray: 'rgb(204, 204, 204)',
  brandGrayLight: 'rgb(242, 242, 242)',
  brandWarning: '#EDD88E',
  brandError: '#D47477',
  brandSuccess: '#9AEDDF',
  brandInfo: '#74B0D4'
}
