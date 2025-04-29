import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs  
        screenOptions={{
            tabBarActiveTintColor:"#e19c18",
            headerStyle:{
                backgroundColor:"#25292e",
            },
            headerShadowVisible: false,
            headerTintColor:"#fff",
            tabBarStyle:{
                backgroundColor:"#25292e",
            }
            }}>
      
   
      <Tabs.Screen name="index" options={{
         title: 'Home',
         tabBarIcon:({color,focused})=>(
            <Ionicons name={focused ?  'home-sharp' : 'home-outline'} color={color} size={25} />
         ),}} />
      <Tabs.Screen name="about" options={{
         title: 'About',
         tabBarIcon:({color,focused})=>(
            <Ionicons name={focused ?  'information-circle-sharp' : 'information-circle-outline'} color={color} size={25} />
         )
         }} />
    </Tabs>
  );
}
