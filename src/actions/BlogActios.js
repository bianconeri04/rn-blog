import jsonServer from "../api/jsonServerApi";

export const getPosts = (dispatch) => {
    return async () => {
        const result = await jsonServer.get("/blogPosts");
        
        dispatch({
            "type": "GET_POSTS",
            "payload": result.data
        });
    };
};

export const addPost = (dispatch, callback) => {
    return async (id, title, content) => {
        const result = await jsonServer.post("/blogPosts",{title, content});
        
        dispatch({
            "type": "CREATE_POST",
            "payload": result.data
        });
    
        if(callback){
            callback();
        }
    };
};

export const updatePost = (dispatch, callback) => {
    return async (id, title, content) => {
        const result = await jsonServer.put(`/blogPosts/${id}`,{title, content});

        dispatch({
            "type": "UPDATE_POST",
            "payload": result.data
        });
        
        if(callback){
            callback();
        }
    };
};

export const deletePost = (dispatch, callback) => {
    return async (id) => {
        const result = await jsonServer.delete(`/blogPosts/${id}`);

        dispatch({type:"DELETE_POST", payload:{id}});
        
        if(callback){
            callback();
        }
    };
};