import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
    
  render() {
      const {navigation} = this.props;
      const imageName = navigation.getParam('imageName', 'default')
      let image = null;
        switch(imageName){
            case 'בונקר':
                image = 
                    <Image source={require('../assets/images/בונקר.png')}
                    style={styles.infoImage}/>
                break;
            case 'בית הכנסת הישן':
                image = 
                    <Image source={require('../assets/images/בית_הכנסת_הישן.png')}
                    style={styles.infoImage}/>
                break;
            case 'בית הכנסת':
                image = 
                    <Image source={require('../assets/images/בית_הכנסת.png')}
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
                    <Image source={require('../assets/images/חדרי_האוכל.png')}
                    style={styles.infoImage}/>
                break;
            case 'חניה לבנה':
                image = 
                    <Image source={require('../assets/images/חניה_לבנה.png')}
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
                    <Image source={require('../assets/images/מטבח_מרכזי.png')}
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
                    <Image source={require('../assets/images/רחבה_חומה.png')}
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
                    <Image source={require('../assets/images/שגיאה.png')}
                    style={styles.infoImage}/>
                
        }
        return( 
          <View style={styles.container}>
            {image}
          </View>
        )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: '#000080',
  },
  infoImage: {
    flex: 1,
    aspectRatio: 0.7,
    resizeMode: 'cover',
  }
});
