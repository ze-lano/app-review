import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles, images } from "../styles/global";
import Header from "../shared/header";
import Card from "../shared/card";


export default function ReviewDetails({ navigation, route }) {
    const { title, rating, body, key} = route.params
    return (
        <View >
            <Header title='Review details' navigation= {navigation} isMenu={false}/>
            <Card>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.titleText}>{body}</Text>
                <View style={styles.rating}>
                    <Text style={globalStyles.titleText}>Game rating: </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})