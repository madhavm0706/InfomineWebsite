import React,{useState,useEffect} from 'react';
import firebase from '../firebase/Firebase';

import {Link} from 'react-router-dom';


import {AdminArticles} from '../context/Adminarticles';

export default function Admindata() {
    const {state,dispatch} = React.useContext(AdminArticles);
    const [isBusy,setIsBusy] = useState(false);

    const getPostedArticles = async () =>{
        setIsBusy(true);

        const postsArray = await firebase.getPostedArticlesbyAdmins().catch(err =>{
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
                    
                    <div className="col-md-2 col-sm-12" >
                    <p>{i+1}</p>
                    </div>
                    <div className="col-md-4 col-sm-12" >
                <Link style={{color:"green",}} to={"/postyourarticle/article/article-by-admin/"+post.id}><p>{post.data.name}</p></Link>
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

        )
    }








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
          
          {content}

        
        </div>

    )
}
