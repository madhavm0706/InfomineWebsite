import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';
import { MdError } from "react-icons/md";

import loading from '../images/loading-arrow.gif';
import { Redirect } from 'react-router-dom';

export default function Sharemain(props) {

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
    

    const fetch = async (postid)=>{
        setIsbusy(true);
        
        const article = await firebase.fetchshareArticle(postid).catch(err =>{
            console.log(err);
            return err;
        });
        
        if(article == null){
            setFetchsharea(false)
            
        }else{
            setFetchsharea(true);

        }

        setIsbusy(false);
        
        
    }
    
    
    
    
    let button;

    if(isbusy){
        button =(
            <>
            <br /><br />
            <div className="container">
            <div className="row latestcard">
               
        <div className=" col-12">
            
            <div className="card__description loading1"></div><br />
            <div className="card__description loading2"></div><br />
            </div>

            
            
            
        </div>
        
        </div>
        </>
        )
    }else{
    if(fetchsharea){
        button =(
            <div className="error-size">
            <br/>
        <div className="jumbotron">
                <h1><MdError /> You have already shared this Article <MdError/></h1>
                
        </div>
        </div>
  

        )
        
    }else{
        button =(
            <div className="error-size">
            <br/>
        <div className="jumbotron">
                <h1><MdError /> Share this Article to:- <MdError/></h1>
                <br />
                <div className="row">
                    <div className="col-4">
                    <button style={{marginLeft:"45%"}} className="btn btn-primary" onClick={sharearticle} >Admins </button>  
            
                    </div>
                    <div className="col-4">
                    <button style={{marginLeft:"45%"}} className="btn btn-primary" onClick={sharearticle} >Users </button>  

                    </div>
                    <div className="col-4">
                    <button style={{marginLeft:"45%"}} className="btn btn-primary" onClick={sharearticle} >Image slider </button>  

                    </div>
                </div>

        </div>
        </div>

        )
    }
    
    }
    useEffect(() =>{
        getdraftarticle(props.match.params.id);
        fetch(props.match.params.id);
    },[props.match.params.id]); 

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
          {button}
        </div>
    )
}
