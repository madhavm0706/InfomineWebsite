import React,{useReducer} from 'react';

export const Articles = React.createContext();

const initialstate={
    posts:[],
}

const posts = (state, action) =>{
    switch(action.type){
        case "FETCH_POSTS":
            return {...state, posts: action.payload}
        default:
            return state    
    }
}

export const ArticlesProvider = (props) =>{
    const [state, dispatch] = useReducer(posts, initialstate);
    const value = {state, dispatch};

    return <Articles.Provider value={value}>
        {props.children}
    </Articles.Provider>
}