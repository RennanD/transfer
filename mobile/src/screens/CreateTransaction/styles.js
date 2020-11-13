import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200,
    alignItems: "center",
    justifyContent: 'center',

  },
  pageTitle: {
    color: '#C2185B',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10
  },
  pageDescription: {
    color: '#212121',
    fontSize: 24,
    maxWidth: 350,
    marginHorizontal: 20,
  },
  form: {
    flex: 1,
    marginTop: 10,
    height: '100%',
    padding: 20,

  },
  input: {
    height: 46,
    width: '100%',
    borderColor: '#C2185B',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 15
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#C2185B',
    alignItems:"center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 7
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'700'
  },
})

export default styles;
