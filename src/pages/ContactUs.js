import React from 'react';
//import firebase from "../firebase/Firebase";
import * as firebase from 'firebase';
import 'firebase/firestore';

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  

class ContactUs extends React.Component {

  
  
    constructor() {
        super();
        this.state = {
         email: "",
         review: "",
         date: {today}

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
          review: this.state.review,
          date: this.state.date
        });  
        this.setState({
            email: "",
            review: "",
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
          <div>
          <label>
            Date:
          </label>
          <input name="date" value={today} readonly />
          {/* todo: Sanjana "Add present date" */}
          </div>
          
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default ContactUs;