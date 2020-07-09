import React,{useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import firebase from '../firebase/Firebase';
import { MdError } from "react-icons/md";

import loading from '../images/loading-arrow.gif';



export default function Delete(props) {
    const [post,setPost] = useState("");
    const [postid,setPostId] = useState("");
    const [route,setRedirect] = useState(false);
    const [isbusyshare,setIsbusyshare] = useState(false);



     const getPost = async (postid) =>{
         const _posts = await firebase.getPostDraft(postid).catch(err =>{
                 console.log(err);
                 return err;
         });
         setPost(_posts);
         console.log(_posts);
     }

     useEffect(() =>{
         setPostId(props.match.params.id);
         getPost(props.match.params.id);

         
         
     },[props.match.params.id]);

     const deletethearticle =  () =>{

        setRedirect(true);
         
         
         firebase.deleteArticle(postid, post.fileRef).then(() =>{

             setRedirect(true);
         }).catch(err =>{
             console.log(err);
             return err;
         });
         setRedirect(false);
        

     }
     let share;
     if(route){
        share =(
            <div>
                   <br /><br />

                   
                   <div className="loader">
                   <p align="center">Request is being proceed</p>
                   <img src={loading}></img>
                   </div>
               </div>
        )
         return <Redirect to="/postyourarticle/drafts" />
     }
     
     
 
     

    return (
        <div>
          
          {share}
          <div className="error-size">
            <br/>
        <div className="jumbotron">
                <h1><MdError /> Do You want to Delete this article <MdError/></h1>
                <br />
                <button style={{marginLeft:"45%"}} className="btn btn-primary" onClick={deletethearticle} >Delete </button>  
      
        </div>
        </div>
        </div>
    )
}
