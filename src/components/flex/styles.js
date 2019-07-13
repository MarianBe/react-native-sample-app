import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  Root: {
    backgroundColor: 'white',
    flex: 1
  },
  ConfigContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'rgba(200,200,200,0.7)',
    right: 0,
    left: 0,
    top: 40
  },
  ConfigItem: {
    alignItems: 'center',
    width: '100%',
    padding: 5,
    marginBottom: 5,
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
  },
  Text: {
    flex: 1,
    textAlign: 'center'
  },
  ConfigEnabler: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center'
  },
  ConfigEnablerText: {
    fontWeight: 'bold',
    flex: 1
  },
  ResetButton: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(50,50,50,0.5)',
    width: '50%',
    alignSelf: 'center'
  }
})
