import { View } from "react-native";
import { StyleSheet } from "react-native";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";


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
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary"/>
        <Button label="Use this photo"/>
      </View>
    </View>
  );
}
