import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';
import {Link} from 'react-router-dom';

import {Articles} from '../context/Articlecontext';
import image from '../images/infomine.jpg'

export default function Posteddata() {

    const {state,dispatch} = React.useContext(Articles);
    const [isBusy,setIsBusy] = useState(false);


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
  console.log(isBusy);
    let content;
    

    if(isBusy){
        content =(
            <div className="row latestcard">
            <div className=" col-12">
                
                <div className="card__description loading3"></div><br />
                <div className="card__description loading2"></div><br />
    
    
                
                
                
            </div>
            
            </div>
        )

    }else{
        content =(

            <div className="row styling">
            {state.posts.map((post,i) =>{
                return(
                    <>
                    
                       <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <Link to={"/postyourarticle/article/"+post.id} >
                <div class="card card-item snip1527">
                     <div class="image">
                      <img src={post.data.cover} alt="pr-sample23" />
                     </div>
                <figcaption className="no-expand">
                    
                    <div class="date"><span class="day">{post.data.date}<br></br><p>{post.data.month}</p></span></div>
                    <h4>{post.data.name}</h4>
                    <i class="fas fa-user"> &nbsp;{post.data.publishedBy}</i>
                         
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
                    <div style={{marginTop: 100}}>
                         <div class="row">
                           
                             
                         {content}
                         </div>
                         </div>
                   </div> 
          

        
        

    )
}

