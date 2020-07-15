// import React from 'react';  
// import Carousel from 'react-bootstrap/Carousel' 

// export default function ImageSlider() {
//     return (
     


// <div className="slider" id="slider1">
//     <Carousel>
//         <Carousel.Item style={{'height':"500px"}} >  
//             <img alt="Slider" className="sliderimg"  
              
//                 src={"https://firebasestorage.googleapis.com/v0/b/infomine-basic.appspot.com/o/1594740129127..jpg?alt=media&token=83944015-8f74-43a5-b5b8-b12d5f001a7c"}  />  
//             <Carousel.Caption>  
//                 <h3>1</h3>  
//             </Carousel.Caption>  
//         </Carousel.Item  >
        
//         <Carousel.Item style={{'height':"500px"}} >  
//             <img alt="Slider" className="sliderimg"  
                
//                 src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/jungle.jpg"}  />  
//             <Carousel.Caption>  
//                 <h3>2</h3>  
//             </Carousel.Caption>  
//         </Carousel.Item  >

//         <Carousel.Item style={{'height':"500px"}} >  
//             <img alt="Slider"   className="sliderimg"
                  
//                 src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_bodie-11.jpg"}  />  
//             <Carousel.Caption>  
//                 <h3>3</h3>  
//             </Carousel.Caption>  
//         </Carousel.Item  >

//         <Carousel.Item style={{'height':"500px"}} >  
//             <img alt="Slider"  className="sliderimg"
                 
//                 src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_bodie-11.jpg"}  />  
//             <Carousel.Caption>  
//                 <h3>4</h3>  
//             </Carousel.Caption>  
//         </Carousel.Item  >
//         <Carousel.Item style={{'height':"500px"}} >  
//             <img alt="Slider"  className="sliderimg"
                  
//                 src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_bodie-11.jpg"}  />  
//             <Carousel.Caption>  
//                 <h3>5</h3>  
//             </Carousel.Caption>  
//         </Carousel.Item  >

//     </Carousel>
   
// </div>





  
//     )
// }

import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';
import {Link} from 'react-router-dom';

import {Articles} from '../context/Articlecontext';
import image from '../images/infomine.jpg'
import Carousel from 'react-bootstrap/Carousel' 

export default function ImageSlider() {

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
            <h1>Loading....</h1>
        )

    }else{
        content =(

            <div className="slider" id="slider1">
           <Carousel>
            {state.posts.map((post,i) =>{
                return(
                   
                    
                    <Carousel.Item style={{'height':"500px"}} >
                    
                      <img src={post.data.cover} alt="Glimpse of article" className="sliderimg"/>
                    
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



