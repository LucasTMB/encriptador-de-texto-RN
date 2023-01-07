import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Encriptador from './src/components/Encriptador';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='#0A3871' translucent={true} />

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
});