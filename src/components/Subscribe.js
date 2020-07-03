import React,{useState} from 'react';
import firebase from '../firebase/Firebase';


export default function Subscribe() {
    const [isBusy,setIsBusy] = useState(false);
    const [email,setEmail] = useState("");
    const [emailexists,setEmailexits] = useState("");

    

    

    const emailadder = async ()=>{

        let emailofsubscriber={
            emailid: email,
        }
        

        await firebase.subscriber(emailofsubscriber).then(() =>{
            console.log("subscribed");
            alert("You have subscribed to Infomine");
            setEmail("");
        }).catch(err =>{
            console.log(err);
            return err;
        });

    }
    return (
        <>
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
        
        </>
    )
}
