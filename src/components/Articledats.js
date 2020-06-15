import React from 'react';
import {Link} from 'react-router-dom';



export default function Articledats({articleinfo}) {

    const {name,publishedBy, date,month,slug,description,image} = articleinfo;
    return (
        <> 
        
             <div class="col-md-3 col-sm-6 col-xs-6">
                <Link to={`/single-article-page/${slug}`} >
                <div class="card card-item snip1527">
                     <div class="image">
                      <img src={image} alt="pr-sample23" />
                     </div>
                <figcaption>
                   <div class="date"><span class="day">{date}<br></br><p>{month}</p></span></div>
                    <h4>{name}</h4>
                    <i class="fas fa-user"> &nbsp;{publishedBy}</i>         
                </figcaption>

                </div>
                </Link>
             </div>
             
    </>
    )
}
