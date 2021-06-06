import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const hewanPeliharaan = {
    nama: 'miasw',
    umur: 2,
    jenis: 'L'
}

const cekHewan = (objectHewan) => {
    return objectHewan.nama === 'miaw' ? 'Ini hewan ku' : 'ini bukan hewan aku';
}

const namaHewan = ['miaw', 'guguk', 'wekwek']

const Basic = () => {
    return (
        <View>
            <Text>Belajar Basic</Text>
            <Text> {cekHewan(hewanPeliharaan)} </Text>
            {namaHewan.map( hewan => <Text>{hewan}</Text>)}
        </View>
    )
}

export default Basic

const styles = StyleSheet.create({})
