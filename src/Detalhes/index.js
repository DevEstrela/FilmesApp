import React from 'react';
import { View , Text, StyleSheet, TouchableOpacity, BackHandler} from 'react-native';

export default function Detalhes(props) {    /* recebendo dados pela props */
 return (
   <View style={styles.container}>   

    <View style={styles.card}>

      <View style={styles.bordaVoltar}>

        <TouchableOpacity style={styles.btn} onPress={ props.voltar }> 
          <Text style={styles.textBtn}>Voltar</Text>
        </TouchableOpacity>
      </View>

          {/* exibindo os dados da API */}
        <Text style={styles.title} >{props.filmes.nome}</Text>
        <Text style={styles.sinopse} > Sinopse:  </Text>
        <Text style={styles.descricao} > {props.filmes.sinopse} </Text>
        

    </View>
   </View>
  );
}
const styles = StyleSheet.create({
  container:{
     flex: 1,
     alignItems: 'center',
     justifyContent: 'flex-end'
     
  },
  card:{
    backgroundColor: '#121212',
    height: '70%',
    width: '80%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  bordaVoltar:{
    backgroundColor: '#e52246',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10
    
  },
  btn:{
    width: '20%'
  },
  textBtn:{
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold'
  },
  title:{
    color: '#FFF',
    fontSize: 30,
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  sinopse:{
    color: '#FFF',
    fontSize: 17,
    marginLeft: 15,
    marginTop: 10
  },
  descricao:{
    color: '#FFF',
    marginTop: 10,
    marginLeft: 15,
    fontSize: 12
  }

 
})