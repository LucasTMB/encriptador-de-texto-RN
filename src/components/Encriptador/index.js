import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function Encriptador() {
 return (
   <View style={styles.entrada}>
        <TextInput 
            multiline={true}
            numberOfLines={5}
            style={styles.entradaTextArea}
            placeholder="Digite seu texto..."
            placeholderTextColor="#0A3871"
        />
   </View>
  );
}

const styles = StyleSheet.create({
    entrada: {
        margin: 10,
    },
    entradaTextArea: {
        color: "#0A3871",
        fontSize: 20
    }
})