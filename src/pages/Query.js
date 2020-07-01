import React,{useState,useEffect} from 'react';
import firebase from '../firebase/Firebase';

export default function Query() {

    

    const [postquery,setPost] = useState([]);
    const [isBusy,setIsbusy] =useState(false);

    const getQuery= async () =>{
        setIsbusy(true);
        const post = await firebase.Query().catch(err =>{
            console.log(err);
            return err;
        });
        
        
         setPost(post);
         setIsbusy(false);
        return post;

    }

    useEffect(() =>{
        getQuery();
    },[]);
  
    console.log(postquery);
    console.log(isBusy);

   









    let querydata;
    if(isBusy){
       querydata= (
            <div>fetching data</div>
        )
    }else{
        querydata=(<div>

<table className="query" style={{width:"100"}}>
  <tr>
    <th>S.No</th>
    <th>Name</th> 
    <th>Email-id</th>
    <th>Query</th>
    </tr>

    {postquery.map((item,i) =>{
                return (
                    <tr>
                        <td>{i+1}  </td>
                      <td>{item.data.name}</td>
                      <td><a style={{color:"red"}} href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+item.data.email} target="_blank">{item.data.email}</a></td>
                      <td>{item.data.message}</td>
                        
                        
                        
                        </tr>
                )
            })}
  
</table>
            
            </div>

        )
    }


    return(
        <div className="container">
            <h3 style={{textAlign:"center"}}>Query Data</h3><br /><br />
            <div className="row">
            <div className="col-4">
              <button className="btn btn-primary" >Query</button>
            </div>
            <div className="col-4">
            <button className="btn btn-primary" >Subscribed</button>
            </div>
            </div><br />
            {querydata}
        </div>
    )


    
    
    
}
