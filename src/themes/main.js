import Variables from './variables'

export default {
  FullScreen: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  Flex: {
    flex: 1
  },
  Flex2: {
    flex: 2
  },
  Flex3: {
    flex: 3
  },
  Flex4: {
    flex: 4
  },
  FlexRow: {
    flexDirection: 'row'
  },
  Center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  JustifyCenter: {
    justifyContent: 'center'
  },
  Root: {
    flex: 1,
    backgroundColor: Variables.brandBackground
  },
  BackgroundImage: {
    position: 'absolute',
    zIndex: -1
  },
  BackgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  TextAlignRight: {
    textAlign: 'right'
  },
  TextAlignLeft: {
    textAlign: 'left'
  },
  TextAlignCenter: {
    textAlign: 'center'
  },
  WhiteText: {
    color: 'white'
  },
  // Modal
  Modal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  PickerModal: {
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    padding: 0,
    margin: 0
  },
  Overlay: {
    backgroundColor: 'rgba(21,21,21,0.8)'
  },
  // List
  ListItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  ListItemTitle: {
    fontSize: 14,
    letterSpacing: 1.5,
    flex: 1
  },
  ListItemIcon: {
    paddingHorizontal: 10,
    color: Variables.brandSecondary,
    fontSize: 18
  },
  // Settings
  TitleContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    height: 45
  },
  NameContainer: {
    height: 75
  },
  Name: {
    letterSpacing: 2,
    fontSize: 16
  },
  MemberDate: {
    fontSize: 10,
    letterSpacing: 1.5,
    marginTop: 5
  }
}
