import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Flexbox extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row' }}>
                    <View style={{alignItems: 'center', flexDirection: "row"}}>
                        <View style={{backgroundColor: 'red', height: 100, width: 100}} />
                        <View style={{backgroundColor: 'blue', height: 150, width: 150}} />
                    </View>
                    <View style={{backgroundColor: 'yellow', flex: 1, width: 50}} />
                    <View style={{backgroundColor: 'orange', flex: 1, width: 50}} />
                </View>
                <View style={{justifyContent: "space-between",  flexDirection: 'row'}}>
                    <Text>coba1</Text>
                    <Text>coba2</Text>
                    <Text>coba3</Text>
                    <Text>coba4</Text>
                </View>
            </View>  
        )
    }
}
