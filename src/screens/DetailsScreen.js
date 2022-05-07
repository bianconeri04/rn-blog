import React, {useContext} from "react";
import {View, Text, StyleSheet} from "react-native";
import BlogContext from "../context/BlogContext";

const DetailsScreen = (props) => {
    const [state, dispatch] = useContext(BlogContext);

    const post = state.find((item) => item.id == props.route.params.id);

    return (
        <View>
            <Text>Title: {post.title}</Text>
            <Text>Content: {post.content}</Text>
        </View>
    );
}

export default DetailsScreen;