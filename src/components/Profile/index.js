import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import a from './../../img/a.jpg'

export default class Profile extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', margin: 20}}>
                <Image
                source = {a}
                style={{width: 100, height: 100, borderRadius: 50, }}
                />
                <View style = {{flexDirection: "column", justifyContent: "center", marginLeft: 20}}>
                    <Text style= {{fontWeight: "bold", fontSize: 20}}>Rizki Aulia Ramadhan</Text>
                    <Text style = {{fontWeight: '200'}}>15,5 rb subscriber</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
