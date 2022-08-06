import React, {useState} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

const { height, width } = Dimensions.get('window');

const App = () => {
  return(
    
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, width: width/2}}>
        <View style={{height: height/4, backgroundColor:'#FF0000'}}></View>
        <View style={{height: height/4, backgroundColor:'#00FF00'}}></View>
        <View style={{height: height/4, backgroundColor:'#0000FF'}}></View>
        <View style={{height: height/4, backgroundColor:'#FFFFFF'}}></View>
      </View>

      <View style={{flex: 1, width: width/2}}>
        <View style={{height: height/4, backgroundColor:'#AA0000'}}></View>
        <View style={{height: height/4, backgroundColor:'#00AA00'}}></View>
        <View style={{height: height/4, backgroundColor:'#0000AA'}}></View>
        <View style={{height: height/4, backgroundColor:'#AAAAAA'}}></View>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({

});