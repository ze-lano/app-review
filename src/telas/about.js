import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import Header from "../shared/header";


export default function About({ navigation }) {
    return (
        <View>
            <Header title='About page' navigation={navigation} isMenu={true}/>
            <Text style={globalStyles.titleText}>About Screen</Text>
        </View>
    )
}
