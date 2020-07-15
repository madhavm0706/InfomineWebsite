

import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';
import {Link} from 'react-router-dom';

import {Articles} from '../context/Articlecontext';
import image from '../images/infomine.jpg'
import Carousel from 'react-bootstrap/Carousel' 

export default function ImageSlider() {

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
  console.log(isBusy);
    let content;
    

    if(isBusy){
        content =(
            <h1>Loading....</h1>
        )

    }else{
        content =(

            <div className="slider" id="slider1">
           <Carousel>
            {state.posts.map((post,i) =>{
                return(
                   
                    
                    <Carousel.Item style={{'height':"500px"}} >
                    <Link to={"/artice"+post.id} >
                      <img style={{opacity:"0.5"}} src={post.data.cover} alt="Glimpse of article" className="sliderimg"/>
                    
                      <Carousel.Caption className="slidercaption">  
                         <p className="slidercaptionname">{post.data.name}</p>  
                         <p className="latestname"><i class="fas fa-user"></i>&nbsp;{post.data.publishedBy} &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>&bnsp;{post.data.date.slice(3,5)}-{month[parseInt((post.data.date.slice(0,2)))-1]}-{post.data.date.slice(6,10)}</span></p>

                         </Carousel.Caption>
                         </Link>
                    </Carousel.Item>
                     
                
                
             
                       

                )
            })}
            </Carousel>
        </div>

        )
    }








    return (
        
          
          <div class="container">
                    
                         
                           
                             
                         {content}
                         
                         
                   </div> 
          

        
        

    )
}



