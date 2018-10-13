import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const DEFAULT_IMAGE = '../assets/images/QR_icon.png'; 
export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };
    
  render() {
      const {navigation} = this.props;
      const imageName = navigation.getParam('imageName', 'default')
      let image = null;
        switch(imageName){
            case '../assets/images/Bahad_1_Symbol.png':
                image = 
                    <Image source={require('../assets/images/Bahad_1_Symbol.png')}
                    style={styles.infoImage}/>
                break;
                
            case 'Gate':
                image = 
                    <Image source={require('../assets/images/Gate.jpg')}
                    style={styles.infoImage}/>
                break;
                
            case 'בונקר':
                image = 
                    <Image source={require('../assets/images/בונקר.png')}
                    style={styles.infoImage}/>
                break;
            case 'בית הכנסת הישן':
                image = 
                    <Image source={require('../assets/images/בית הכנסת הישן.png')}
                    style={styles.infoImage}/>
                break;
            case 'בית הכנסת':
                image = 
                    <Image source={require('../assets/images/בית הכנסת.png')}
                    style={styles.infoImage}/>
                break;
            case 'בריכה':
                image = 
                    <Image source={require('../assets/images/בריכה.png')}
                    style={styles.infoImage}/>
                break;
            case 'גנצו':
                image = 
                    <Image source={require('../assets/images/גנצו.png')}
                    style={styles.infoImage}/>
                break;
            case 'הדבמים':
                image = 
                    <Image source={require('../assets/images/הדבמים.png')}
                    style={styles.infoImage}/>
                break;
            case 'חדרי האוכל':
                image = 
                    <Image source={require('../assets/images/חדרי האוכל.png')}
                    style={styles.infoImage}/>
                break;
            case 'חניה לבנה':
                image = 
                    <Image source={require('../assets/images/חניה לבנה.png')}
                    style={styles.infoImage}/>
                break;
            case 'ימח':
                image = 
                    <Image source={require('../assets/images/ימח.png')}
                    style={styles.infoImage}/>
                break;
            case 'מגורים':
                image = 
                    <Image source={require('../assets/images/מגורים.png')}
                    style={styles.infoImage}/>
                break;
            case 'מטבח מרכזי':
                image = 
                    <Image source={require('../assets/images/מטבח מרכזי.png')}
                    style={styles.infoImage}/>
                break;
            case 'מספרה':
                image = 
                    <Image source={require('../assets/images/מספרה.png')}
                    style={styles.infoImage}/>
                break;
            case 'מפקדה':
                image = 
                    <Image source={require('../assets/images/מפקדה.png')}
                    style={styles.infoImage}/>
                break;
            case 'מרלוג':
                image = 
                    <Image source={require('../assets/images/מרלוג.png')}
                    style={styles.infoImage}/>
                break;
            case 'מרפאה':
                image = 
                    <Image source={require('../assets/images/מרפאה.png')}
                    style={styles.infoImage}/>
                break;
            case 'נקרות':
                image = 
                    <Image source={require('../assets/images/נקרות.png')}
                    style={styles.infoImage}/>
                break;
            case 'נשקיה':
                image = 
                    <Image source={require('../assets/images/נשקיה.png')}
                    style={styles.infoImage}/>
                break;
            case 'פטל':
                image = 
                    <Image source={require('../assets/images/פטל.png')}
                    style={styles.infoImage}/>
                break;
            case 'צפונית':
                image = 
                    <Image source={require('../assets/images/צפונית.png')}
                    style={styles.infoImage}/>
                break;
            case 'צפרדעים':
                image = 
                    <Image source={require('../assets/images/צפרדעים.png')}
                    style={styles.infoImage}/>
                break;
            case 'קולנוע':
                image = 
                    <Image source={require('../assets/images/קולנוע.png')}
                    style={styles.infoImage}/>
                break;
            case 'רבין':
                image = 
                    <Image source={require('../assets/images/רבין.png')}
                    style={styles.infoImage}/>
                break;
            case 'רחבה חומה':
                image = 
                    <Image source={require('../assets/images/רחבה חומה.png')}
                    style={styles.infoImage}/>
                break;
            case 'רקורטן':
                image = 
                    <Image source={require('../assets/images/רקורטן.png')}
                    style={styles.infoImage}/>
                break;
            case 'שג':
                image = 
                    <Image source={require('../assets/images/שג.png')}
                    style={styles.infoImage}/>
                break;
            case 'שלישות':
                image = 
                    <Image source={require('../assets/images/שלישות.png')}
                    style={styles.infoImage}/>
                break;
            case 'שמנש':
                image = 
                    <Image source={require('../assets/images/שמנש.png')}
                    style={styles.infoImage}/>
                break;
            case 'תפוז':
                image = 
                    <Image source={require('../assets/images/תפוז.png')}
                    style={styles.infoImage}/>
                break;
            default:
                image = 
                    <Image source={require(DEFAULT_IMAGE)}
                    style={styles.infoImage}/>
                
        }
        return( 
          <View>
            {image}
          </View>
        )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  infoImage: {
    width: '100%',
    height: '100%',
  }
});
