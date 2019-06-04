import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  Root: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  ItemImage: {
    height: 50,
    width: 50
  },
  Item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10
  },
  ItemText: {},
  TextContainer: {
    paddingHorizontal: 10,
    flex: 1
  },
  LoadingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  LoadingText: {
    textAlign: 'center',
    margin: 10
  }
})
