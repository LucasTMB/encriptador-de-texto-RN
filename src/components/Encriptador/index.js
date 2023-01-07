import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AluraLogo from '../../assets/alura-logo.png';
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
    const [copyText, setCopyText] = useState('');

    const reload = () => {
        setOutputText('');
        setCopyText('');
        setExitStage(stages[0].name);
    }

    const botaoCriptografar = () => {
        const textoEncriptado = criptografar(inputText);
        setOutputText(textoEncriptado);
        setCopyText(textoEncriptado);
        setExitStage(stages[1].name);
    }

    const botaoDescriptografar = () => {
        const textoDescriptado = descriptografar(inputText);
        setOutputText(textoDescriptado);
        setCopyText(textoDescriptado);
        setExitStage(stages[1].name);
    }

    const criptografar = (inputText) => {
        let matrizCodigo = {
            a: "ai", 
            e: "enter", 
            i: "imes", 
            o: "ober", 
            u: "ufat"
        }

        let stringEncriptada = inputText.toLowerCase();
        stringEncriptada = stringEncriptada.replace(/a|e|i|o|u/g, (ocorrencia) => {
            return matrizCodigo[ocorrencia];
        });

        return stringEncriptada;
    }

    const descriptografar = (inputText) => {
        const matrizCodigo = {
            ai: "a",
            enter: "e",
            imes: "i",
            ober: "o",
            ufat: "u"
        }

        let stringDescriptada = inputText.toLowerCase();
        stringDescriptada = stringDescriptada.replace(/ai|enter|imes|ober|ufat/g, (ocorrencia) => {
            return matrizCodigo[ocorrencia];
        });
        
        return stringDescriptada;
    }

 return (
   <>
        <View style={styles.header}>
            <TouchableOpacity
                onPress={reload}
            >
                <Image 
                    source={AluraLogo}
                    style={styles.logoAlura}
                />
            </TouchableOpacity>
        </View>

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
                copyText={copyText}
            />}
        </View>
   </>
  );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
    },
    logoAlura: {
        marginLeft: 15,
    },
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