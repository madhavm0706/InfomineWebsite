import React from 'react';
import Articlesidebar from '../components/Articlesidebar';
import Coloredline from '../components/Colerdline';
import Posteddata from '../components/Posteddata';


export default function Postedarticle() {
    return (
        <div className="container">
        <div className="form-group">
            <br></br>
        <h3 align="center">Your Posted Article</h3><Coloredline color="black" /> <br />

        <div className="row">
            <Articlesidebar />
            <Posteddata />
            
            </div>

       </div>
        <Coloredline color="black" />
       
    </div>
    )
}
