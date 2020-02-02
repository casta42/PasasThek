import React,{Component} from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';

export default class Logo extends Component{
render(){
return(
<View style={styles.container}>
<TextInput
            placeholder="Correo Institucional"
            
            placeholderTextColor ='black'
            style={styles.input}
            
          />
<TextInput  placeholder="Contraseña"
            secureTextEntry
            placeholderTextColor ='black'
            style={styles.input}
            
          />

<TouchableOpacity style = {styles.Button} >
       
<Text style= {styles.Login}>Listo</Text>

</TouchableOpacity>



</View>

)}} 
const styles = StyleSheet.create({
    container: {
          flex:1,
          justifyContent:'center',
        alignItems:'center'
      
            
            },
    input:  {
            width: 300,
            height: 50,
            backgroundColor: "#FFF",
            marginVertical: 10,
            paddingLeft: 15,
            fontSize:20,
            borderColor: 'black', 
            borderWidth: 1,
            borderRadius: 20
           
           },
    Login: {
            fontSize: 17,
            fontWeight:'500',
            color: 'black',
            marginHorizontal: 108  ,
            alignItems:'center',
            marginVertical: 12,
            },

    Button:{
            borderRadius: 20,
            width: 280,
            height: 50,
            marginVertical: 50,
            borderColor: 'black', 
            borderWidth: 4,

    }


}); 
