// import React from 'react';
// import { ScrollView, StyleSheet, Text } from 'react-native';

// export default class ScannerScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Scanner',
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <Text> blahblahblah </Text>
//       </ScrollView>
//     );
//   }
// }

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

const DEFAULT_IMAGE_PATH = 'c:\\Programming\\sala\\assets\\images\\QR_icon.png';
const BAHAD_IMAGE_PATH = 'c:\\Programming\\sala\\assets\\images\\Bahad_1_Symbol.png';

export default class ScannerScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            imagePath:DEFAULT_IMAGE_PATH
        }
    }
    static navigationOptions = {
        title: 'Scanner',
      };
    
  onSuccess(e) {
      alert(e.data);
    //   if(e.data !== BAHAD_IMAGE_PATH)
    //     return;
      this.setState({
          imagePath:e.data
      })
      this.props.navigation.navigate('Info', {imageName:e.data});
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
    <QRCodeScanner
        reactivate={true}
        reactivateTimeout={1}
        onRead={this.onSuccess.bind(this)}
        topContent={
        <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
        </Text>
        }
        bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
        }
    />
    )}
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
});
