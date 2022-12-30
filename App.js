import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AluraLogo from './src/assets/alura-logo.png';
import Encriptador from './src/components/Encriptador';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='#0A3871' translucent={true} />

      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
            source={AluraLogo}
            style={styles.logoAlura}
          />
        </TouchableOpacity>
      </View>

      <Encriptador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ced3e6',
    width: '100%',
  },
  header: {
    paddingTop: 50,
  },
  logoAlura: {
    marginLeft: 15,
  },
});
