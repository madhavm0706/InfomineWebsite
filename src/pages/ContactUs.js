import React from 'react';
//import firebase from "../firebase/Firebase";
import * as firebase from 'firebase';
import 'firebase/firestore';

class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = {
         email: "",
         review: ""
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
          review: this.state.review
        });  
        this.setState({
            email: "",
            review: ""
        });
      };
  render() {
    return (
        <form onSubmit={this.addUser}>
          
          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            onChange={this.updateInput}
            value={this.state.email}
          />
          <input
            type="text"
            name="review"
            placeholder="review"
            onChange={this.updateInput}
            value={this.state.review}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default ContactUs;