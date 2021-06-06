import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class LifecycleClass extends Component {
//     constructor(props){
//     super(props)
//     console.log('====> ini constructor');
//     this.state = {
//       nama: 'rama'
//     }

//   }

//   componentDidMount() {
//     console.log('====> component di mount')
//     setTimeout(() => {
//       this.setState({
//         nama: 'Rama Aja'
//       })
//     }, 2000)
//   }

//   componentDidUpdate() {
//     console.log('===> component did update')
//   }

//   componentWillUnmount() {
//     console.log('===> component will unmount')
//   }
    render() {
        // console.log('===> render')
        return (
            <View>
                {/* <Text> {this.state.nama} </Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({})
