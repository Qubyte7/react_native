import { View } from "react-native";
import { StyleSheet } from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react";

const PlaceholderImage =  require('@/assets/images/background-image.png');



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "#fff",
  },
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color: '#fff',  
  },
  imageContainer:{
    flex: 1,
  },
  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1/2.5,
    alignItems: 'center',
  },

})



export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  let pickImageAsync = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing: true,
      quality:1,
    })
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      console.log(result);
    }else{
      alert("You did not select any image");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
        <Button label="Use this photo"/>
      </View>
    </View>
  );
}
