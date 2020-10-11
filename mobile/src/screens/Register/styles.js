import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  heroImage: {},
  input: {
    height: 46,
    width: '100%',
    borderColor: '#2193f6',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 10
  },
  button: {
    height: 46,
    width: '100%',
    backgroundColor: '#2193f6',
    alignItems:"center",
    justifyContent: "center",
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'700'
  },

  linkButton: {
    height: 46,
    width: '100%',
    alignItems:"center",
    justifyContent: "center",
    marginTop: 10
  },
  linkButtonText: {
    color: '#2193f6',
    fontSize: 16,
  }
})

export default styles;
