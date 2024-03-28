import React, { useState } from "react";
import { FlatList, Keyboard, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { globalStyles } from "../styles/global";
import Header from "../shared/header";
import Card from "../shared/card";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReviewForm from "./reviewForm";



export default function Home({ navigation }) {
    
    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
        ])


    const addReview = (review) => {
        review.key = Math.random().toString()
        setReviews((currentValues) => {
            return [review, ...currentValues]
        })
        setModalOpen(false)
    }

    return (
        <View>
            <Header title='Gamezone' navigation={navigation} isMenu={true}/>
            <Modal visible={modalOpen} animationType="slide" style={styles.modalContent}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{... styles.modalToggle, ...styles.modalClose}}
                        />
                    <ReviewForm addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View style={{padding: 20}} >
                <MaterialIcons
                    name='add'
                    size={24}
                    onPress={() => setModalOpen(true)}
                    style={styles.modalToggle}
                    />

                <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text styles={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 5,
        borderRadius: 10,
        // alignSelf: 'left',
      },
      modalClose: {
        marginTop: 70,
        marginBottom: 0,
      },
      modalContent: {
        flex: 1,
      }
})