import React, {useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import Axios from 'axios';

console.log('coba')
const AxiosApi = () => {
    const [dataCovid, setDataCovid] = useState({})

    useEffect(() => {
        Axios.get('https://api.kawalcorona.com/indonesia')
        .then(response => console.log(response))
        .catch(error => alert(error))
    },[])

    return (
        <View>
            <Text>Belajar Axios dengan function component</Text>
            {/* <Text>{}</Text> */}
            {/* <Button title = 'get' onPress = {getData()} /> */}
        </View>
    )
}

export default AxiosApi

