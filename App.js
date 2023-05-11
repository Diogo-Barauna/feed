import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}> 
        <Image
          // Imagem da logo instagram 
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
         <Image
          // Imagem do balão de chat (parte superior direita)
          source={require('./assets/message.png')}
          style={styles.message}
        />
      </View>
      <View  style={styles.stories}>
        <View style={styles.newStorie}>
          <Image
            // Imagem 'seu story'
            source={require('./assets/newStorie.png')}
            style={styles.newStorie}
          />
          <p style={styles.newStorieTxt}>Seu story</p>
        </View>
        <View style={styles.story1}>
          <Image
            // Imagem do primeiro story
            source={require('./assets/story1.png')}
            style={styles.story1}
          />
           {/* Texto do primeiro story */}
          <p style={styles.story1Txt}>carloshenriq...</p>
        </View>
        <View style={styles.story2}>
          <Image
            source={require('./assets/story2.png')}
            style={styles.story2}
          />
          <p style={styles.story2Txt}>emanuel.ped...</p>
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
       {/* Fazendo a simulação de um <hr> */}
      <View style={styles.hrContainer}>
        <p style={styles.hr}>________________________________________________</p>
      </View>
       {/* Inserindo a foto de perfil de quem postou a foto principal */}
      <View style={styles.icon1Container}>
        <Image
          source={require('./assets/icon1.png')}
          style={styles.icon1}
        />
      </View>
       {/* Inserindo o nome de usuário de quem postou a foto principal */}
      <View style={styles.icon1Desc}>
        <p style={styles.p1}>• Camila •</p>
        <p style={styles.p2}>mahinazul</p>
        <Image
          // Inserindo a imagem dos 3 pontos verticais
          source={require('./assets/pontos.png')}
          style={styles.dots}
        />
      </View>
       {/* Inserindo a foto postada exibida no feed */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/img.jpg')}
          style={styles.image}
        />
      </View>
       {/* Inserindo o footer e seus elementos */}
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
  // Estilização do conteiner principal
  container: {
    flex: 1,
    width: 375,
    height: 667,
    border: 'solid',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilização da seção de stories
  stories: {
    top: 60,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Imagem do story
  newStorie: {
    position: 'absolute',
    resizeMode: "contain",
    top: 1,
    right: 41,
    width: 100,
    height: 73,
  },
  // Texto do story
  newStorieTxt: {
    color: '#E5E5E5',
    position:'absolute',
    top: 68, 
    left: -17, 
    fontSize: 13,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif",
  },
  story1: {
    position: 'absolute',
    resizeMode: "contain",
    top: 1,
    right: -6,
    width: 100,
    height:77,
  },
  story1Txt: {
    color: '#E5E5E5',
    position:'absolute',
    top: 68, 
    left: 18, 
    fontSize: 13,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif",
  },
  story2: {
    position: 'absolute',
    resizeMode: "contain",
    top: 1,
    left: 0,
    width: 100,
    height: 77,
  },
  story2Txt: {
    color: '#E5E5E5',
    position:'absolute',
    top: 68, 
    left: 12, 
    fontSize: 13,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif",
    
  },
  story3: {
    position: 'absolute',
    resizeMode: "contain",
    top: 1,
    left: 44,
    width: 100,
    height: 77,
  },
  story3Txt: {
    color: '#E5E5E5',
    position:'absolute',
    top: 68, 
    left: 62, 
    fontSize: 13,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif",
   
  },
  story4: {
    position: 'absolute',
    resizeMode: "contain",
    top: 1,
    left: 76,
    width: 100,
    height: 77,
  },
  story4Txt: {
    color: '#E5E5E5',
    position:'absolute',
    top: 68, 
    left: 106, 
    fontSize: 13,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif",
   
  },
  // Estilização do 'hr' abaixo dos stories
  hrContainer: {
    right: 380,
    top: 132,
    position: 'absolute',
  },
  hr: {
    color: '#1F1F1F',
    position: 'absolute',    
  },
  // Estilização da foto de perfil da pessoa que postou a imagem
  icon1Container:{
    position: 'absolute',
    top: 175,
    right: 372 
  },
  icon1: {
    position: 'absolute',
    resizeMode: "contain",
    width: 50,
    height: 30,
  },
  // Nome de usuário da pessoa que postou
  icon1Desc: {
    color: '#F4F4F4',
    position: 'absolute',
    top: 159,
    right: 260,
    fontFamily: "PT Sans, Calibri, Tahoma, sans-serif",
    
  },
  p1: {
    position:'absolute',
    top: 18,
    fontSize: 13,
    color: '#E5E5E5',
  },
  p2: {
    fontWeight: 'bold',
    fontSize: 15
  },
  // Estilização dos 3 pontos verticais na direita 
  dots: {
    position:'absolute',
    resizeMode: "contain",
    left: 282,
    top: 23,
    width: 50,
    height: 16,
  },
  // Estilização da imagem postada
  imageContainer: {
    position: 'absolute',
    top: 165,
  },
  image: {
    top:50,
    width: 375,
    height: 400,
  },
  // Estilização do logo do instagram no lado superior esquerdo
   logoContainer: {
    position: 'absolute',
    top: 2,
    left: 9,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    resizeMode: "contain",
    width: 110,
    height: 50  
  },
  // Estilização do ícone de mensagem no lado superior direito
  message: {
    position: 'absolute',
    resizeMode: "contain",
    width: 110,
    height: 25 ,
    left: 276,
    top: 9
  },
  // Estilização do footer e seus icones
  footer :{
    width: 375,
    top: 310,
    bottom: 0,
  },
  // Foto de perfil do footer
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