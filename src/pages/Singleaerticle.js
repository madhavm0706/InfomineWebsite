import React,{useEffect,useRef,useState} from 'react';
import {Redirect} from 'react-router-dom';

import firebase from '../firebase/Firebase';
import ReactHtmlParser from 'react-html-parser';
import img from '../images/infomine.jpg';
import loading from '../images/loading-arrow.gif';


export default function ArticleDraft(props) {

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
        const _post = await firebase.getPostedArticle(postid).catch(err =>{
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
            <br /><br />

            
            <div className="loader">
            <p align="center">Loading Data</p>
            <img src={loading}></img>
            </div>
        </div>
        )
    }else{
        currentPost=(
            <>
            
                <div className="borderbox container">

                   <div className="row">
                       <div className="col-2">
                     <img className="logo" src={img}  /> 

                        </div>

                        <div class="col-10">
        <h4 class="heading" align="right">{post.name}</h4>
        <h5 class="writer" align="right">{post.publishedBy}</h5><hr />

                 </div>

                 </div>
        <div class="contentbox">
           {ReactHtmlParser(post.discription)}

        </div>

                   
                
                 </div>

            </>
        )
    }



    return (
        <>
       {currentPost}
    
        </>
    )
}
