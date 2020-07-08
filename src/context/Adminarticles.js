import React,{useReducer} from 'react';


export const AdminArticles = React.createContext();

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


export const AdminArticlesProvider = (props)=>{
    const [state, dispatch] = useReducer(posts, initialstate);
    const value = {state, dispatch};

    return <AdminArticles.Provider value={value}>
        {props.children}
    </AdminArticles.Provider>
}

