import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  heroImage: {
    alignSelf: "center",
  },
  input: {
    height: 46,
    width: '100%',
    borderColor: '#C2185B',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 30
  },
  button: {
    height: 46,
    width: '100%',
    backgroundColor: '#C2185B',
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
    color: '#C2185B',
    fontSize: 16,
  }
})

export default styles;
