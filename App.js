import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'expo-vector-icons';
import { HomeScreen } from './src/screens/home.screen';
import { HomeNavigator } from './src/infrastructure/home.navigator';
// import Searchit from './src/components/search.component';
const Tab= createBottomTabNavigator();

// const   HomeScreen = () => {
//   return (
   
//     <View>
//       <Text>Home screen</Text>
//     </View>
//   )
// }
const SavedScreen = () => {
  return (
    <View>
      <Text>saved screen</Text>
    </View>
  )
}


export default function App() {
  return (
    <>
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size}) => {
          let iconName;

          if(route.name == "Home") {
            iconName = "md-home";
          }
          // else if (route.name == "Saved") {
          //   iconName = "md-heart";
          // }

          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: "#FC5252",
        inactiveTintColor: "#898989"
      }}
    > 
      <Tab.Screen name="Home" component={HomeNavigator} options={{ headerShown: false}} />
      {/* <Tab.Screen name="Saved" component={SavedScreen} options={{ headerShown: true }} /> */}
    </Tab.Navigator>
   
  </NavigationContainer>
  <StatusBar style='auto' />
</>
  );
}

