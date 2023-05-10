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
          source={require('./assets/img.jpg')}
          style={styles.image}
        />
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '375px',
    height: '667px',
    border: 'solid',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: 115,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 370,
    height: 500,
  },
  logo: {
    fontSize: 13,
    fontStyle: 'italic',
  },
});
