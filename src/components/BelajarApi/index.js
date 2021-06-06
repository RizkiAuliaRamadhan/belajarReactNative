// import React,{useEffect, useState} from 'react'
// import { View, Text, Button } from 'react-native'

// const BelajarApi = () => {

//     const [dataCovid, setdataCovid] = useState({
//         name: '',
//         positif: '',
//         sembuh: '',
//         meninggal: ''
//     })

//     // useEffect(() => {

//     //     //cal api dengan get
//     //     // fetch('https://api.kawalcorona.com/indonesia')
//     //     // .then(response => response.json())
//     //     // .then(json => console.log(json))

//     //     const DataApi = {
//     //         name: "morpheus",
//     //         job: "leader"
//     //     }

//     //     //call api dengan post
//     //     fetch('https://reqres.in/api/users', {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(DataApi)
//     //     })
//     //     .then(response => response.json())
//     //     .then(json => {console.log('post response ', json)})

//     // }, []);

//     const getData = () => {
//         fetch('https://api.kawalcorona.com/indonesia')
//         .then(response => response.json())
//         .then(json => setdataCovid(json[0]))
//     }

//     return (
//         <View>
//             <Text>werr</Text>
//             <Button title = "get data" onPress = {getData} />
//             <Button title = 'post data' />
//             <Text>{dataCovid.name} </Text>
//             <Text>{dataCovid.positif} </Text>
//             <Text>{dataCovid.sembuh} </Text>
//             <Text>{dataCovid.meninggal} </Text>
//         </View>
//     )
// }

// export default BelajarApi


import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'

const BelajarApi = () => {

    const [dataCovid, setDataCovid] = useState({})
    const [dataCovidProvinsi, setDataCovidProvinsi] = useState({})

    useEffect(() => {
        fetch('https://api.kawalcorona.com/indonesia')
        .then(response => response.json())
        .then(json => setDataCovid(json[0]))
        .catch(error => alert('error'))

        fetch('https://api.kawalcorona.com/indonesia/provinsi')
        .then(response => response.json())
        .then(json => setDataCovidProvinsi(json[2]))
        .catch(error => alert('error'))
    })

    // console.log(dataCovidProvinsi.attributes)
    // console.log(dataCovid.positif)
    return (
        <View>
            <Text>Belajar API</Text>
            <Text>Negara {dataCovid.name}</Text>
            <Text>Jumlah Positif : {dataCovid.positif}</Text>
            <Text>Jumlah Sembuh : {dataCovid.sembuh}</Text>
            <Text>Jumlah Meninggal : {dataCovid.positif}</Text>

            <Text>Provinsi {dataCovidProvinsi.attributes.Provinsi}</Text>
            <Text>Jumlah Positif : {dataCovidProvinsi.attributes.Kasus_Posi}</Text>
            <Text>Provinsi {dataCovidProvinsi.attributes.Kasus_Semb}</Text>
            <Text>Jumlah Positif : {dataCovidProvinsi.attributes.Kasus_Meni}</Text>
        </View>
    )
}

export default BelajarApi
