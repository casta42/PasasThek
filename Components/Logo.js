import React,{Component} from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';

export default class Logo extends Component{
render(){
return(
<View style={styles.Image}>
<Image style= {{ width:170,height:200}}
source= {require('../images/Logo.png')}/>
</View>

)}} 
const styles = StyleSheet.create({
    Image: {
      alignItems: 'center',
      marginVertical: 100,
      
      
    },
  });