import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import {addPost} from "../actions/BlogActios";

const CreateScreen = ({navigation}) => {
    const [state, dispatch] = useContext(BlogContext);
    
    const onSubmit = addPost(dispatch, () => {
        navigation.goBack();
    });

    return (
        <BlogPostForm onSubmit={onSubmit}></BlogPostForm>
    );
}

export default CreateScreen;