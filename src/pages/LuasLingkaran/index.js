import React, { Component } from 'react'
import {StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default class LuasSegitiga extends Component {
    constructor(props){
      super(props)
      this.state = {
        jari_jari:0,
        luas:0
      };
    }
  
    render() {
      const { navigation } = this.props
      return (  
        <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
  
          <View style={{backgroundColor:'#2196f3'}}>
             <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
              Menghitung Luas Lingkaran
            </Text>
           </View>
          
          <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
              <TextInput style = {{height: 40}}
                placeholder="Masukkan Jari-Jari"
                onChangeText={(jari_jari)=>this.setState({jari_jari})}
                keyboardType = 'numeric'
              />
              <View style={{margin:15}}>
              <Button
                onPress={()=>this.setState({
                  luas: (3.14*this.state.jari_jari*this.state.jari_jari)
                })}
                title="Hitung"
                accessibilityLabel="Klik untuk menghitung"
              />
              </View>
              <View style={{margin:15}}>
              <Button title="Back to Home" onPress={ () => navigation.replace('Home')}/>
              </View>
         </View>
  
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
           <Text style = {{padding: 10, fontSize: 20}} >
               Jari-Jari =  {this.state.jari_jari} {"\n"}
               Luas Lingkaran = {this.state.luas}
           </Text>
        </View>       
     </View>   
      );
    }
}

const styles = StyleSheet.create({})