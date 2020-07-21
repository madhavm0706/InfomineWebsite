import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';
import { MdError } from "react-icons/md";

import loading from '../images/loading-arrow.gif';
import { Redirect } from 'react-router-dom';

export default function Share(props) {

    const [postid,setPostId] = useState("");
    const [post,setpost] = useState([]);
    const [route,setRedirect] = useState(false);
    const [fetchsharea,setFetchsharea] = useState(false);
    const [isbusy,setIsbusy] = useState(false);

    

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
// share article to admins

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
      setRedirect(true);




    await firebase.shareArticle(newPost).then(()=>{
        console.log("article shared sucessfully");
    }).catch(err =>{
        console.log(err);
        return err;
    })

    

}
const confirmessage = () =>{
        
    var r = window.confirm("Do You want to share this post to admin");
    if (r == true) {

        sharearticle();

     
     
        
      } else  {
         return <Redirect to="/postyourarticle/drafts" />
          }

}

const shareadmin = () =>{
        
    fetch(postid);
}

const fetch = async (postid)=>{
    setIsbusy(true);
    
    const article = await firebase.fetchshareArticle(postid).catch(err =>{
        console.log(err);
        return err;
    });
    
    if(article == null){
        confirmessage();
        
    }else{
        alert("you have already shared this article to admin");

    }

    setIsbusy(false);
    
    
}


// end share articles to admins
  
    // shart articles to user
    const sharearticleuser = async () =>{
         
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
          setRedirect(true);
    



        await firebase.shareArticleuser(newPost).then(()=>{
            console.log("article shared sucessfully");
        }).catch(err =>{
            console.log(err);
            return err;
        })

        

    }

    const confirmessageuser = () =>{
        
        var r = window.confirm("Do You want to share this post to user");
        if (r == true) {

            sharearticleuser();

         
         
            
          } else  {
             return <Redirect to="/postyourarticle/drafts" />
              }

    }


    const shareuser = () =>{
        
        fetchuser(postid);
    }

    const fetchuser = async (postid)=>{
        setIsbusy(true);
        
        const article = await firebase.fetchshareArticleuser(postid).catch(err =>{
            console.log(err);
            return err;
        });
        
        if(article == null){
            confirmessageuser();
            
        }else{
            alert("you have already shared this article to user");

        }

        setIsbusy(false);
        
        
    }


    
    // end share articles to user

    // share articles to slider

    const sharearticleslider = async () =>{
         
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
          setRedirect(true);
    



        await firebase.shareArticleslider(newPost).then(()=>{
            console.log("article shared sucessfully");
        }).catch(err =>{
            console.log(err);
            return err;
        })

        

    }



    
    
    const shareslider = () =>{
        
        fetchsliders(postid);
    }

  
    
    const confirmessageslider = () =>{
        
        var r = window.confirm("Do You want to share this post to slider");
        if (r == true) {

            sharearticleslider();

         
         
            
          } else  {
             return <Redirect to="/postyourarticle/drafts" />
              }

    }

    

  

    
    const fetchsliders = async (postid)=>{
        setIsbusy(true);
        
        const article = await firebase.fetchshareArticleslider(postid).catch(err =>{
            console.log(err);
            return err;
        });
        
        if(article == null){
            confirmessageslider();
            
        }else{
            alert("you have already shared this article to slider");

        }

        setIsbusy(false);
        
        
    }
    
    // end share articles to slider
    
    
    
    let button;

    if(isbusy){
        button =(
            <>
           <div>
                   <br /><br />

                   
                   <div className="loader">
                   <p align="center">Request is being proceed</p>
                   <img src={loading}></img>
                   </div>
               </div>
        </>
        )
    }else{
        button=(
            <div>
            <div className="error-size">
  <br/>
<div className="jumbotron">
      <h1><MdError /> Share this Article to:- <MdError/></h1>
      <br />
      <div className="row">
          <div className="col-4">
          <button style={{marginLeft:"45%"}} className="btn btn-primary" onClick={shareadmin}  >Admins </button>  
  
          </div>
          <div className="col-4">
          <button style={{marginLeft:"45%"}} className="btn btn-primary" onClick={shareuser}  >Users </button>  

          </div>
          <div className="col-4">
          <button style={{marginLeft:"45%"}} className="btn btn-primary" onClick={shareslider}  >Image slider </button>  

          </div>
      </div>

</div>
</div>

</div>


        )
    }
    useEffect(() =>{
        getdraftarticle(props.match.params.id);
        // fetch(props.match.params.id);
    },[props.match.params.id]); 

   
    
    

    

   
    
    

    return (<>
        {button}
        </>
    )
}
