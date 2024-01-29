import { StyleSheet } from "react-native"
import { MyColor } from "./drawer/screen/Home"

export const globalStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  calendarWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  card: {
    backgroundColor: 'red',
    // padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 180,
    borderRadius: 15
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // clickevent:{
  //   backgroundColor: 'blue'
  // }
})