import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Pajak extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#bbdefb' }}>
                <View style={{ margin: 15}}>
                <Button title="Pajak Penghasilan" onPress={ () => navigation.replace('PajakPenghasilan')}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({})