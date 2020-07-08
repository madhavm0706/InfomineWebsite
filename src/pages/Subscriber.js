import React,{useState,useEffect} from 'react';
import firebase from '../firebase/Firebase';
import Articlesidebar from '../components/Articlesidebar'; 
import Coloredline from '../components/Colerdline';



export default function Subscriber() {

    const [emailid,setEmailid] = useState([]);
    const [isBusy,setIsbusy] = useState(false);


    const subscriber = async()=>{
        setIsbusy(true);
        const email = await firebase.getSubscrier().catch(err =>{
            console.log(err);
            return err;
        });
        setEmailid(email);
        setIsbusy(false);
        

        
    }

    useEffect(()=>{
        subscriber();
    },[])

    let querydata;
    if(isBusy){
       querydata= (
        <div className="row latestcard">
        <div className=" col-12">
            
            <div className="card__description loading3"></div><br />
            <div className="card__description loading2"></div><br />


            
            
            
        </div>
        
        </div>
)
    }else{
        querydata=(<div>

<table className="query" style={{width:"100"}}>
  <tr>
    <th style={{alignItems:"center"}}>S.No</th>
     
    <th>Email-id</th>
    <th>Date on subscribed</th>
    </tr>

    {emailid.map((item,i) =>{
                return (
                    <tr>
                        <td>{i+1}  </td>
                      
                      <td><a style={{color:"red"}} href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+item.data.emailIdOfUser} target="_blank">{item.data.emailIdOfUser}</a></td>
                      <td style={{height:"auto"}}>{item.data.date}</td>
                        
                        
                        
                        </tr>
                )
            })}
  
</table>
            
            </div>

        )
    }


    


    return(

        <div className="container"><br />

        <h3 align="center">Subscriber</h3><Coloredline color="black" /> <br />



        <div className="form-group">
            

        <div className="row">
            <Articlesidebar />

            <div className="col-md-9 col-sm-12">
            {querydata}

            </div>
            
            
            
            </div>

        </div>
        <Coloredline color="black" />

        </div>           
    )

}
