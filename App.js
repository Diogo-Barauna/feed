import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View  style={styles.stories}>
        <View style={styles.newStorie}>
          <Image
            source={require('./assets/newStorie.png')}
            style={styles.logo}
          />
          <p style={styles.newStorieTxt}>Seu story</p>
        </View>
        <View style={styles.story1}>
          <Image
            source={require('./assets/story1.png')}
            style={styles.logo}
          />
          <p style={styles.story1Txt}>carloshenriqueovn</p>
        </View>
      </View>
      <View style={styles.hrContainer}>
        <p style={styles.hr}>________________________________________________</p>
      </View>
      <View style={styles.icon1Container}>
        <Image
          source={require('./assets/icon1.png')}
          style={styles.icon1}
        />
      </View>
      <View style={styles.icon1Desc}>
        <p style={styles.p1}>• Camila •</p>
        <p style={styles.p2}>mahinazul</p>
        <Image
          source={require('./assets/pontos.png')}
          style={styles.dots}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/img.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <Image
          source={require('./assets/perfil.png')}
          style={styles.profileFooter}
        />
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 667,
    border: 'solid',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stories: {
    top: 60,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  newStorie: {
    position: 'absolute',
    top: -15,
    right: 90,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], 
  },
  newStorieTxt: {
    color: 'white',
    position:'absolute',
    top: 40, 
    left: 36, 
    fontSize: 10,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  story1: {
    position: 'absolute',
    top: -15,
    right: 2,
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], 
  },
  story1Txt: {
    color: 'white',
    position:'absolute',
    top: 37, 
    left: 19, 
    fontSize: 10,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  hrContainer: {
    right: 380,
    top: 85,
    position: 'absolute',
  },
  hr: {
    color: '#1F1F1F',
    position: 'absolute',    
  },
  icon1Container:{
    position: 'absolute',
    top: 125,
    right: 375 
  },
  icon1: {
    position: 'absolute',
    resizeMode: "contain",
    width: 50,
    height: 30,
  },
  icon1Desc: {
    color: '#F4F4F4',
    position: 'absolute',
    top: 110,
    right: 265,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  p1: {
    position:'absolute',
    top: 18,
    fontSize: 13
  },
  p2: {
    fontSize: 15
  },
  dots: {
    position:'absolute',
    resizeMode: "contain",
    left: 285,
    top: 23,
    width: 50,
    height: 16,
  },
  imageContainer: {
    position: 'absolute',
    top: 165,
  },
  logoContainer: {
    position: 'absolute',
    top: 1,
    left: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 375,
    height: 450,
  },
  logo: {
    resizeMode: "contain",
    width: 110,
    height: 50  
  },
  footer :{
    width: 375,
    top: 310,
    bottom: 0,
  },
  profileFooter: {
    resizeMode: "contain",
    width: 50,
    height: 30,
    left: 310
  }
});