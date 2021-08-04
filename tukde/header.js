import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import Constants from 'expo-constants'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> P.T.U</Text>
            <Text style={styles.smallText}>|Version 1.0 | F.Y | C.S.E |{'            '}| parmarasTechnologies |</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: Constants.statusBarHeight,
        width:"100%",
        height:120,
        // backgroundColor:"#001a4d",
        backgroundColor:"#004D99",
        flexDirection:"column",
        // justifyContent:"center",
        alignItems:"center",
        borderWidth:2
        
    },
    text: {
        color:"#fff",
        // width:"100%",
        // height:30,
        fontSize:44,
        textShadowColor:"#000",
        textShadowOffset:{
            width:3,
            height:2
        },
        textShadowRadius:5
    },
    smallText: {
        // backgroundColor:"#66ffff",
        color:"#fade32",
        // width:"100%",
        height:20,
        fontSize:12,
        // zIndex:2
    },

})