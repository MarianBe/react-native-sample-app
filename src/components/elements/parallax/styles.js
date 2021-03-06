import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Root: {
    backgroundColor: 'white',
    flex: 1
  },
  DataItem: {
    backgroundColor: 'white',
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10
  },
  DataItemSticky: {
    backgroundColor: 'grey'
  },
  DataItemText: {
    textAlign: 'center'
  },
  Spacer: {
    marginBottom: 50
  },
  Image: {},
  Title: {
    alignSelf: 'center',
    color: 'black',
    position: 'absolute',
    zIndex: 100,
    fontWeight: 'bold',
    bottom: 20
  },
  Header: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    overflow: 'visible'
  }
})
