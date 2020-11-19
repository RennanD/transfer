import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

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
  },
  transactionCard: {
    flexDirection: 'row',
    marginBottom: 20
  }, 
  transactionLeft: {
    width: 30,
    height: 90,
    marginRight: 15,

  },
  transactionHR: {
    height: '90%',
    width: 1,
    backgroundColor: '#ddd',
    marginLeft: 5
  },
  transactionInfoContainer: {
    position: 'relative',
    paddingVertical: 3,
    width: '85%'
  }, 
  transactionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    color: '#333'
  },
  transactionUserName: {
    fontSize: 22,
    color: '#666',
    fontWeight: '300',
    marginBottom: 4
  }, 
  transactionValue: {
    fontSize: 18,
    color: '#333',
    fontWeight: '400',
    marginBottom: 4
  }, 
  transactionDate: {
    position: 'absolute',
    right: 2,
    top: 15,
    color: '#999',
    fontWeight: '500',
    fontSize: 13
  }
})


export default styles;
