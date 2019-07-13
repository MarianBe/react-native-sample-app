import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Root: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Draggable: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SizeMeUpText: {
    margin: 20,
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'yellow'
  },
  FlyMeOutContainer: {
    margin: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'green'
  }
})
