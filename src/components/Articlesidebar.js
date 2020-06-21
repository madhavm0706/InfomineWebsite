import React from 'react';
import Coloredline from '../components/Colerdline';
import {Link} from 'react-router-dom';
import img from '../images/infomine.jpg';

export default function Articlesidebar() {
    return (
        <div className="col-md-3 col-sm-12">
                <ul className=" infoBox">
                    <img src={img} className="infoBoximg" /><br></br><br></br>
                    <Link to="/postyourarticle/article" ><p>Post Your Articles</p></Link>

                    <Link to="/postyourarticle/posted-articles" ><p>Posted Articles</p></Link>
                    <Link to="/postyourarticle/drafts"><p>Article on Drafts</p></Link>
                    <Link to="/postyourarticle/article-by-other-admin"> <p>Articles By other Admin</p></Link>
                    <p>Sign Out</p>

                    <li></li>
                </ul>
            </div>
    )
}
