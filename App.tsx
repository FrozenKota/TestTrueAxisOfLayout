import React, {useState} from 'react';
import { StyleSheet, StatusBar, Dimensions, View } from 'react-native';

const { height, width } = Dimensions.get('window');
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const HEIGHT = height - (STATUSBAR_HEIGHT? STATUSBAR_HEIGHT : 0);

const App = () => {
  return(
    
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, width: width/2}}>
        <View style={{flex:1, backgroundColor:'#FF0000'}}></View>
        <View style={{flex:1, backgroundColor:'#00FF00'}}></View>
        <View style={{flex:1, backgroundColor:'#0000FF'}}></View>
        <View style={{flex:1, backgroundColor:'#FFFFFF'}}></View>
      </View>

      <View style={{flex: 1, width: width/2}}>
        <View style={{height: HEIGHT/4, backgroundColor:'#AA0000'}}></View>
        <View style={{height: HEIGHT/4, backgroundColor:'#00AA00'}}></View>
        <View style={{height: HEIGHT/4, backgroundColor:'#0000AA'}}></View>
        <View style={{height: HEIGHT/4, backgroundColor:'#AAAAAA'}}></View>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({

});