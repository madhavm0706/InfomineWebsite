import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';


export default function Share(props) {

    const [postid,setPostId] = useState("");
    const [post,setpost] = useState("");
    const [route,setRedirect] = useState(false);

    const sharethearticle=async (postid) =>{
          const _post = await firebase.shareArticle1(postid).catch(err =>{
              console.log(err);
              return err;
          });
          setpost(_post);
          console.log(_post);

          
    }

    useEffect(() =>{
        setPostId(props.match.params.id);
        
    },[props.match.params.id]);

    

    return (
        <div>
          Do you want to share?
          <button onClick={sharethearticle} className="btn btn-primary">Share it</button>  
        </div>
    )
}
