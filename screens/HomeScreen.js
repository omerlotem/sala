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
        <ScrollView horizontal={true} style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
          </View>

          <Image source={require('../assets/images/bahad_map.png')}
          style={{flex:1, aspectRatio: 1.2, resizeMode:'contain'}}/>
        </ScrollView>
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
ברחבי הבסיס מפוזרים ברקודים, ואם תסרקו אותם תקבלו מידע על אותם המקומות.\n\
המטרה היא להגיע לכל הנקודות בבסיס.\n\
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
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 500,
    height: 400,
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
