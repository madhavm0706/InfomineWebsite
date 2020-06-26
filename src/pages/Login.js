import React, {useState} from 'react';
import Coloredline from '../components/Colerdline';

import { Redirect} from "react-router-dom";
import firebase from "../firebase/Firebase";
import { Auth } from "../context/authContext";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [routeRedirect, setRouteRedirect] = useState(false);
    const [isBusy,setIsBusy] = useState(false);

    const {state, dispatch} = React.useContext(Auth);
    const [error,setError] = useState("");

    const login = async(e) => {
        e.preventDefault();
        let response = await firebase.login(email, password);
        
       
        if(response.hasOwnProperty("message")){
            setError(response.message);
            
        }else{
            //console.log(response.user);
            
            setRouteRedirect(true);
            
            return dispatch({
                type: "LOGIN",
                payload: response.user
            });
           
        }
       
    }
    
    let data;
    if(isBusy){
        data =(
            <p>Loading</p>
        )
    }else{
        data=(
            <div className="container">
            
                
                
            
            <form onSubmit={login}>
            <div className="form-group">
                <br></br>
            <h3 align="center">Login To Post Your Article</h3><Coloredline color="black" /> <br />
            
                <div className="row">
                <div className="offset-md-4 col-md-4">
                     <p className="error">{error}</p>
                    </div>

                </div>
                <div className="row">



                    <div className="offset-md-4 col-md-4">
                        <label>Username:-</label>
                        <input type="email" name="articlename" placeholder="Enter Username"  onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <label>Password:-</label>
                        <input type="password" name="password" placeholder="Enter Your Password " onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                </div>
            </div>
            <div className="row">
                    <div class="offset-md-4 col-md-4 ">
                    <input type="submit" value="Login" className="btn btn-primary" />
                    </div>&nbsp;
                
                    </div>

            </form>
            
                    

                
            <Coloredline color="black" />
           
        </div>


        )
    }



    

    const redirect = routeRedirect;
    if(redirect){
        
        return <Redirect to="/postyourarticle/article" />  
    }
    return (
        <>
          {data}
        </>
    )
}