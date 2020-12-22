import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    paddingTop: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: 'center'
  },
  pageTitle: {
    fontSize: 26,
    color: '#212121',
    fontWeight: '700',
    width: 200,
    marginHorizontal: 20
  },
  sectionTitle: {
    fontSize: 22,
    color: '#222',
    fontWeight: '500',
    marginTop: 20,
    marginHorizontal: 20
  },
  hr:{
    width: '90%',
    backgroundColor: '#ccc',
    height: 1,
    marginHorizontal: 20
  },
  sectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between'
  },
  keyInformation: {
    fontSize: 18,
    color: '#666'
  },
  valueInformation: {
    fontSize: 18,
    color: '#000'
  }

})


export default styles;
