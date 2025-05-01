import { View,Text, TextInput ,StyleSheet} from "react-native";
export default function Login() {
    return (
        <View>
        <TextInput value="text" placeholder="Email"keyboardType="email-address" />
        <TextInput value="text" style={styles.input} placeholder="Password" keyboardType="visible-password"/>
        <TextInput value="text" style={styles.input} placeholder="Phone number" keyboardType="name-phone-pad"/>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        height:30,
        borderRadius:10,

    }
})