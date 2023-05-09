import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text>Feed</Text>
        
        <StatusBar style="auto"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    width: '100%',
    backgroundColor: '#C1C4CA'
  },
  container: {
    marginLeft: '265px',
    marginTop:'20px',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '350px',
    border: 'solid',
    borderRadius: '10px'
  },
});
