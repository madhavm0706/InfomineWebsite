import React,{useState,useEffect} from 'react';
import firebase from '../firebase/Firebase';
import Articlesidebar from '../components/Articlesidebar'; 
import Coloredline from '../components/Colerdline';
import loading from '../images/loading-arrow.gif';
import { Link } from 'react-router-dom';



export default function Postslider() {

    const [posts,setposts] = useState([]);
    const [isBusy,setIsbusy] = useState(false);
    const [url,setUrl] = useState("");
    const [cover,setCover] = useState("");


    const addimage = async() =>{
        setIsbusy(true);

        let url ={
            cover: cover[0],
        }

        await firebase.imageslider(url).then(()=>{
            alert("Image added on slider, Go to home to see it");
            setIsbusy(false);
        }).catch(err =>{
            console.log(err);
            return err;
        });


    }

    const getdata = async()=>{

        const post = await firebase.getimagesliderdata().catch(err=>{
            console.log(err);
            return err;
        });

        setposts(post);
        


    }

    console.log(posts);

    useEffect(()=>{
          getdata();
    },[])

    let createform;
    if(isBusy){
           createform =(
            <div>
                   <br /><br />

                   
                   <div className="loader">
                   <p align="center">Request is being proceed</p>
                   <img src={loading}></img>
                   </div>
               </div>
           )
    }else {
        createform =(

            <form  >
              
               
                <div className="col-md-6">
                <label htmlFor="url">Upload Image to save on Image Slider</label>
                <input 
                type="file" 
                name="file" 
                placeholder="Upload Image" 
                onChange={(e)=>setCover(e.target.files)}
                required />
                    
                </div> 
                
                
                    <br />
               
                 
                <div className="col-md-4">
                    <input 
                    type="submit" 
                    value="Submit" 
                    onClick={addimage}
                    className="btn btn-primary"></input>
                </div>
            </form>

            
        )
    }




    return(

        <div className="container"><br />

        <h3 align="center">Post On slider</h3><Coloredline color="black" /> <br />



        <div className="form-group">
            

        <div className="row">
            <Articlesidebar />

            <div className="col-md-9 col-sm-12">
            
              {createform}<br /><br />

              <div className="row">
            <div className="col-12">
                <h3>Current Posts on Image Slider</h3>
                <div className="col-md-9 col-sm-12">
            
            <div className="row">
            
            <div className="col-md-2 col-sm-12" >
                <p>S.No</p>
            </div>
            <div className="col-md-4 col-sm-12" >
                <p>Artcle Name</p>
            </div>
            <div className="col-md-2 col-sm-12" >
                <p>images</p>
            </div>
            
            <div className="col-md-2 col-sm-12" >
                <p>D.O.P</p>
            </div>
            <div className="col-md-2 col-sm-12" >
                <p>Delete</p>
            </div>
            
            </div><br></br><br></br>
              
           {posts.map((post,i)=>{
               return (
                   <>
<div className="row">
            
            <div className="col-md-2 col-sm-12" >
                       <p>{i+1}</p>
            </div>
            <div className="col-md-4 col-sm-12" >
                       <p>{post.data.name}</p>
            </div>
            <div className="col-md-2 col-sm-12" >
              <a href={post.data.cover} target="_blank" >       <p>{post.data.fileRef}</p></a>
            </div>
            
            <div className="col-md-2 col-sm-12" >
                       <p>{post.data.date}</p>
            </div>
            <div className="col-md-2 col-sm-12" >
                <Link to={"/postyourarticle/drafts/"+post.id}><p>Delete</p></Link>
            </div>
            
            </div>
            
            
                   </>
               )

           })}
    
            
            </div>
    
            </div>
        </div>

            </div>
            
            
            
            
            </div>

        </div>
        

        <Coloredline color="black" />

        </div>           
    )

}
