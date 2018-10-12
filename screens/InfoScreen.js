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
