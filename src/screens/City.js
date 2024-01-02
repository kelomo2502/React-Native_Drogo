import React from 'react'
import {SafeAreaView,Text,ImageBackground, StyleSheet, StatusBar, View} from 'react-native'
import { Feather, AntDesign } from "@expo/vector-icons";



export default function City() {
    const {container,imageLayout,cityText, cityName,countryName, populationWrapper,populationText,riseSetWrapper, riseSetText} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={imageLayout}
      >
        <Text style={[cityText,cityName]}>London</Text>
        <Text style={[cityText,countryName]}>UK</Text>
        <View style={populationWrapper}>
          <Feather name="user" size={50} color="red"/>
          <Text style={populationText}>8000</Text>
        </View>
        <View style={riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white"/>
          <Text style={riseSetText}>10:46:58am</Text>
          <Feather name="sunset" size={50} color="white"/>
          <Text style={riseSetText}>18:30:50pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize:40
  },
  countryName: {
    fontSize:30
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:30

  },
  populationText:{
    fontSize:25,
    marginLeft:7.5,
    color:"red",
    fontWeight:"bold"
  },
  riseSetWrapper:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    marginTop:30
  },
  riseSetText:{
    fontSize:20,
    color:"#fff",
    fontWeight:"bold"
  }
});
