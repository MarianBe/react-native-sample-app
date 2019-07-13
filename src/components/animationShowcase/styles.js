import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Root: {
    backgroundColor: 'white',
    flex: 1
  },
  TabContainer: {
    width: '100%',
    flexDirection: 'row'
  },
  Tab: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightgray'
  },
  ActiveTab: {
    backgroundColor: 'white',
    borderColor: 'red'
  }
})
