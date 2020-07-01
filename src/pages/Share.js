import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';


export default function Share(props) {

    const [postid,setPostId] = useState("");
    const [post,setpost] = useState([]);
    const [route,setRedirect] = useState(false);

    

    useEffect(() =>{
        setPostId(props.match.params.id);
        
    },[props.match.params.id]);

    const getdraftarticle = async () =>{
        const _post = await firebase.getPostedArticlesonDraftid(post).catch(err =>{
            console.log(err);
            return err;
        });
        console.log(_post);

        setpost(_post);
    }
    console.log(post);

    useEffect(() =>{
        getdraftarticle();
    },[])
    

    return (
        <div>
          Do you want to share?
          <button  className="btn btn-primary">Share it</button>  
        </div>
    )
}
