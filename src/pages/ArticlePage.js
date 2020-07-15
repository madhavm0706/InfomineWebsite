import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';
import {Link} from 'react-router-dom';

import {Articles} from '../context/Articlecontext';
import image from '../images/infomine.jpg'

export default function Posteddata() {


    const {state,dispatch} = React.useContext(Articles);
    const [isBusy,setIsBusy] = useState(false);

    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


    const getPostedArticles = async () =>{

        setIsBusy(true);
       

        const postsArray = await firebase.getPostedArticles().catch(err =>{
            console.log(err);
            return err;
        });
        
        setIsBusy(false);

        return dispatch({
            type: "FETCH_POSTS",
            payload: postsArray
        });
        

    }

    


    useEffect(() =>{
        getPostedArticles();
    },[]);
  
   
    let content;

    if(isBusy){
        content =(
            <div className="row latestcard">
            <div className=" col-12">
                

                <div className="card__description loading1"></div><br />
                <div className="card__description loading2"></div><br />

    
                <div className="card__description loading1"></div><br />
                <div className="card__description loading2"></div><br />
    

                
                
                
            </div>
            
            </div>
        )

    }else{
        content =(


            <div className="row">
            {state.posts.map((post,i) =>{
                return(
                    <>
                    
                       <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <Link to={"/article/"+post.id} >

                <div class="card card-item snip1527">
                     <div class="image">
                      <img src={post.data.cover} alt="pr-sample23" />
                     </div>
                <figcaption className="no-expand">
                    
                
                <div class="date"><span class="day">{post.data.date.slice(3,5)}<br></br><p>{month[parseInt((post.data.date.slice(0,2)))-1]}</p></span></div>
                    <h4> {post.data.name}</h4>
                    <i class="fas fa-user"> &nbsp;-C.A &nbsp;{post.data.publishedBy}</i>
                         
                </figcaption>

                </div>
                </Link>
             </div>
                       </>

                )
            })}
        </div>




        )
    }








    return (
        
          
          <div class="container">
              <br /><br />
               <div className="row">
                   
                   <div className="col-12">
                    <h3 align="center">Articles</h3>
                
                   </div>
               </div><br />
                    <div style={{marginTop: 50}}>
                         <div>
                           
                            {content} 
                         </div>
                         </div>
                   </div> 
          

        
        

    )
}

