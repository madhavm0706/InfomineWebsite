import React,{useState} from 'react';
import loading from '../images/loading-arrow.gif';
import Articlesidebar from '../components/Articlesidebar'; 
import Coloredline from '../components/Colerdline';


import firebase from '../firebase/Firebase';

export default function NewsandUpdate() {

    var today = new Date();
       var dd = String(today.getDate()).padStart(2,'0');
       var mm = String(today.getMonth()+1).padStart(2,'0');
       var yy = String(today.getFullYear());

       today = mm + '/' + dd +'/' + yy;
    const [isBusy,setIsBusy] = useState(false);
    const [newsorupdate,setNews] = useState("");
    const [date,setDate] = useState("");
    const [url,setUrl] = useState("");
    const [route,setRedirect] = useState(false);

    const addnews = async (e) =>{
        e.preventDefault();
        setIsBusy(true);

        let news ={
            url,
            today,
            newsorupdate
        }

        await firebase.newsandupdate(news).then(() =>{
            setIsBusy(true);
            console.log("news created sucessfully");
            alert("Your news or update has been published go to home page to see it.");
            setIsBusy(false);
            setRedirect(true);

        }).catch(err =>{
            console.log(err);
            return err;
        });
        setIsBusy(false);
    }

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
            <div className="col-md-4">
                <label htmlFor="url">URl</label>
                <input 
                type="text" 
                name="url" 
                placeholder="enter url for click here" 
                onChange={(e) =>{setUrl(e.target.value)}}
                required />
                    
                </div>  
                <div className="col-md-4">
                <label htmlFor="email">Date</label>
                <input 
                type="text" 
                name="day" 
                value={today} 
                onChange={(e) =>{setDate(e.target.value)}}
                readOnly />
                    
                </div>
                
                
                    
               
                <div className="col-md-4">
                <label htmlFor="message">News or Update</label>
                <textarea 
                name="message" rows="5" 
                placeholder="Type Your News Or Update"
                onChange={(e) =>{setNews(e.target.value)}}
                 ></textarea>
                    
                </div> 
                <div className="col-md-4">
                    <input 
                    type="submit" 
                    value="Submit" 
                    onClick={addnews}
                    className="btn btn-primary"></input>
                </div>
            </form>
        )
    }
    
    return (
        <div className="container"><br />

        <h3 align="center">News And Updates</h3><Coloredline color="black" /> <br />



        <div className="form-group">
            

        <div className="row">
            <Articlesidebar />

            <div className="col-md-9 col-sm-12">
            {createform}

            </div>
            
            
            
            </div>

        </div>
        <Coloredline color="black" />

        </div> 
            
        
    )
}
