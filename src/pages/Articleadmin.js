import React from 'react';
import Articlesidebar from '../components/Articlesidebar';
import Coloredline from '../components/Colerdline';
import Admindata from '../components/Admindata';


export default function Articleadmin() {
    return (
        <div className="container">
        <div className="form-group">
            <br></br>
        <h3 align="center">Article By Admins</h3><Coloredline color="black" /> <br />

        <div className="row">
            <Articlesidebar />
            <Admindata />
            
            </div>

       </div>
        <Coloredline color="black" />
       
    </div>
    )
}
