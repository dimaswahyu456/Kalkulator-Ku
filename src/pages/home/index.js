import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Home extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#bbdefb' }}>
                <View style={{ margin: 15}}>
                <Button title="Luas Persegi" onPress={ () => navigation.replace('Persegi')}/>
                </View>

                <View style={{ margin: 15}}>
                <Button title="Luas Segitiga" onPress={ () => navigation.replace('Segitiga')}/>
                </View>
                
                <View style={{ margin: 15}}>
                <Button title="Luas Lingkaran" onPress={ () => navigation.replace('Lingkaran')}/>
                </View>

                <View style={{ margin: 15}}>
                <Button title="Grade" onPress={ () => navigation.replace('Grade')}/>
                </View>

                <View style={{ margin: 15}}>
                <Button title="Pajak" onPress={ () => navigation.replace('Pajak')}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({})