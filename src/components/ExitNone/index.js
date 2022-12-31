import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ExitNone() {
 return (
   <View style={styles.conteudoResultadoVazio}>
        <Text style={styles.textH2}>
          Nenhuma mensagem encontrada
        </Text>
        <Text style={styles.textP}>
          Digite um texto que você deseja criptografar ou descriptografar.
        </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    conteudoResultadoVazio: {
      alignItems: 'center',
      backgroundColor: '#fefefe',
      justifyContent: 'center',
      height: '58%',
      borderRadius: 20
    },
    textH2: {
      fontSize: 24,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 10
    },
    textP: {
      textAlign: 'center',
      fontSize: 15
    }
})