import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {withNavigationFocus} from 'react-navigation'


import QRCodeScanner from 'react-native-qrcode-scanner';

class ScannerScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    
  onSuccess(e) {
      this.props.navigation.navigate('Info', {imageName:e.data});
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
