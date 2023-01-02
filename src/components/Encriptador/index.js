import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import ExitNone from '../ExitNone';
import ExitOK from '../ExitOK';

const stages = [
    {id: 1, name: 'resultadoVazio'},
    {id: 2, name: 'resultadoOK'},
]

export default function Encriptador() {

    const [exitStage, setExitStage] = useState(stages[0].name);
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const botaoCriptografar = () => {
        const textoEncriptado = criptografar(inputText);
        setOutputText(textoEncriptado);
        setExitStage(stages[1].name);
    }

    const botaoDescriptografar = () => {
        const textoDescriptado = descriptografar(inputText);
        setOutputText(textoDescriptado);
        setExitStage(stages[1].name);
    }

    const criptografar = (inputText) => {
        const matrizCodigo = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat'], ['aimes', 'ai']];

        let stringEncriptada = inputText;
        stringEncriptada = stringEncriptada.toLowerCase();

        for (let i = 0 ; i < matrizCodigo.length ;  i++) {
            if (stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(
                    matrizCodigo[i][0], matrizCodigo[i][1]
                );
            }
        }
        return stringEncriptada;
    }

    const descriptografar = (inputText) => {
        const matrizCodigo = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];

        let stringDescriptada = inputText;
        stringDescriptada = stringDescriptada.toLowerCase();

        for (let i = 0 ; i < matrizCodigo.length ; i++) {
            if (stringDescriptada.includes(matrizCodigo[i][1])) {
                stringDescriptada = stringDescriptada.replaceAll(
                    matrizCodigo[i][1], matrizCodigo[i][0]
                );
            }
        }
        return stringDescriptada;
    }

 return (
   <>
        <View style={styles.entrada}>
            <TextInput 
                multiline={true}
                numberOfLines={10}
                style={styles.entradaTextArea}
                placeholder="Digite seu texto..."
                placeholderTextColor="#0A3871"
                onChangeText={setInputText}
            />
            <Text style={styles.description}>
                ⓘ Apenas letras minúsculas e sem acento.
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.criptoBtn}
                    onPress={botaoCriptografar}
                >
                    <Text 
                        style={styles.textCriptoBtn}
                    >
                        Criptografar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.descriptoBtn}
                    onPress={botaoDescriptografar}
                >
                    <Text
                        style={styles.textDescriptoBtn}
                    >
                        Descriptografar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.saida}>
            {exitStage === 'resultadoVazio' && <ExitNone />}
            {exitStage === 'resultadoOK' && <ExitOK 
                outputText={outputText}
            />}
        </View>
   </>
  );
}

const styles = StyleSheet.create({
    entrada: {
        margin: 10,
    },
    entradaTextArea: {
        color: "#0A3871",
        fontSize: 20,
        marginBottom: 15,
    },
    description: {
        textAlign: 'center',
        margin: 10,
    },
    buttons: {
        alignItems: 'center'
    },
    criptoBtn: {
        alignItems: 'center',
        backgroundColor: '#0A3871',
        padding: 15,
        width: 200,
        borderRadius: 24,
        margin: 5,
    },
    textCriptoBtn: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    descriptoBtn: {
        alignItems: 'center',
        backgroundColor: '#fefefe',
        padding: 15,
        width: 200,
        borderRadius: 24,
        margin: 5,
    },
    textDescriptoBtn: {
        color: '#0A3871',
        fontWeight: 'bold'
    },
    saida: {
        margin: 10,
    }
})