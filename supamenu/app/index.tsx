import { Text, View } from "react-native";
import * as SplasScreen from "expo-splash-screen";
import Login from "@/components/login";

// keep splash screen visible while loading
SplasScreen.preventAutoHideAsync();

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Login/>
    </View>
  );
}
