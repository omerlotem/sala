import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>
              זאת סל"ה
            </Text>
          </View>

          <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/Bahad_1_Symbol.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <Text style={styles.getStartedText}>
              והסמל הזה הוא מפה כעיקרון
            </Text>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>נראה לי סיימנו</Text>
          
          <View style={styles.welcomeContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Links')}>
              <Image 
                source={require('../assets/images/QR_icon.png')} 
                style={styles.welcomeImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount(){
    Alert.alert(
      'ברוכים הבאים לאפליקציית סל\"ה',
      'מטרת האפליקציה היא לעזור לכם להכיר את הבה\"ד.\n\
ברחבי הבסיס מפוזרים מספר קודי QR, ואם תסרקו אותם תקבלו מידע על המקום.\n\
המטרה היא להגיע לכל הנקודות.\n\
בהצלחה!',
      [{text: 'רות!'}]
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
