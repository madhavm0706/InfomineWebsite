import React from 'react'
import about from '../images/about.jpg' 
import { Jumbotron } from 'reactstrap'

export default function Aboutus() {
    return (
        <div className="container">
            

            <div className="aboutushead col-12">
            
                   
                   
                   
                
                   </div>
               

            

            <div className="aboutuscontent offset-1 col-10 offset-1" >
             
             <Jumbotron>
             <div className="container">
						<div className="row">
							<div className="col-12 col-md-12 header">
								
								
								<h1 className="tagline">About us</h1>
							</div>
						</div>
					</div>
             <img src={about} className="cover" >
          </img>
                InfoMine is an initiative taken by a group of Indian Chartered Accountants to provide a one stop reading and learning platform to persons from various domains including professionals, business persons, general enthusiastic readers and others. We write articles on various topics viz., Direct and Indirect Taxation, Corporate Laws, Economic Policies, Current Affairs including those relating to International Relations, Polity and Governance, Science and Technology etc. We also provide readers with latest updates, notifications etc., as and when they arrive and an analysis in form of article as soon as possible.
                
                
                We believe that knowledge has wings which know no boundaries and thus, at times, readers may not agree with opinions or analysis provided by us. However, we shall always appreciate reader’s view point and we expect this platform to grow as an interactive one where readers can discuss their queries.
                </Jumbotron>
                
 
                
            </div>
          
        </div>
    )
}
