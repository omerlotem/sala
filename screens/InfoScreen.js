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
                    <Image source={require('../assets/images/bunker.png')}
                    style={styles.infoImage}/>
                break;
            case 'בית הכנסת הישן':
                image = 
                    <Image source={require('../assets/images/old_synagogue.png')}
                    style={styles.infoImage}/>
                break;
            case 'בית הכנסת':
                image = 
                    <Image source={require('../assets/images/synagogue.png')}
                    style={styles.infoImage}/>
                break;
            case 'בריכה':
                image = 
                    <Image source={require('../assets/images/pool.png')}
                    style={styles.infoImage}/>
                break;
            case 'גנצו':
                image = 
                    <Image source={require('../assets/images/gantso.png')}
                    style={styles.infoImage}/>
                break;
            case 'הדבמים':
                image = 
                    <Image source={require('../assets/images/hadbamim.png')}
                    style={styles.infoImage}/>
                break;
            case 'חדרי האוכל':
                image = 
                    <Image source={require('../assets/images/dining_rooms.png')}
                    style={styles.infoImage}/>
                break;
            case 'חניה לבנה':
                image = 
                    <Image source={require('../assets/images/white_parking.png')}
                    style={styles.infoImage}/>
                break;
            case 'ימח':
                image = 
                    <Image source={require('../assets/images/yamah.png')}
                    style={styles.infoImage}/>
                break;
            case 'מגורים':
                image = 
                    <Image source={require('../assets/images/dorms.png')}
                    style={styles.infoImage}/>
                break;
            case 'מטבח מרכזי':
                image = 
                    <Image source={require('../assets/images/central_kitchen.png')}
                    style={styles.infoImage}/>
                break;
            case 'מספרה':
                image = 
                    <Image source={require('../assets/images/hair_saloon.png')}
                    style={styles.infoImage}/>
                break;
            case 'מפקדה':
                image = 
                    <Image source={require('../assets/images/mifkada.png')}
                    style={styles.infoImage}/>
                break;
            case 'מרלוג':
                image = 
                    <Image source={require('../assets/images/marlog.png')}
                    style={styles.infoImage}/>
                break;
            case 'מרפאה':
                image = 
                    <Image source={require('../assets/images/clinic.png')}
                    style={styles.infoImage}/>
                break;
            case 'נקרות':
                image = 
                    <Image source={require('../assets/images/nekarot.png')}
                    style={styles.infoImage}/>
                break;
            case 'נשקיה':
                image = 
                    <Image source={require('../assets/images/armory.png')}
                    style={styles.infoImage}/>
                break;
            case 'פטל':
                image = 
                    <Image source={require('../assets/images/petel.png')}
                    style={styles.infoImage}/>
                break;
            case 'צפונית':
                image = 
                    <Image source={require('../assets/images/northern.png')}
                    style={styles.infoImage}/>
                break;
            case 'צפרדעים':
                image = 
                    <Image source={require('../assets/images/frogs.png')}
                    style={styles.infoImage}/>
                break;
            case 'קולנוע':
                image = 
                    <Image source={require('../assets/images/cinema.png')}
                    style={styles.infoImage}/>
                break;
            case 'רבין':
                image = 
                    <Image source={require('../assets/images/rabin.png')}
                    style={styles.infoImage}/>
                break;
            case 'רחבה חומה':
                image = 
                    <Image source={require('../assets/images/brown_area.png')}
                    style={styles.infoImage}/>
                break;
            case 'רקורטן':
                image = 
                    <Image source={require('../assets/images/rekortan.png')}
                    style={styles.infoImage}/>
                break;
            case 'ש\"ג':
                image = 
                    <Image source={require('../assets/images/gate.png')}
                    style={styles.infoImage}/>
                break;
            case 'שלישות צוערים':
                image = 
                    <Image source={require('../assets/images/shalishut.png')}
                    style={styles.infoImage}/>
                break;
            case 'שמנש':
                image = 
                    <Image source={require('../assets/images/shamnash.png')}
                    style={styles.infoImage}/>
                break;
            case 'תפוז':
                image = 
                    <Image source={require('../assets/images/tapuz.png')}
                    style={styles.infoImage}/>
                break;
            case '\"ממני תראו וכן תעשו\"':
                image = 
                    <Image source={require('../assets/images/bahad_quote.png')}
                    style={styles.infoImage}/>
                break;
            default:
                image = 
                    <Image source={require('../assets/images/error.png')}
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
