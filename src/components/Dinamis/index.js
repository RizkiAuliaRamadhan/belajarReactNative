import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import a from './../../img/a.jpg';

const Story = (props) => {
    return (
            <View style = {{margin: 10, width: 100, height: 100}}>
                <Image source = {a}
                    style = {{height: 100, width: 100, borderRadius: 50}}
                />
                <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>{props.judul}</Text>
            </View>
    )
}

const Dinamis = () => {
    return (
        <View>
            <ScrollView horizontal style = {{padding: 20, height: 200}} >
                <Story judul = "stori 1" />
                <Story judul = "stori 2" />
                <Story judul = "stori 3" />
                <Story judul = "stori 3" />
                <Story judul = "stori 3" />
            </ScrollView>
        </View>
        )
}

const styles = StyleSheet.create({})

export default Dinamis;