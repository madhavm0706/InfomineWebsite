import React,{useEffect,useRef,useState} from 'react';
import {Redirect} from 'react-router-dom';

import firebase from '../firebase/Firebase';
import ReactHtmlParser from 'react-html-parser';
import img from '../images/infomine.jpg';
import loading from '../images/loading-arrow.gif';
import {Link} from 'react-router-dom';


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
    const [postfield,setPostfield] = useState("");
    const [repost,setRepost]=useState([]);
    const [routeRedirect,setRouteRedirect] = useState(false);

    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];



    const getPost = async (postid) =>{
        const _post = await firebase.getPost(postid).catch(err =>{
            console.log(err);
            return err;
        });

        setPost(_post);
        console.log(_post);
    }

    const getrecommend= async(postfield)=>{

        const _post = await firebase.getrecommendedArticle(postfield).catch(err =>{
            console.log(err);
            return err;
        });

        setRepost(_post);
        



    }

    

    useEffect(() =>{
        setTimer(true);
        setPostid(props.match.params.id);
        setPostfield(props.match.params.category);
        getPost(props.match.params.id);
        getrecommend(props.match.params.category);

        setTimeout(() => setTimer(false), 1000);
    },[props.match.params.id]);

    console.log(postfield);

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
            <p align="center">Loading Article</p>
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

       <div className="container">
           <div className="row">
               <div className="col-md-6">

               </div>
               <div className="col-md-6">
                      
                      <div className="col-12">
                      <h4 className="newsTitle"><span>Recommended Articles of same field</span></h4>

                          
                      </div>
                      <div className="col-12">
                          <div className="recommendedarticles">

                          <div className="col-12">

                              
               {repost.slice(0,4).map(post =>{
    
        
          return (
              <>
               <Link to={"/article/"+post.data.field+"/"+post.id} > <div className="row latestcard">
                  <div className=" col-4">
          <div className="latestcardimg">
          <img src={post.data.cover} ></img>

          </div>
          
          
      </div>
      <div className="col-8">
    <p>{post.data.name}</p>
    <p className="latestname"><i class="fas fa-user"></i>{post.data.publishedBy} &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>{post.data.date.slice(3,5)}-{month[parseInt((post.data.date.slice(0,2)))-1]}-{post.data.date.slice(6,10)}</span></p>
        </div>
      </div></Link>


              </>

          )
            
      
    
})}

    
</div>
                              
                             
                              

                          </div>
                      </div>
                      



                  </div>



           </div>
       </div>


       

  


             

    
        </>
    )
}
