import { View } from "react-native";
import { StyleSheet } from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker'
import { useState,useRef } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircularButton";
import EmojiPicker from "@/components/EmojPicker";
import { type ImageSource } from "expo-image";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import * as MediaLibrary from  'expo-media-library'
import { captureRef } from "react-native-view-shot";

const PlaceholderImage =  require('@/assets/images/background-image.png');

export default function Index() {
  const [status,requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showOptions,setShowOptions] = useState<boolean>(false);
  const[isModalVisible,setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji,setPickedEmoji] = useState<ImageSource | undefined>(undefined);
  const imageRef = useRef<View>(null);

  if(!status==null){
    requestPermission();
  }


  let pickImageAsync = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing: true,
      quality:1,
    })
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      setShowOptions(true),
      console.log(result);
    }else{
      alert("You did not select any image");
    }
  };
  const onReset = ()=>{
    setShowOptions(false);
  }
  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async()=>{
    try{
      const localUri = await captureRef(imageRef,{
        height: 440,
        quality: 1,
      });
      await MediaLibrary.saveToLibraryAsync(localUri);
      if(localUri){
        alert("Image saved to gallery");
    }
  }catch(e){
    console.log(e);
    
  }


  return (
    <GestureHandlerRootView style={styles.container}>
    <View >
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View> 
      </View>
      {showOptions ? (
        <View>
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        </View>
      ):(
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync}/>
        <Button label="Use this photo"/>
      </View>
      )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
    </View>
    </GestureHandlerRootView>
  );
}
}

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
    alignItems: 'center',
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
  optionsContainer: {
    position: 'absolute',
    bottom: 60,
  
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
