import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: 115,
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 372,
    height: 500,
  },
  logo: {
    resizeMode: "contain",
    width: 110,
    height: 50  
  },
});
