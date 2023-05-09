import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.logo}>Instagram</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./img.jpg')}
          style={styles.image}
        />
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: '265px',
    marginTop:'20px',
    width: '200px',
    height: '350px',
    border: 'solid',
    borderRadius: '10px',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    left: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 198,
    height: 170,
  },
  logo: {
    fontSize: 13,
    fontStyle: 'italic',
  },
});
