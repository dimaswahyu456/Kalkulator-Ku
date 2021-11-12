import React, { Component } from 'react'
import {StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default class PajakPenghasilan extends Component {
    constructor(props){
      super(props)
      this.state = {
        penghasilan:0,
        hasil:0
      };
    }

    tampilHasil=()=>{
      if(this.state.penghasilan <= 25000000){
        this.setState({hasil: (this.state.penghasilan*10)/100})
      }
      else if (this.state.penghasilan <= 50000000){
        this.setState({hasil: (this.state.penghasilan*15)/100})
      }
      else if (this.state.penghasilan <= 100000000){
        this.setState({hasil: (this.state.penghasilan*20)/100})
      }
      else {
        this.setState({hasil: (this.state.penghasilan*25)/100})
      }
    }
  
    render() {
      const { navigation } = this.props
      return (  
        <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
  
          <View style={{backgroundColor:'#2196f3'}}>
             <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
              Menghitung Pajak Penghasilan
            </Text>
           </View>
          
          <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
              <TextInput style = {{height: 40}}
                placeholder="Masukkan Penghasilan Anda"
                onChangeText={(penghasilan)=>this.setState({penghasilan})}
                keyboardType = 'numeric'
              />
              <View style={{margin:10}}>
              <Button
              onPress={this.tampilHasil}
              title="Hitung Pajak"
              accessibilityLabel="Klik untuk menghitung"               
              />
              </View>
              <View style={{margin:10}}>
              <Button title="Back to Home" onPress={ () => navigation.replace('Home')}/>
              </View>
         </View>
  
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
           <Text style = {{padding: 10, fontSize: 20}} >
               Penghasilan   =  Rp {this.state.penghasilan} {"\n"}
               Total Pajak   = {this.state.hasil}
           </Text>
        </View>       
     </View>   
      );
    }
}

const styles = StyleSheet.create({})