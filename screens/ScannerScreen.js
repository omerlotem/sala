import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';
import {withNavigationFocus} from 'react-navigation'


import QRCodeScanner from 'react-native-qrcode-scanner';

const DEFAULT_IMAGE_PATH = 'c:\\Programming\\sala\\assets\\images\\QR_icon.png';
const BAHAD_IMAGE_PATH = 'c:\\Programming\\sala\\assets\\images\\Bahad_1_Symbol.png';

class ScannerScreen extends Component {

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
    //   if(e.data !== BAHAD_IMAGE_PATH)
    //     return;
      this.props.navigation.navigate('Info', {imageName:e.data});
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  render() {
    const {isFocused} = this.props
    if(!isFocused){
      return(<View></View>)
    }
    return (
    <QRCodeScanner
        reactivate={true}
        reactivateTimeout={5000}
        onRead={this.onSuccess.bind(this)}
        topContent={
        <Text style={styles.centerText}>
            כאן ניתן לסרוק את קודי הQR.
            חפשו אותם ברחבי הבסיס באמצעות המפה שקיבלתם.

        </Text>
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
  }
});

export default withNavigationFocus(ScannerScreen);
