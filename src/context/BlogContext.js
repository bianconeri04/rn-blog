import React, {useReducer} from 'react';
import BlogReducer from '../reducers/BlogReducer';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    const [state, dispatch] = useReducer(BlogReducer, []);

    return (
        <BlogContext.Provider value={[state, dispatch]}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;