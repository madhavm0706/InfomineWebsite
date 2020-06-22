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
       const [date, setDate] = useState("");
       const [month,setMonth] = useState("");
       const [publishedBy, setPublishedBy] = useState("");
       const [slug,setSlug] = useState("");
       const [discription, setdiscription] = useState("");
       const [cover, setCover] = useState("");

       const [isBusy, setIsBusy] = useState(false);
       const [routeRedirect, setRouteRedirect] = useState(false);


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

       
           
       

       const addArticle = async (e) =>{
           e.preventDefault();
           setIsBusy(true);

           let article = {
               name,
               date,
               month,
               publishedBy,
               slug,
               discription,
               cover: cover[0]
           }

           await firebase.createPost(article).then(()=>{
               console.log("post created sucessfully");
               alert("Your Article has been Posted");
               setIsBusy(false);
            setRouteRedirect(true);
           }).catch(err =>{
            console.log(err);
            setIsBusy(false);
        })

       }

       const addArticledraft = async (e) =>{
        e.preventDefault();
        setIsBusy(true);

        let article = {
            name,
            date,
            month,
            publishedBy,
            slug,
            discription,
            cover: cover[0]
        }

        await firebase.createPostatDraft(article).then(()=>{
            console.log("post created sucessfully");
            alert("Your Article has been saved on draft");
            setIsBusy(false);
         setRouteRedirect(true);
        }).catch(err =>{
         console.log(err);
         setIsBusy(false);
     })

    }


    if(routeRedirect){
        return <Redirect to="/postyourarticle/article" />
    }


       let createForm;
       if(isBusy){
           createForm = (
               <div>
                   <p>Request is being proceed</p>
                   <img style={{width:"5",height:"5"}}  src={loading}></img>
               </div>
           )
       }else {
           createForm =(
            <form className="form-group" >
               

            <div className="row">
                <div className="col-12">
                    <h3>Fill up the form to Post Your Article</h3>
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
                <div className="col-4">
                    <label> Date:-</label>
                    <input type="number" name="date" placeholder="Eg:-03" onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="col-4">
                    <label>Month:-</label>
                    <input type="text" name="month" placeholder="Eg:- Jun/Jul/Dec" onChange={(e) => setMonth(e.target.value)} required />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <label>Slug:-</label>
                    <input type="text" name="slug" placeholder="Eg:- /atriclename/By:-PublishedBy" onChange={(e) => setSlug(e.target.value)} required />
                </div>
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
                <input type="submit" value="Post Your Article" className="btn btn-primary" onClick={addArticle} />
                </div>&nbsp;
                <div class="col-md-3 col-sm-12">
                <input type="submit" value="Save On Draft" className="btn btn-primary" onClick={addArticledraft}/>
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
                    
                    {createForm}
                    
                    </div>

                </div>
                <Coloredline color="black" />

                </div>           
    )
}