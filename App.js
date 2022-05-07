import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { BlogProvider } from './src/context/BlogContext';
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import UpdateScreen from './src/screens/UpdateScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function BlogStack(){
  const CreateButton = (navigation) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("Create");}}>
      <Ionicons name="add-circle-outline" size={30} color="green" style={{marginRight:10}} />
    </TouchableOpacity>
  );

  const UpdateButton = (navigation, route) => (
    <TouchableOpacity onPress={()=>{navigation.navigate("Update", {id: route.params.id});}}>
      <Ionicons name="create-outline" size={30} color="green" style={{marginRight:10}} />
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={({navigation})=>({ 
          title: "My React Native blog",
          headerRight: () => CreateButton(navigation)
        })} />
      <Stack.Screen name="Create" component={CreateScreen} options={{title: "Create Post"}} />
      <Stack.Screen name="Details" component={DetailsScreen} options={({navigation, route}) => ({
          title: "Post Details",
          headerRight: () => UpdateButton(navigation, route)
        })} />
      <Stack.Screen name="Update" component={UpdateScreen} options={{title: "Update Post"}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <BlogStack />
      </NavigationContainer>
    </BlogProvider>
  );
}
