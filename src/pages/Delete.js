import React,{useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import firebase from '../firebase/Firebase';

export default function Delete(props) {
    const [post,setPost] = useState("");
    const [postid,setPostId] = useState("");
    const [route,setRedirect] = useState(false);

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
         firebase.deleteArticle(postid, post.fileRef).then(() =>{

             setRedirect(true);
         }).catch(err =>{
             console.log(err);
             return err;
         });

     }

     if(route){
         return <Redirect to="/postyourarticle/drafts" />
     }
     

     

    return (
        <div>
            Do You want to delete this article?
            <button onClick={deletethearticle} className="btn btn-primary">Yes</button>
        </div>
    )
}
