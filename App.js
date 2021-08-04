import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, Button, ImageBackground, BackHandler} from 'react-native';
import Header from './tukde/header';
import PecLogin from './tukde/login/peclogin';

export default function App() {
  const [form,setForm] = useState(false);

  if (form !== false) {
    
    return (<PecLogin/>);
    setForm(false);
  }
   
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.imgView}>
        <ImageBackground source={require('./assets/pec.png')} style={styles.img}/>
      </View>
      <View style={styles.butt}>
      <Button title="Register / Login" style={{color:"#2196F3", fontSize:80, }} onPress={()=>{setForm(true)}}/>
      </View>
      {/* <Footer/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  butt:{
    width: "100%",
    height:50,
    position: "absolute",
    bottom:-15,
    left:0,
  },
  imgView:{
    width: "100%",
    height:500,

  },
  img:{
    width:"100%",
    height:"100%",
    resizeMode:"cover",
  }
});

    // useEffect(() => {
    //   const backAction =()=>{
    //     else{
    //       BackHandler.exitApp();
    //     }
    //   }
  
    //   const backHandler = BackHandler.addEventListener('hardwareBackPress',backAction);
    // },[form]);