import React, {useState} from "react";
import {ScrollView, Text, TextInput, StyleSheet, Button} from "react-native";

const BlogPostForm = ({onSubmit, blogPost}) => {
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <ScrollView keyboardShouldPersistTaps='handled' style={styles.view}>
            <Text>Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}></TextInput>
            <Text>Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent}></TextInput>
            <Button onPress={()=>{
                onSubmit(blogPost.id, title, content);
            }} title="Save" />
        </ScrollView>
    );
}

BlogPostForm.defaultProps = {
    blogPost: {
        id: "",
        title: "",
        content: ""
    }
};

const styles = StyleSheet.create({
    view:{
        margin: 10
    },
    input:{
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 15,
        padding: 5
    }
});

export default BlogPostForm;