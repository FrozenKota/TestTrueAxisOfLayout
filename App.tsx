import React, {useState} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

const { height, width } = Dimensions.get('window');

const App = () => {
  return(
    <View style={styles.mainContainer1}>
      <View style={{flex:1, backgroundColor:'#FF0000'}}></View>
      <View style={{flex:2, backgroundColor:'#00FF00'}}></View>
      <View style={{flex:3, backgroundColor:'#0000FF'}}></View>
      
      {true && (<AbsoluteComponent /> )}
    </View>
  )
}

const AbsoluteComponent = () => {
  return (
    <View style={styles.mainContainer2}>
      <View style={{height:height*(1/6), backgroundColor:'#AA0000'}}></View>
      <View style={{height:height*(2/6), backgroundColor:'#00AA00'}}></View>
      <View style={{height:height*(3/6), backgroundColor:'#0000AA'}}></View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  mainContainer1: {
    flex: 1,
    flexDirection: 'column',
    width: width,
    backgroundColor: 'darkblue'
  },
  mainContainer2: {
    position: 'absolute',
    top: 0,
    left:0,
    width: width/2,
    height: height,
    backgroundColor: 'blue'
  }
});