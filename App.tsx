import React, {useState} from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

const { height, width } = Dimensions.get('window');

const App = () => {
  return(
    <View style={{flex:1, flexDirection:'row', height: height}}>
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1, backgroundColor:'#FF0000'}}></View>
        <View style={{flex:1, backgroundColor:'#00FF00'}}></View>
        <View style={{flex:1, backgroundColor:'#0000FF'}}></View>
      </View>
      
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{flex:1, backgroundColor:'#AA0000'}}></View>
        <View style={{flex:1, backgroundColor:'#00AA00'}}></View>
        <View style={{flex:1, backgroundColor:'#0000AA'}}></View>
      </View>
     </View>
  )
}

export default App;

const styles = StyleSheet.create({

});