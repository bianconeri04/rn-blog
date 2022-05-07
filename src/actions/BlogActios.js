export const addPost = (dispatch, callback) => {
    return (id, title, content) => {
        dispatch({
            type:"CREATE_POST",
            payload:{id:Math.floor(Math.random()*999999), title, content}
        });
    
        if(callback){
            callback();
        }
    };
};

export const updatePost = (dispatch, callback) => {
    return (id, title, content) => {
        dispatch({
            type:"UPDATE_POST",
            payload:{id, title, content}
        });
        
        if(callback){
            callback();
        }
    };
};

export const deletePost = (dispatch, callback) => {
    return (id) => {
        dispatch({type:"DELETE_POST", payload:{id}});
        
        if(callback){
            callback();
        }
    };
};