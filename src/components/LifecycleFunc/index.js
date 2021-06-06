import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';

const LifecycleFunc = () => {
    const [nama, setNama] = useState('rama');
    const [show, isShow] = useState(true)
    useEffect(() => {
        console.log('mount');
        // return () => {
        //     console.log('update');
        //     setTimeout(() => {
        //         setNama('rwama jaja')
        //     }, 2000);
        // }
    }, []);

    useEffect(() => {
        console.log('update')
        setTimeout(() => {
            setNama('rama aja')
        }, 2000)
    }, []);

    useEffect(() => {
        console.log('hapus')
        setTimeout(() => {
            isShow(false)
        }, 6000)
    }, [])
    
    return(
        <View>
            {show && <Text>Ini LifecycleFunction {nama}</Text>}
        </View>
    )
}

export default LifecycleFunc;