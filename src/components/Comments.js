import React, {Component} from "react";
import firebase from "../firebase/Firebase"

class Comments extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:"",
            comments: []
        }

        
    }
    

    handleText = e =>{
        this.setState({
            text: e.target.value
        })
    }
    
    handleSubmit = e =>{
        // let messageRef = firebase.database.ref('messages').orderByKey().limitToLast(25);
        firebase.database.ref('messages').push(this.state.text);
        this.setState({
            text : ""
        })
    }
    
    componentDidMount() {
        const commentRef = firebase.database.ref('messages');
        commentRef.on('value', (snapshot) => {
            let comments = snapshot.val();
            let newState = [];
            for(let comment in comments){
                newState.push({
                    comment: comment.val
                });
            }
            this.setState({
                comments: newState
            });
        });
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handleText} id="inputText" />
                <button onClick={this.handleSubmit}>Post</button>
                    <h1>Comments</h1>
                    {this.state.comments.map((comment) => {
                        return(
                            <h3>check</h3>
                        )
                    })}
                
            </div>
        )
    }
}
        



    

export default Comments;

// place this component in a file 