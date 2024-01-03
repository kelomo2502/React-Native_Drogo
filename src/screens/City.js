import React from 'react'
import {SafeAreaView,Text,ImageBackground, StyleSheet, StatusBar, View} from 'react-native'
import IconText from '../components/IconText';



export default function City() {
    const {container,imageLayout,cityText, cityName,countryName, populationWrapper,populationText,riseSetWrapper, riseSetText, rowLayout} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={imageLayout}
      >
        <Text style={[cityText,cityName]}>London</Text>
        <Text style={[cityText,countryName]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName={"user"} iconColor={"red"} bodyText={"8000"} bodyTextStyles={populationText}/>
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName={"sunrise"} iconColor={"white"} bodyText={"10:46:58am"} bodyTextStyles={riseSetText}/>
          <IconText iconName={"sunset"} iconColor={"white"} bodyText={"18:30:50pm"} bodyTextStyles={riseSetText}/>
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
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",

  },
  riseSetWrapper: {
  
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "#fff",
   
  },
  rowLayout:{
    flexDirection:"row",
    alignItems:"center"
  }
});
