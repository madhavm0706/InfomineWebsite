import React,{useState} from 'react';
import firebase from '../firebase/Firebase';
import loading from '../images/loading-arrow.gif';



export default function Subscribe() {
    const [isBusy,setIsBusy] = useState(false);
    const [email,setEmail] = useState("");
    const [emailexists,setEmailexits] = useState("");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2,'0');
    var mm = String(today.getMonth()+1).padStart(2,'0');
    var yy = String(today.getFullYear());

    today = mm + '/' + dd +'/' + yy;
    


    

    

    const emailadder = async ()=>{

        setIsBusy(true);
        

        let emailofsubscriber={
             email,
             today
        }
        

        await firebase.subscriber(emailofsubscriber).then(() =>{
            console.log("subscribed");
            alert("You have subscribed to Infomine");
            setIsBusy(false);
            
        }).catch(err =>{
            console.log(err);
            return err;
        });

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
    }else{
        createForm=(
            <div className="newsBox">
             <div className="newsInfo subscribeBox">
                 <div className="row newsInfoContent">
                     <h5>Subscribe to get latest announcement via E-Mail</h5>
                     <form>
                     <input type="email" placeholder="Enter Your Email-Id" onChange={(e) =>{setEmail(e.target.value)}} required /><br></br><br></br>
                     <input className="btn btn-primary" type="submit" value="SUBSCRIBE" onClick={emailadder} />
                     </form>
             </div>
             </div>
             
         </div>

        )
    }
    return (
        <>
         {createForm}
        
        </>
    )
}
