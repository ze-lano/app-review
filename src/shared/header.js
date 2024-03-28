import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

export default function Header({title, navigation, isMenu}) {
    
    const openMenu = () => {
        isMenu ? navigation.openDrawer() : navigation.goBack()
    }
    
    return (
        <ImageBackground source={require('../../assets/game_bg.png')} style={styles.header}>
            <Feather name={isMenu ? "menu" : "arrow-left"} size={25} style={styles.icon} onPress={openMenu}/>
            <Image source={require('../../assets/heart_logo.png')} style={styles.headerImage} />
            <Text style={styles.headerText}>{title}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        // width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },
    headerText: {
        fontWeight: 'bold', 
        fontSize: 20,
        color: '#333', 
        letterSpacing: 1,
    }, 
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 10,
    }

})