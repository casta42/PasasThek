import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';


import Parti from './part.mp4';
import Video from 'react-native-video';
import Logo from './Components/Logo';
import Form from './Components/Form';




export default class rnvideo extends Component {
  render(){
  return (
    <View style={styles.container}>
        
         <Video repeat source={Parti} resizeMode="cover" style={StyleSheet.absoluteFill} />
         <Logo/>
         <Form/>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});




