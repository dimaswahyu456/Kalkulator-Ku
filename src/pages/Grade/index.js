import React, { Component } from 'react'
import {StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default class Grade extends Component {
    constructor(props){
      super(props)
      this.state = {
        n1:0,
        n2:0,
        n3:0,
        na:0,
        grade:''
      };
    }

    tampilGrade=()=>{
      if(this.state.na >= 90){
        this.setState({grade:'A'})
      }
      else if (this.state.na >= 70){
        this.setState({grade:'B'})
      }
      else if (this.state.na >= 60){
        this.setState({grade:'C'})
      }
      else if (this.state.na >= 50){
       this.setState({grade:'D'})
      }
      else {
        this.setState({grade:'E'})
      }
    }
  
    render() {
      const { navigation } = this.props
      var int1 = parseFloat(this.state.n1);
      var int2 = parseFloat(this.state.n2);
      var int3 = parseFloat(this.state.n3);
      return (  
        <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
  
          <View style={{backgroundColor:'#2196f3'}}>
             <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
              Menghitung Grade Nilai
            </Text>
           </View>
          
          <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
              <TextInput style = {{height: 40}}
                placeholder="Masukkan Nilai ke-1"
                onChangeText={(n1)=>this.setState({n1})}
                keyboardType = 'numeric'
              />
              <TextInput style = {{height: 40}}
                placeholder="Masukkan Nilai ke-2"
                onChangeText={(n2)=>this.setState({n2})}
                keyboardType = 'numeric'
              />
              <TextInput style = {{height: 40}}
                placeholder="Masukkan Nilai ke-3"
                onChangeText={(n3)=>this.setState({n3})}
                keyboardType = 'numeric'
              />
              <View style={{margin:10}}>
              <Button
                onPress={()=>this.setState({
                  na: (int1+int2+int3)/3
                })}
                title="Hitung Nilai Akhir"
                accessibilityLabel="Klik untuk menghitung"               
              />
              </View>
              <View style={{margin:10}}>
              <Button
              onPress={this.tampilGrade}
              title="Tampil Grade"
              accessibilityLabel="Klik untuk menghitung"               
              />
              </View>
              <View style={{margin:10}}>
              <Button title="Back to Home" onPress={ () => navigation.replace('Home')}/>
              </View>
         </View>
  
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
           <Text style = {{padding: 10, fontSize: 20}} >
               Nilai ke-1   =  {this.state.n1} {"\n"}
               Nilai ke-2   =  {this.state.n2} {"\n"}
               Nilai ke-3   =  {this.state.n3} {"\n"}
               Nilai Akhir  =  {this.state.na} {"\n"}
               Grade = {this.state.grade}
           </Text>
        </View>       
     </View>   
      );
    }
}

const styles = StyleSheet.create({})