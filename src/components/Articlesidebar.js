import React,{useEffect,useState} from 'react';
import Coloredline from '../components/Colerdline';
import {Link, Redirect} from 'react-router-dom';
import img from '../images/infomine.jpg';
import firebase from '../firebase/Firebase';

import {Auth} from '../context/authContext';

export default function Articlesidebar(props) {
    const [isBusy,setIsBusy] = useState(false);
    const [redirect, setRedirect] = useState(false);

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
        setRedirect(true);

        
        
        return dispatch({
            type: "LOGOUT",
            payload: {}
        });
    }

    let content;

    if(redirect){
        return <Redirect to="/postyourarticle/login" />

    }




    
    return (
        <div className="col-md-3 col-12">
            {content}
                <ul className=" infoBox">
                    <img src={img} className="infoBoximg" /><br></br><br></br>
                    <Link to="/postyourarticle/article" ><p>Post Your Articles</p></Link>

                    <Link to="/postyourarticle/posted-articles" ><p>Posted Articles</p></Link>
                    <Link to="/postyourarticle/drafts"><p>Article on Drafts</p></Link>
                    <Link to="/postyourarticle/article-by-other-admin"> <p>Articles By other Admin</p></Link>
                    <Link to="/postyourarticle/news-and-update"> <p>News & Updates</p></Link>
                    <Link to="/postyourarticle/query"> <p>Query</p></Link>
                    <Link to="/postyourarticle/subscriber"> <p>Subscriber</p></Link>



                    <Link onClick={logout}><p>Sign Out</p></Link>

                    <li></li>
                </ul>
            </div>
    )
}
