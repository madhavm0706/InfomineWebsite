import React,{useEffect,useState}  from 'react';
import firebase from '../firebase/Firebase';
import loading from '../images/loading-arrow.gif';



export default function Editform(props) {

    const [postid,setPostid] = useState("");
    const [post,setPost] = useState([]);
    const [isbusy,setIsbusy] = useState(false);

    useEffect(() =>{
        setPostid(props.match.params.id);
        getPost(props.match.params.id);
    });


    const getPost = async (postid) =>{
        setIsbusy(true);
        const post = await firebase.getPostDraft(postid).catch(err =>{
            console.log(err);
            return err;
        });
        setPost(post); 
        setIsbusy(false);
    }

    


    console.log(postid);
    console.log(post);

    let content;
    if(isbusy){
        content =(
            <div>
            <br /><br />

            
            <div className="loader">
            <p align="center">Loading Article</p>
            <img src={loading}></img>
            </div>
        </div>
        )

    }else {
        content =(
            <>
               hello from edit page
            </>

        )
    }

    return (
        <div>
            {content}
        </div>
    )
}
