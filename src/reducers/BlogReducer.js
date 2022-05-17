const BlogReducer = (state, action) => {
    switch(action.type){
    case "GET_POSTS": return action.payload;
    case "CREATE_POST": return [...state, action.payload];
    case "UPDATE_POST": return state.map(post => {
        if(post.id == action.payload.id){
            return action.payload;
        }
        return post;
    });
    case "DELETE_POST": return state.filter(post => post.id != action.payload.id);
    default: return state;
    }
}

export default BlogReducer;