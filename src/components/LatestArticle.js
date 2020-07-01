import React,{useState,useEffect} from 'react';
import img from '../images/infomine.jpg';
import NewsAndUpdate from '../pages/NewsAndUpdate';
import Subscribe from '../components/Subscribe';

import firebase from '../firebase/Firebase';
import {Articles} from '../context/Articlecontext';

export default function LatestArticle() {

const [isBusy,setIsBusy] = useState(false);
const {state,dispatch} = React.useContext(Articles);

const array=[1,2,3];


const getLatestArticle = async () =>{
    setIsBusy(true);
    const post = await firebase.getPostedArticles().catch(err =>{
        console.log(err);
        return err;
    });
    setIsBusy(false);

    return dispatch({
        type: "FETCH_POSTS",
        payload: post,
    })
}


useEffect(() =>{
    getLatestArticle()
},[]);



let content;
if(isBusy){
    content =(
        <>

        {array.map(item =>{
            return (

                <div className="row latestcard">
                                    <div className=" col-12">
                                        
                                        <div className="card__description loading3"></div><br />
                                        <div className="card__description loading2"></div><br />

  
                                        
                                        
                                        
                                    </div>
                                    
                                    </div>

            )
        })}
        

        

        </>

    )
}else{

    content =(
        <div className="col-12">

                              
                              {state.posts.map(post =>{
                                  return (
                                    <div className="row latestcard">
                                    <div className=" col-4">
                                        <div className="latestcardimg">
                                        <img src={img} ></img>
  
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="col-8">
                                  <p>{post.data.name}</p>
                                  <p className="latestname"><i class="fas fa-user"></i>{post.data.publishedBy} &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>{post.data.date}</span></p>
                                      </div>
                                    </div>
                                  )
                              })}

                                  
                            </div>
    )

}






    return (
        <>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                  <div className="col-12">
                      
                      <h4 className="newsTitle"><span>News & Updates</span></h4>

                          
                      </div>
                      <NewsAndUpdate />

                      <div className="col-12">
                      
                      <h4 className="newsTitle"><span>Do Subscribe </span></h4>

                          
                      </div>
                      <Subscribe />
                      
                      
                  </div>
                  <div className="col-md-6">
                      
                      <div className="col-12">
                      <h4 className="newsTitle"><span>Latest Article</span></h4>

                          
                      </div>
                      <div className="col-12">
                          <div className="latestArticle">
                              
                              {content}
                              

                          </div>
                      </div>
                      <div className="col-12">
                      <p className="morearticle">Show More Articles....</p>

                          
                      </div>



                  </div>


                   <div className="col-md-6">

                   </div>




              </div>
          </div>
        </>
    )
}
