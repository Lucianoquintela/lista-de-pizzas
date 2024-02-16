import {View,Text,StyleSheet} from 'react-native'

export default function PizzaItem(){
  return(
  <View style={styles.container}>
    <Text style={styles.nome}>Pizza Quatro Queijos</Text>
    <Text style={styles.preco}>R$50,00</Text>
  </View>
  )
}

const styles = StyleSheet.create({

  container: {
    margin: 10,
    padding:10,
    backgroundColor: '#ccc',
  },

  nome: {
    fontWeight: 'bold',
  },

  preco: {
    color:'blue',
  }

})