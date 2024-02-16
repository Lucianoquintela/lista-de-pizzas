import {SafeAreaView,Text,StyleSheet} from 'react-native'
import PizzaItem from './components/PizzaItem'

export default function App() {
  return(
    <SafeAreaView>
      <Text style={styles.titulo}>Meu Primeiro App</Text>
      <Text style={styles.subTitulo}>Lista de Pizzas</Text>
      <PizzaItem/>
      <PizzaItem/>
      <PizzaItem/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    color: '#ff0000',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subTitulo: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
  },
})