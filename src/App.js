import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Axios from 'axios';
import AxiosApi from "./components/AxiosApi";
import Basic from "./components/Basic";
import BelajarApi from "./components/BelajarApi";
import Communication from "./components/Communication";
import Dinamis from "./components/Dinamis";
import State from "./components/Dinamis/State";
import Flexbox from "./components/Flexbox";
import LifecycleClass from "./components/LifecycleClass";
import LifecycleFunc from "./components/LifecycleFunc";
import Notif from "./components/Notif";
import Produk from "./components/Produk";
import Profile from "./components/Profile";


class App extends Component {

  render(){
    // console.log('===> render')
    return (
      <View>
        {/* <Flexbox />
        <Profile /> */}
         {/* <Notif /> */}
        {/* <LifecycleClass />
        <LifecycleFunc />
        <Dinamis />
        <State /> */}
        {/* <Produk /> */}
        {/* <Communication /> */}
        {/* <Basic /> */}
        {/* <BelajarApi /> */}
        <AxiosApi />
      </View>
    )
  }
}



export default App;