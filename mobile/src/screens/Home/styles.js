import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 40,
    padding: 20,
    alignItems: "center",
    height: 120,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#eee'
  },
  userInfo: {
    flex: 1,
    marginHorizontal: 20
  },
  userName: {
    fontSize: 22,
    color: '#212121',
    fontWeight: '700'
  },
  userBalance: {
    fontSize: 18,
    color: '#9E9E9E'
  }
})


export default styles;
