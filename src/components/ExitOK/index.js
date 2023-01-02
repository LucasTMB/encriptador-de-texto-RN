import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function ExitOK({outputText}) {
 return (
   <View style={styles.conteudoResultadoOK}>
      <TextInput 
        multiline={true}
        numberOfLines={8}
        style={styles.saidaTextArea}
        value={outputText}
      />
      <TouchableOpacity style={styles.copyBtn}>
          <Text style={styles.textCopyBtn}>
            Copiar texto
          </Text>
      </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    conteudoResultadoOK: {
      alignItems: 'center',
      backgroundColor: '#fefefe',
      justifyContent: 'center',
      height: '58%',
      borderRadius: 20
    },
    saidaTextArea: {
      color: '#0A3871',
      fontSize: 20,
      marginBottom: 5
    },
    copyBtn: {
      alignItems: 'center',
      backgroundColor: '#fefefe',
      borderWidth: 1,
      borderColor: '#0A3871',
      padding: 15,
      width: 200,
      borderRadius: 24,
    },
    textCopyBtn: {
      color: '#0A3871',
      fontWeight: 'bold',
    }
})