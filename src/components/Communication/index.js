import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Notif from '../Notif'
import Produk from '../Produk'

export default function Communication() {
    const [totalProduk, setTotalProduk] = useState(0)
    return (
        <View>
            <Notif notif = {totalProduk} />
            <Produk onButtonPressPlus = {() => {setTotalProduk(totalProduk + 1)}}
                onButtonPressMin = { () => setTotalProduk(totalProduk - 1) }
            />
        </View>
    )
}
