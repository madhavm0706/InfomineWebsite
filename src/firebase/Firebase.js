import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


// var firebaseConfig = {
//     apiKey: "AIzaSyAs0qlAayTqp7_eGVcZ2dsOml37GeMygb4",
//     authDomain: "infomine-364d1.firebaseapp.com",
//     databaseURL: "https://infomine-364d1.firebaseio.com",
//     projectId: "infomine-364d1",
//     storageBucket: "infomine-364d1.appspot.com",
//     messagingSenderId: "953430068820",
//     appId: "1:953430068820:web:ec2a991918c5a45aa867c1",
//     measurementId: "G-V0BBGJP2MV"
//   };

var firebaseConfig = {
    apiKey: "AIzaSyCmbGzoqb95PSr0DQ8uL6mjHJ835Xf0MjU",
    authDomain: "infomine-basic.firebaseapp.com",
    databaseURL: "https://infomine-basic.firebaseio.com",
    projectId: "infomine-basic",
    storageBucket: "infomine-basic.appspot.com",
    messagingSenderId: "449759910377",
    appId: "1:449759910377:web:b55fd5334f8f3513539378"
  };


  class Firebase{
      constructor(){
          firebase.initializeApp(firebaseConfig);
          this.auth = firebase.auth();
          this.db = firebase.firestore();
          this.storage = firebase.storage();
      }

      async createPost(post){
          const storageRef = firebase.storage().ref();
          const storageChild = storageRef.child(post.cover.name);
          const postcover = await storageChild.put(post.cover);
          const downloadurl = await storageChild.getDownloadURL();
          const fileRef = postcover.ref.location.path;



          let newPost ={
            name: post.name,
            date: post.date,
            month: post.month,
            publishedBy: post.publishedBy,
            slug: post.slug,
            discription: post.discription,
            cover: downloadurl,
            fileRef: fileRef
          }

          const firestorePost = await firebase.firestore().collection("articles").add(newPost).catch(err =>{
              console.log(err);
              return err;
          });

          return firestorePost;
      }

      async createPostatDraft(post){
        const storageRef = firebase.storage().ref();
        const storageChild = storageRef.child(post.cover.name);
        const postcover = await storageChild.put(post.cover);
        const downloadurl = await storageChild.getDownloadURL();
        const fileRef = postcover.ref.location.path;



        let newPost ={
          name: post.name,
          date: post.date,
          month: post.month,
          publishedBy: post.publishedBy,
          slug: post.slug,
          discription: post.discription,
          cover: downloadurl,
          fileRef: fileRef
        }

        const firestorePost = await firebase.firestore().collection("drafts").add(newPost).catch(err =>{
            console.log(err);
            return err;
        });

        return firestorePost;
    }


    async getPostedArticles(){
        let postsArray = [];
        const posts = await firebase.firestore().collection("articles").get();
        posts.forEach(doc =>{
            postsArray.push({id:doc.id,data:doc.data()})
        });

        return postsArray;
    }

    // login for registered user
    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err =>{
            console.log(err);
        });
        return user;
    }      

    async logout(){
        const logout = await firebase.auth().signOut().catch(err =>{
            console.log(err);
            return err; 
        });
        return logout;
    } 

  }

  export default new Firebase();
