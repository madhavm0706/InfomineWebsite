import React from 'react';
//import firebase from "../firebase/Firebase";
import * as firebase from 'firebase';
import 'firebase/firestore';
import loading from '../images/loading-arrow.gif';
import contact from '../images/contact-us.jpg';
import { Card, Button, CardTitle, CardText, Row, Col, Jumbotron } from 'reactstrap';


class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = {
         email: "",
         message: "",
         name: "",
         number: "",
         
        };
      }

      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      
      addUser = e => {
        e.preventDefault();
        
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("contactFormDetails").add({
          email: this.state.email,
          message: this.state.message,
          name: this.state.name,
          number: this.state.number
          
        });  
        this.setState({
          email: "",
          message: "",
          name: "",
          number: "",
          
          
        });
      };


  render() {
       

    return (
        <div className="container">

          
          <img src={contact} className="cover" >
          </img>
          <Row >
      <Col sm="12">
        <Card body>
          <CardTitle><h3>How to reach us?</h3></CardTitle>
          <CardText>
          <p>You may write queries, relating to articles published, 
                on any of our social media platforms viz., Facebook, Twitter, Instagram or 
                LinkedIn,links of these accounts are readily available on our Home page. 
                You can directly mail your queries at <a style={{color:"red"}} href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@infomine.co.in" target="_blank">contact@infomine.co.in</a></p>

          </CardText>
          
        </Card>
      </Col>
      <Col sm="12">
        <br></br>
        <Card body>
          <CardTitle><h3>Discussions and Details</h3></CardTitle>
          <CardText><p>You may suggest us topics to write on. Such topics shall be 
                  relating to subjects referred to in “About us” section on Home page.
                  Topic suggestions will be entertained only if received on mail and no revert 
                  shall be made for social media suggestions.
                   Social media is open only for queries and discussions.</p>  </CardText>
         
        </Card>
      </Col>
    </Row>
            
            
              
              

              <br></br>
              
              

              <Jumbotron>
                <div className="row">
                  <div className ="col-md-12 col-lg-12">
                  
              
              <h3><u>You may reach us by filling the following information!</u></h3>
             
                  </div>
                </div>
                

                
               <form onSubmit={this.addUser}>
                <div className="col-md-12">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="enter your name" 
                    onChange={this.updateInput}
                    value={this.state.name}
                    required />
                        
                    </div>  
                    <div className="col-md-12">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="enter E-mail id" 
                    onChange={this.updateInput}
                    value={this.state.email}
                    required />
                        
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="number">Contact Number</label>
                    <input 
                    type="text" 
                    name="number" 
                    placeholder="enter your contact number" 
                    onChange={this.updateInput}
                    value={this.state.number}
                     />
                    
                        
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    name="message" rows="5" 
                    placeholder="Type Your Message"
                    onChange={this.updateInput}
                    value={this.state.message}
                     ></textarea>
                        
                    </div> 
                    <div className="col-md-12">
                        <input 
                        type="submit" 
                        value="Submit" 
                        className="btn btn-primary"></input>
                    </div>
                </form>   
                
                </Jumbotron> 
                
            
        </div>
    )
}
        // <form onSubmit={this.addUser}>
          
        //   <input
        //     type="email"
        //     name="email"
        //     placeholder="abc@gmail.com"
        //     onChange={this.updateInput}
        //     value={this.state.email}
        //   />
        //   <input
        //     type="text"
        //     name="review"
        //     placeholder="review"
        //     onChange={this.updateInput}
        //     value={this.state.review}
        //   />
        //   <button type="submit">Submit</button>
        // </form>
        // );
      // }
}

export default ContactUs;
