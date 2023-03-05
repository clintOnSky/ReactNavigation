import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { SettingsDetail } from './src/screens';

export default function App() {
  return (
    // <SafeAreaView style={styles.root}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </SafeAreaView>
    <SettingsDetail/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
