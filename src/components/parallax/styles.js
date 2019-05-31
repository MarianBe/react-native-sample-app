import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Root: {
    backgroundColor: 'white',
    flex: 1
  },
  DataItem: {
    backgroundColor: 'white'
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
