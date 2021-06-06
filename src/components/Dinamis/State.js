import React, {Component, useState} from 'react'
import { View, Text, Button } from 'react-native'

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text style = {{fontSize: 20, textAlign: 'center'}}>{number}</Text>
            <Button title = "tambah" onPress = {() => {
                setNumber(number + 1)
            }} />
            <Button title = "kurang" onPress = {() => {
                setNumber(number - 1)
            }} />
        </View>
    )
}

class CounterClass extends Component {
    state = {
        number: 0,
    }
    render() {
        return(
            <View>
                <Text style = {{fontSize: 20, textAlign: 'center'}}>{this.state.number}</Text>
                <Button title = "tambah" onPress = {() => {
                    this.setState({number: this.state.number + 1})
                }} />
                <Button title = "kurang" onPress = {() => {
                    this.setState({number: this.state.number - 1})
                }} />
            </View>
        )
    }
}

const State = () => {
    return (
        <View>
            <Counter />
            <Counter />
            <CounterClass />
            <CounterClass />
        </View>
    )
}

export default State
