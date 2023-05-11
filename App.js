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
         <Image
          source={require('./assets/message.png')}
          style={styles.message}
        />
      </View>
      <View  style={styles.stories}>
        <View style={styles.newStorie}>
          <Image
            source={require('./assets/newStorie.png')}
            style={styles.newStorie}
          />
          <p style={styles.newStorieTxt}>Seu story</p>
        </View>
        <View style={styles.story1}>
          <Image
            source={require('./assets/story1.png')}
            style={styles.story1}
          />
          <p style={styles.story1Txt}>carloshenrique2</p>
        </View>
        <View style={styles.story2}>
          <Image
            source={require('./assets/story2.png')}
            style={styles.story2}
          />
          <p style={styles.story2Txt}>emanuel.pedro</p>
        </View>
        <View style={styles.story3}>
          <Image
            source={require('./assets/story3.png')}
            style={styles.story3}
          />
          <p style={styles.story3Txt}>sam.henrik</p>
        </View>
        <View style={styles.story4}>
          <Image
            source={require('./assets/story4.png')}
            style={styles.story4}
          />
          <p style={styles.story4Txt}>marll</p>
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
        <Image
          source={require('./assets/home.png')}
          style={styles.homeFooter}
        />
         <Image
          source={require('./assets/search.png')}
          style={styles.searchFooter}
        />
         <Image
          source={require('./assets/plus.png')}
          style={styles.plusFooter}
        />
        <Image
          source={require('./assets/heart.png')}
          style={styles.heartFooter}
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
    resizeMode: "contain",
    top: -5,
    right: 45,
    width: 100,
    height: 65,
  },
  newStorieTxt: {
    color: 'white',
    position:'absolute',
    top: 51, 
    left: -17, 
    fontSize: 12,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  story1: {
    position: 'absolute',
    resizeMode: "contain",
    top: -5,
    right: 3,
    width: 100,
    height: 65,
  },
  story1Txt: {
    color: 'white',
    position:'absolute',
    top: 51, 
    left: 7, 
    fontSize: 12,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  story2: {
    position: 'absolute',
    resizeMode: "contain",
    top: -5,
    left: -11,
    width: 100,
    height: 65,
  },
  story2Txt: {
    color: 'white',
    position:'absolute',
    top: 51, 
    left: 2, 
    fontSize: 12,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  story3: {
    position: 'absolute',
    resizeMode: "contain",
    top: -5,
    left: 30,
    width: 100,
    height: 65,
  },
  story3Txt: {
    color: 'white',
    position:'absolute',
    top: 51, 
    left: 51, 
    fontSize: 12,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  story4: {
    position: 'absolute',
    resizeMode: "contain",
    top: -5,
    left: 62,
    width: 100,
    height: 65,
  },
  story4Txt: {
    color: 'white',
    position:'absolute',
    top: 51, 
    left: 100, 
    fontSize: 12,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif"
  },
  hrContainer: {
    right: 380,
    top: 102,
    position: 'absolute',
  },
  hr: {
    color: '#1F1F1F',
    position: 'absolute',    
  },
  icon1Container:{
    position: 'absolute',
    top: 145,
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
    top: 129,
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
    top: 2,
    left: 9,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    top:20,
    width: 375,
    height: 430,
  },
  logo: {
    resizeMode: "contain",
    width: 110,
    height: 50  
  },
  message: {
    position: 'absolute',
    resizeMode: "contain",
    width: 110,
    height: 25 ,
    left: 276,
    top: 9
  },
  footer :{
    width: 375,
    top: 310,
    bottom: 0,
  },
  profileFooter: {
    position: 'absolute',
    resizeMode: "contain",
    width: 50,
    height: 30,
    left: 310,
    bottom: -13
  },
  homeFooter: {
    position: 'absolute',
    resizeMode: "contain",
    width: 50,
    height: 30,
    left: 13,
    bottom: -13
  },
  searchFooter: {
    position: 'absolute',
    resizeMode: "contain",
    width: 50,
    height: 25,
    left: 87,
    bottom: -11
  },
  plusFooter: {
    position: 'absolute',
    width: 50,
    height: 25,
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
    left: 160,
    bottom: -11
  },
  heartFooter: {
    position: 'absolute',
    resizeMode: "contain",
    width: 50,
    height: 25,
    left: 236,
    bottom: -11
  }
});