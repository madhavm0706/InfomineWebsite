import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyAs0qlAayTqp7_eGVcZ2dsOml37GeMygb4",
    authDomain: "infomine-364d1.firebaseapp.com",
    databaseURL: "https://infomine-364d1.firebaseio.com",
    projectId: "infomine-364d1",
    storageBucket: "infomine-364d1.appspot.com",
    messagingSenderId: "953430068820",
    appId: "1:953430068820:web:ec2a991918c5a45aa867c1",
    measurementId: "G-V0BBGJP2MV"
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

  }

  export default new Firebase();
