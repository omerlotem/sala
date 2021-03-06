import React from 'react';
import {
  Image, StyleSheet
} from 'react-native';

export default class TabBarIcon extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Image source={this.props.image} style = {styles.icon}/>
    );
  }
}

const styles = StyleSheet.create({
  icon:{
    height:30,
    width:30
  }
})