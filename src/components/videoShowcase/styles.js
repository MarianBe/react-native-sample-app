import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  Root: {
    backgroundColor: 'white',
    flex: 1
  },
  Video: {
    width: '100%',
    height: '100%'
  },
  VideoContainer: {
    height: (Dimensions.get('window').width / 16) * 9,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  FullscreenVideoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  FullscreenIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 20,
    color: 'white',
    fontSize: 25
  },
  Loader: {
    position: 'absolute',
    zIndex: 21
  },
  DescriptionContainer: {
    padding: 20
  },
  Description: {
    fontSize: 20
  }
})
