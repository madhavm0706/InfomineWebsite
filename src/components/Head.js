import React from "react";
import {Link} from 'react-router-dom';

const Head = () =>{
    return(
        <div className="container-fluid">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-12 header">
								
								<h1 className="logo"><Link to="/">InfoMine</Link></h1>
								<p className="tagline">Your Learning Destination</p>
							</div>
						</div>
					</div>
				</div>
    )
}

export default Head;