import React,{useEffect,useState} from 'react';
import Coloredline from '../components/Colerdline';
import {Link} from 'react-router-dom';
import img from '../images/infomine.jpg';
import firebase from '../firebase/Firebase';

import {Auth} from '../context/authContext';

export default function Articlesidebar(props) {

    const [userState,setUserState] = useState(null);
    const [userEmail, setUserEmail] = useState("");

    const {state, dispatch} = React.useContext(Auth);

    useEffect(() => {
        firebase.getUserState().then(user => {
            if(user){
                setUserState(user);
                setUserEmail(user.email);
            }
        });
    });

    const logout = () => {
        firebase.logout();
        setUserState(null);
        setUserEmail("");
        
        return dispatch({
            type: "LOGOUT",
            payload: {}
        });
    }




    console.log(userState);
    console.log(userEmail);
    return (
        <div className="col-md-3 col-sm-12">
                <ul className=" infoBox">
                    <img src={img} className="infoBoximg" /><br></br><br></br>
                    <Link to="/postyourarticle/article" ><p>Post Your Articles</p></Link>

                    <Link to="/postyourarticle/posted-articles" ><p>Posted Articles</p></Link>
                    <Link to="/postyourarticle/drafts"><p>Article on Drafts</p></Link>
                    <Link to="/postyourarticle/article-by-other-admin"> <p>Articles By other Admin</p></Link>
                    <p onClick={logout}>Sign Out</p>

                    <li></li>
                </ul>
            </div>
    )
}
