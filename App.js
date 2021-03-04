import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePageScreen from './screens/HomePage/HomePageScreen';
import AddItemScreen from './screens/AddItemPage/AddItemScreen';
import EditItemScreen from './screens/EditItemPage/EditItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePageScreen}
        />
        <Stack.Screen 
          name="AddItem" 
          component={AddItemScreen} 
        />
        <Stack.Screen 
          name="EditItem" 
          component={EditItemScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <HomePageScreen/>
//         <StatusBar style="auto" />
//       </View>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center'
//   },
// });

export default App;