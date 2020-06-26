import React,{useReducer} from 'react';

export const Draft = React.createContext();

const initialstate ={
    posts:[]
}

const posts = (state, action) =>{
    switch(action.type){
        case "FETCH_POSTS":
            return {...state, posts: action.payload}
        default:
            return state    
    }
}

export const DraftsProvider = (props) =>{
    const [state, dispatch] = useReducer(posts, initialstate);
    const value = {state, dispatch};

    return <Draft.Provider value={value}>
        {props.children}
    </Draft.Provider>
}