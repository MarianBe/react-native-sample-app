import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Root: {
    backgroundColor: 'white',
    flex: 1
  },
  ConfigContainer: {
    borderBottomWidth: 1
  },
  ConfigItem: {
    alignItems: 'center',
    width: '100%',
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  TextInput: {
    flex: 1,
    height: 30,
    borderWidth: StyleSheet.hairlineWidth,
    paddingLeft: 5
  },
  ScrollToIcon: {
    fontSize: 25,
    marginHorizontal: 10
  },
  Item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
