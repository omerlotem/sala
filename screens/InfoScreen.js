import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';

const DEFAULT_IMAGE = 'c:\\Programming\\sala\\assets\\images\\QR_icon.png'; 
export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };
    
  render() {
      const {navigation} = this.props;
      const imageName = navigation.getParam('imageName', 'default')
      let image = null;
      alert(imageName);
        switch(imageName){
            case 'c:\\Programming\\sala\\assets\\images\\Bahad_1_Symbol.png':
                image = 
                    <Image source={{uri:'c:\\Programming\\sala\\assets\\images\\Bahad_1_Symbol.png'}}
                    style={styles.infoImage}/>
                
            case 'שג':
                image = 
                    <Image source={{uri:'c:\\Programming\\sala\\assets\\images\\שג.jpg'}}
                    style={styles.infoImage}/>
                
            default:
                image = 
                    <Image source={{uri:DEFAULT_IMAGE}}
                    style={styles.infoImage}/>
                
        }
        return image;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  infoImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
