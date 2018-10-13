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
            <TouchableOpacity onPress={() => this.showInstructions()}>
              <Text style={styles.tabBarInfoText}>
                צריך עזרה?
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

  componentDidMount(){
    this.showInstructions();
  }

  showInstructions(){
    Alert.alert(
      'אפליקציית סל\"ה',
      'מטרת האפליקציה היא לעזור לכם להכיר את הבה\"ד.\n\
ברחבי הבסיס מפוזרים מספר קודי QR, ואם תסרקו אותם תקבלו מידע על המקום.\n\
המטרה היא להגיע לכל הנקודות.\n\
בהצלחה!',
      [{text: 'רות!'}]
    )
  };
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#0000EE',
    textAlign: 'center',
  },
});
