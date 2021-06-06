import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import a from './../../img/a.jpg';

const Produk = (props) => {
    return (
        <View style = {styles.wrapper}>
            <Image source = {a} style = {styles.gambar} />
            <Text style = {styles.title}>Notebook Asus</Text>
            <Text style = {styles.price}>Rp. 2.000.000</Text>
            <Text style = {styles.place}>Jawa Tengah</Text>
            <TouchableOpacity onPress = {props.onButtonPressPlus}>
                <View style = {styles.tambah}>
                    <Text>Tambah</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {props.onButtonPressMin}>
                <View style = {styles.kurang}>
                    <Text>Kurang</Text>
                </View>
            </TouchableOpacity>
            {/* <Button title = 'tambah' /> */}
        </View>
    )
}

export default Produk

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: '#deedf0',
        width: 220,
        margin: 20
    },
    gambar: {
        width: 200,
        height: 130
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    price : {
        color: '#fb9300',
    },
    tambah: {
        padding: 10,
        backgroundColor: '#9fe6a0',
        alignItems: 'center',
        borderRadius: 5
    },
    kurang: {
        padding: 10,
        backgroundColor: '#f55c47',
        alignItems: 'center',
        borderRadius: 5
    },

})
