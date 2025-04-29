import { Link, Stack } from "expo-router"
import { View,StyleSheet } from "react-native"

const NotFoundScreen = () => {
    return(
        <>
        <Stack.Screen options={{title:'Oops! Not Found'}}/>
        <View style={styles.container}>
            <Link style={styles.button} href="/(tabs)/index"> Go back Home screen</Link>
        </View>
        </>
    )
}
export default NotFoundScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
  });