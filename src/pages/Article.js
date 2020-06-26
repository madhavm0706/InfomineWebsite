import React,{useEffect,useRef,useState} from 'react';
import {Redirect} from 'react-router-dom';

import firebase from '../firebase/Firebase';


export default function Article(props) {

    const [timer,setTimer] = useState(false);
    const [editMode,setEditMode] = useState(false);
    const [userstate,setUserstate] = useState(false);
    const [isBusy,setIsBusy] = useState(false);
    const [post,setPost] = useState("");

    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const fileRef = useRef(null);

    const [postid,setPostid] = useState("");
    const [routeRedirect,setRouteRedirect] = useState(false);


    const getPost = async (postid) =>{
        const _post = await firebase.getPost(postid).catch(err =>{
            console.log(err);
            return err;
        });

        setPost(_post);
        console.log(_post);
    }

    useEffect(() =>{
        setTimer(true);
        setPostid(props.match.params.id);
        getPost(props.match.params.id);

        setTimeout(() => setTimer(false), 1000);
    },[props.match.params.id]);

    

    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/" />
    }

    let currentPost;

    if(timer){
        currentPost=(
            <div>
                <p>Loading Article</p>
                <p>Loading...</p>
            </div>
        )
    }else{
        currentPost=(
            <>
            <h2>{post.name}</h2>
            <p>{post.discription}</p>
            <p>{post.date}</p>
            <p>{post.publishedBy}</p>
            
            </>
        )
    }



    return (
        <>
       {currentPost}
    
        </>
    )
}
