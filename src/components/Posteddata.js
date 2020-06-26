import React,{useEffect} from 'react';
import firebase from '../firebase/Firebase';
import {Link} from 'react-router-dom';

import {Articles} from '../context/Articlecontext';

export default function Posteddata() {

    const {state,dispatch} = React.useContext(Articles);

    const getPostedArticles = async () =>{

        const postsArray = await firebase.getPostedArticles().catch(err =>{
            console.log(err);
            return err;
        });

        return dispatch({
            type: "FETCH_POSTS",
            payload: postsArray
        })

    }


    useEffect(() =>{
        getPostedArticles();
    })








    return (
        <div className="col-md-9 col-sm-12">
        <div className="row">
        <div className="col-md-2 col-sm-12" >
            <p>S.No</p>
        </div>
        <div className="col-md-4 col-sm-12" >
            <p>Artcle Name</p>
        </div>
        <div className="col-md-3 col-sm-12" >
            <p>Writer</p>
        </div>
        
        <div className="col-md-3 col-sm-12" >
            <p>D.O.P</p>
        </div>
        </div><br></br><br></br>
          
          <div className="row styling">
            {state.posts.map((post,i) =>{
                return(
                    <>
                    <div className="col-md-2 col-sm-12" >
                    <p>{i+1}</p>
                    </div>
                    <div className="col-md-4 col-sm-12" >
                <Link to={"/postyourarticle/article/"+post.id}><p>{post.data.name}</p></Link>
                    </div>
                    <div className="col-md-3 col-sm-12" >
                <p>{post.data.publishedBy}</p>
                    </div>
                      <div className="col-md-3 col-sm-12" >
                <p>{post.data.date} </p>
                       </div>
                       </>

                )
            })}
        </div>

        
        </div>

    )
}
