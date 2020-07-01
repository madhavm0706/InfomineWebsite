import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';


export default function Share(props) {

    const [postid,setPostId] = useState("");
    const [post,setpost] = useState([]);
    const [route,setRedirect] = useState(false);
    const [fetchsharea,setFetchsharea] = useState(false);

    

    useEffect(() =>{
        setPostId(props.match.params.id);
        
    },[props.match.params.id]);

    

    const getdraftarticle = async (postid) =>{
        const _post = await firebase.getPostDraftid(postid).catch(err =>{
            console.log(err);
            return err;
        });
        

        setpost(_post);
       
    }
    const sharearticle = async () =>{

        let newPost ={
            id: postid,
            name: post.name,
            date: post.date,
            publishedBy: post.publishedBy,
            
            discription: post.discription,
            cover: post.cover,
            fileRef: post.fileRef,
            user: post.user
            
          }

    



        await firebase.shareArticle(newPost).then(()=>{
            console.log("article shared sucessfully");
        }).catch(err =>{
            console.log(err);
            return err;
        })

    }
    

    const fetch = async (postid)=>{
        const article = await firebase.fetchshareArticle(postid).catch(err =>{
            console.log(err);
            return err;
        });
        
        if(article == null){
            setFetchsharea(false)
        }else{
            setFetchsharea(true);

        }
        
        
    }
    
    
    let button;
    if(fetchsharea){
        button =(
            <button  className="btn btn-primary">Already shared</button>  

        )
        
    }else{
        button =(
            <button  className="btn btn-primary" onClick={sharearticle}>Share it</button>  

        )
    }
    

    

    useEffect(() =>{
        getdraftarticle(props.match.params.id);
        fetch(props.match.params.id);
    },[props.match.params.id]);

   
    
    

    return (
        <div>
          Do you want to share?
          {button}
        </div>
    )
}
