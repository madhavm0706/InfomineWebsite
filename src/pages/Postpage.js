import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';
import {Route,Redirect} from 'react-router-dom';
import {confirmAlert} from 'react-confirm-alert';
import loading from '../images/loading-arrow.gif';
import Articlesidebar from '../components/Articlesidebar'; 

import Coloredline from '../components/Colerdline';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function Postpage() {

       const [name, setName] = useState("");
       const [publishedBy, setPublishedBy] = useState("");
       const [discription, setdiscription] = useState("");
       const [cover, setCover] = useState("");
       const [user, setUser] = useState("");

       const [isBusy, setIsBusy] = useState(false);
       const [routeRedirect, setRouteRedirect] = useState(false);
       const [routeRedirectD, setRouteRedirectD] = useState(false);


       var today = new Date();
       var dd = String(today.getDate()).padStart(2,'0');
       var mm = String(today.getMonth()+1).padStart(2,'0');
       var yy = String(today.getFullYear());

       today = mm + '/' + dd +'/' + yy;
       


       const handleCkeditorState=(event,editor)=>{
           const data = editor.getData();
           setdiscription(data);

           console.log(data)
       }

    //    const confirmalert = () => {
    //     const answer = window.confirm('Do you want to post??');

    //     if(answer){


            
    //     }else{
    //        return <Redirect to="/postyourarticle/article" />
    //     }


    //    }

    useEffect(() => {
        firebase.getUserState().then(user => {
            if(user){
                
                console.log(user.email);
                setUser(user.email);
            }
        });
    });
           
       

       const addArticle = async () =>{
          
           setIsBusy(true);

           let article = {
               name,
               
               publishedBy,
               today,
               discription,
               cover: cover[0]
           }

           await firebase.createPost(article).then(()=>{
               console.log("post created sucessfully");
               alert("Your Article has been posted sucessfully");
               
               setIsBusy(false);
            setRouteRedirect(true);
           }).catch(err =>{
            console.log(err);
            setIsBusy(false);
        })

       }

       const confirmmessage = () =>{

        
       var r = window.confirm("Do You want to Post the Article");
           if (r == true) {

            addArticle();

            
               
             } else  {
                return <Redirect to="/postyourarticle/article" />
                 }
             

       }
       const confirmmessage1 = () =>{

        
        var r = window.confirm("Do You want to Save the Article at Draft  ");
            if (r == true) {
 
             addArticledraft();
 
             
                
              } else {

                return <Redirect to="/postyourarticle/article" />

                  }
              
 
        }
       

       const addArticledraft = async () =>{
       
        setIsBusy(true);

        let article = {
            name,
            
            publishedBy,
            today,
            discription,
            cover: cover[0],
            user,
        }

        await firebase.createPostatDraft(article).then(()=>{
            console.log("post saved at draft");
            alert("Your Article has been saved on draft");
            setIsBusy(false);
         setRouteRedirectD(true);
        }).catch(err =>{
         console.log(err);
         setIsBusy(false);
     })

    }


    if(routeRedirect){
        return <Redirect to="/postyourarticle/posted-articles" />
    }
    if(routeRedirectD){
        return <Redirect to="/postyourarticle/drafts" />
    }


       let createForm;
       if(isBusy){
           createForm = (
               <div>
                   <br /><br />

                   
                   <div className="loader">
                   <p align="center">Request is being proceed</p>
                   <img src={loading}></img>
                   </div>
               </div>
           )
       }else {
           createForm =(
            <form className="form-group"  >
               <div className="row">
                   
                   <div className="position col-12">
                    <h4>Fill up the form to Post Your Article</h4>
                
                   </div>
               </div><br /><br />

            <div className="row">
                
                <div className="col-6">
                    <label>Email:-</label>
                    <input type="email" name="email"  value = {user} readonly />
                </div>
                <div className="col-6">
                    <label>Date:-</label>
                    <input type="text" name="todaydate"  value = {today} readonly />
                </div>
                <div className="col-12">
                    <label>Article Name:-</label>
                    <input type="text" name="articlename" placeholder="Enter Article Name" onChange={(e) => setName(e.target.value)} required />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label>Published By:-</label>
                    <input type="text" name="publishedBy" placeholder="Publisher Name" onChange={(e) => setPublishedBy(e.target.value)} required />
                </div>
                
            </div>
            <div className="row">
                
                </div>
                <div className="row">
                <div className="col-12">
                    <label>Upload Image:-</label>
                    <input type="file" name="image" placeholder="upload your Image" onChange={(e) => setCover(e.target.files)} required />
                </div>
                </div>
            

            <div className="form-group">

            <CKEditor
                editor={ ClassicEditor }
                
                onInit={ editor => {
                    
                } }

                onChange={handleCkeditorState}
                
            />  

            </div>

            <div className="row">
                <div class="col-md-3 col-sm-12">
                <input type="submit" value="Post Your Article" className="btn btn-primary" onClick={confirmmessage} />
                </div>&nbsp;
                <div class="col-md-3 col-sm-12">
                <input type="submit" value="Save On Draft" className="btn btn-primary" onClick={confirmmessage1}/>
                </div>

            </div>
        </form>

           )
       }











    return (
        // <div className="container">
        //     <br></br>
        //      {createForm}
        //     <p>**For preview or share with admins first save your article on Drafts by click 'Save On Draft' Button</p>

        //    <Coloredline color="black" width="400" />


                           
        //             </div>

                <div className="container"><br />

                <h3 align="center">Post Your Article</h3><Coloredline color="black" /> <br />



                <div className="form-group">
                    

                <div className="row">
                    <Articlesidebar />

                    <div className="col-md-9 col-sm-12">
                    {createForm}

                    </div>
                    
                    
                    
                    </div>

                </div>
                <Coloredline color="black" />

                </div>           
    )
}
