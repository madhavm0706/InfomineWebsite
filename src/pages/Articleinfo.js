import React from 'react';
import Articlesidebar from '../components/Articlesidebar';
import Coloredline from '../components/Colerdline';
import Draftdata from '../components/Draftdata';


export default function Articleinfo() {
    return (
        <div className="container">
        <div className="form-group">
            <br></br>
        <h3 align="center">Your Drafts</h3><Coloredline color="black" /> <br />

        <div className="row">
            <Articlesidebar />
            <Draftdata />
            </div>

       </div>
        <Coloredline color="black" />
       
    </div>
    )
}
