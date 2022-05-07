import React, {useContext} from "react";
import BlogContext from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import { updatePost } from "../actions/BlogActios";

const UpdateScreen = ({navigation, route}) => {
    const id = route.params.id;
    const [state, dispatch] = useContext(BlogContext);
    
    const blogPost = state.find( post => post.id == id);

    const onSubmit = updatePost(dispatch, () => {
        navigation.goBack();
    });

    return (
        <BlogPostForm onSubmit={onSubmit} blogPost={blogPost}></BlogPostForm>
    );
}

export default UpdateScreen;