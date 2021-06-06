import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import a from './../../img/a.jpg'

const Notif = (props) => {
    return (
            <View style={{margin: 20, height: 100, width: 100 }}> 
                <Image
                source = {a}
                style={{width: 100, height: 100, borderRadius: 50, position: "relative" }}
                />
                <View style = {{borderWidth: 1, borderColor: 'black', height: 30, width: 30, borderRadius: 15, padding: 3,position: "absolute", right: 0, backgroundColor: '#9fe6a0'}}>
                    <Text style = {{textAlign: "center"}}>{props.notif}</Text>
                </View>
            </View>
    )
}

export default Notif;