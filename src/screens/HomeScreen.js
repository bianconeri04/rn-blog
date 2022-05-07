import React, { useContext } from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import BlogContext from "../context/BlogContext";
import { Ionicons } from '@expo/vector-icons';
import { deletePost } from "../actions/BlogActios";

const HomeScreen = ({navigation}) => {
    const [state, dispatch] = useContext(BlogContext);

    const viewPost = (id) => {
        navigation.navigate("Details",{id});
    }

    if(!state.length){
        return <Text style={{textAlign:"center", padding:10}}>No blog posts found.</Text>
    }

    const onDelete = deletePost(dispatch);

    return (
        <View>        
            <FlatList data={state} keyExtractor={item => item.id} renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={() => viewPost(item.id)} style={styles.row}>
                        <Text style={styles.item}>{item.title}</Text>
                        <TouchableOpacity onPress={() => onDelete(item.id)}>
                            <Ionicons name="trash-outline" size={25} style={{padding:10}} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                );
            }} />            
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "black"
    },
    item:{
        fontSize: 20,        
        padding: 10
    }
});

export default HomeScreen;