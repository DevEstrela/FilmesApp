import React, {useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
//importando componenete com dados da API
import api from './src/services/api'
//importando componente filmes
import Filmes from './src/Filmes';

export default function App() {
  //Declaracao das constantes para manipular
const [filmes, setFilmes] = useState([]);
const [loading, setLoading] = useState(true); //loading comeca em true ate que seja feita a aquisicao dos dados da API.

  useEffect( () => {  
      async function loadFilmes(){
          const response = await api.get('r-api/?api=filmes');
          setFilmes(response.data)
          setLoading(false)
      }

      loadFilmes();


  }, []);

  if(loading){
   return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>

      <ActivityIndicator color={'#121212'} size={45} />

    </View>
   ) 
  }else{
     return (
   <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={item  => String(item.id) } /* convertendo o dado em Sthing */
        renderItem={ ( {item})  => <Filmes data={item}/>}  /* Passando os item da API para o componenete FILMES pelas props */
      />
   </View>
  );
 }
}


const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})