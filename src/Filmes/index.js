import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../Detalhes/index';

export default function Filmes({ data }) {
    const [visibleModal, setVisibleModal] = useState(false)
 return (
   <View style={styles.container}> 

        <View style={styles.card}>
            <Text style={styles.title}>{data.nome}</Text>

            <Image
                source={{uri: data.foto}}
                style={styles.capa}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.botao} onPress={() => setVisibleModal(true)}>
                    <Text style={styles.btnText}>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>
        </View>

        <Modal transparent={true} animationType="slide" visible={visibleModal}>
            <Detalhes filmes={ data } voltar={ () => setVisibleModal( false )} />
        </Modal>

   </View>
  );
}
const styles = StyleSheet.create({
    card:{
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 5,
    },
    capa:{
        height: 250,
        xIndex: 2,
    },
    title:{
        padding: 15,
        fontSize: 18
    },
    areaBtn:{
        alignItems: 'flex-end',
        marginTop: -35
    },
    botao:{
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

    },
    btnText:{
        color: '#FFF',
        textAlign: 'center'
    }
})