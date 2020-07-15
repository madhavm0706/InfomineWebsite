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

      async logout(){
        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err);
            return err;
        });
        return logout;
    }

    async newsandupdate(post){
        let news = {
             url: post.url,
             date: post.today,
             news: post.newsorupdate
        }

        const newsdata = await firebase.firestore().collection("newsandupdate").add(news).catch(err =>{
            console.log(err);
            return err;
        });

        return newsdata;
    }


    async getnews(){
        const newsarray = [];
        const news = await firebase.firestore().collection("newsandupdate").get();

        news.forEach(doc =>{

            newsarray.push({id:doc.id,data:doc.data()});

        });

        return newsarray;
    }

    async emailfinder(email){
        

        const emailalreadyregistered = await firebase.firestore().collection("subscriber").where("emailid","==",email).get();
         
        return emailalreadyregistered;


    }

    async subscriber(emailid){

        let emailofsuscriber ={
            emailIdOfUser: emailid.email,
            date: emailid.today,
        }
 

        const emails = await firebase.firestore().collection("subscriber").add(emailofsuscriber).catch(err =>{
            console.log(err);
            return err;       
            
     
        });

        return emails;
    }

    async getSubscrier(){
        const subscriber=[];
        const subs = await firebase.firestore().collection("subscriber").get().catch(err =>{
            console.log(err);
            return err;
        });
        subs.forEach(doc =>{

            subscriber.push({id:doc.id,data:doc.data()});

        });

        return subscriber;

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
        const posts = await firebase.firestore().collection("articles").orderBy("date").get();
        posts.forEach(doc =>{
            postsArray.push({id:doc.id,data:doc.data()})
        });

        return postsArray.reverse();
    }
    async getPostedArticlesbyAdmins(){
        let postsArray = [];
        const posts = await firebase.firestore().collection("share").get();
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
    async getPostDraftid(postid){
        const post = await firebase.firestore().collection("drafts").doc(postid).get();
        const postdata = post.data();
        return postdata;
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


// update article

async updateArticle(postid, postdata){
    if(postdata["cover"]){

        const storageRef = firebase.storage().ref();
        const storageChild = storageRef.child(postdata.cover.name);
        const postcover = await storageChild.put(postdata.cover);
        const downloadurl = await storageChild.getDownloadURL();
        const fileRef = postcover.ref.location.path;

        await storageRef.child(postdata["oldcover"]).delete().catch(err =>{
            console.log(err);
            return err;
        });

        let updatepost ={
            name: postdata.name,
            user: postdata.user,
            publishedBy: postdata.publishedBy,
            date: postdata.date,
            discription: postdata.discription,
            cover: downloadurl,
            fileRef: fileRef
        }

        const post = await firebase.firestore().collection("drafts").doc(postid).set(updatepost,{merge : true}).catch(err =>{
            console.log(err);
            return err;
        });

        return post;

    }else{
        const post = await firebase.firestore().collection("drafts").doc(postid).set(postdata,{merge : true}).catch(err =>{
            console.log(err);
            return err;
        });
        return post;
    }

    }




// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// share an Article

async shareArticle(post){
    let newPost ={
        id: post.id,
      name: post.name,
      date: post.date,
      publishedBy: post.publishedBy,
      
      discription: post.discription,
      cover: post.cover,
      fileRef: post.fileRef,
      user: post.user
        
      }
    
    const postdata = await firebase.firestore().collection("share").add(newPost).catch(err => {
        console.log(err);
        return err;
    });
    
    return postdata;
  }

async fetchshareArticle(postid){
    const postsArray = [];
    const post = await firebase.firestore().collection("share").where("id","==",postid).get();
    post.forEach(doc =>{
        postsArray.push({id:doc.id});
    });

      return postsArray[0];
     
      
}

// !!!!!!!!!!!
// fetch Query form

async Query(){
    const queryarry = [];
    const query = await firebase.firestore().collection("contactFormDetails").get();
    query.forEach(doc =>{
        queryarry.push({id: doc.id,data: doc.data()});
    });
    return queryarry;
}

// !!!!!!!!!!!!!!!!

// get user state
async getUserState(){
    return new Promise(resolve =>{
        this.auth.onAuthStateChanged(resolve);
    });
}

// !!!!!!!!!!!!!

  }

  export default new Firebase();
