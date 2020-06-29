import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


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
            
            publishedBy: post.publishedBy,
            date: post.today,
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
          date: post.today,
          publishedBy: post.publishedBy,
          
          discription: post.discription,
          cover: downloadurl,
          fileRef: fileRef,
          user: post.user
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

    

// save article on draft
    async getPostedArticlesonDraft(userid){
        let postsArray = [];
        const posts = await firebase.firestore().collection("drafts").where("user","==",userid).get();
        posts.forEach(doc =>{
            postsArray.push({id:doc.id,data:doc.data()})
        });

        return postsArray;
    }

    async getPostedArticle(postid){
        const post = await firebase.firestore().collection("articles").doc(postid).get();
        const postdata = post.data();
        return postdata;
      }

      async getPost(postid){
        const post = await firebase.firestore().collection("articles").doc(postid).get();
        const postdata = post.data();
        return postdata;
      }
      
      async getPostDraft(postid){
        const post = await firebase.firestore().collection("drafts").doc(postid).get();
        const postdata = post.data();
        return postdata;
      }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      

// Login section
      async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            console.log(err);
            return err;
        });
        return user;
    }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



    async getUserState(){
        return new Promise(resolve=> {
            this.auth.onAuthStateChanged(resolve);
        });
    }

// delete the article
    async deleteArticle(postid,fileRef){
        const storageRef = firebase.storage().ref();
        await storageRef.child(fileRef).delete().catch(err =>{
            console.log(err);
        });
        console.log("Image deleted");
        const post = await firebase.firestore().collection("drafts").doc(postid).delete().catch(err =>{
            console.log(err);

        });
        console.log("Post deleted");

        return post;
    }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// share an Article

async shareArticle(postid){
    const post = await firebase.firestore().collection("drafts").doc(postid).get();
    const postdata = post.data();
    return postdata;
  }

async shareArticle1(postid){
    const post = await firebase.firestore().collection("drafts").doc(postid).get();
    const firestorePost = await firebase.firestore().collection("share").add(post).catch(err =>{
          console.log(err);
          return err;
      });

      return firestorePost;
     
      
}

// !!!!!!!!!!!

  }

  export default new Firebase();
