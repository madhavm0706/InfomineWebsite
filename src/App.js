import React,{useEffect,useState} from 'react';
import './App.css';
import firebase from './firebase/Firebase';


import image from './images/infomine.jpg';

import Home from './pages/Home';
import Other from './pages/Other';
import ContactUs from './pages/ContactUs';
import Error from './pages/Error';
import Coperate from './pages/Coperate';
import Economics from './pages/Economics';
import GandSTax from './pages/GandSTax';
import IncomeTax from './pages/IncomeTax';
import IndianC from './pages/IndianC';
import ArticlePage from './pages/ArticlePage';
import TopHead from "./components/Tophead";
import Navbar from './components/Navbar';
import Head from "./components/Head";
import Footer from './components/Footer';
import Singlearticle from './pages/Singleaerticle';
import Postpage from './pages/Postpage';
import Login from './pages/Login';
import Articleinfo from './pages/Articleinfo';
import Postedarticle from './pages/Postedarticle';
import Articleadmin from './pages/Articleadmin';
import Article from './pages/Article';
import Delete from './pages/Delete';
import Share from './pages/Share';
import Query from './pages/Query';
import NewsandUpdate from './pages/NewsandUpdate';
import Subscriber from './pages/Subscriber';
import ArticleDraft from './pages/ArticleDraft';
import Edit from './pages/Edit';
 
import GotoTop from './components/GotoTop';

import {Switch, Route} from 'react-router-dom';

function App() {

  const [usersite,setUsersite] = useState(false);

  useEffect(() => {
    firebase.getUserState().then(user => {
        if(user){
            
            
            setUsersite(true);
        }
    });
});







  return (
    <>
    
      
      <Head/>
      <Navbar />
    
     <Switch>

     <Route exact path="/postyourarticle/drafts" component={Articleinfo} />
          <Route exact path="/postyourarticle/posted-articles" component={Postedarticle} />
          <Route exact path="/postyourarticle/article-by-other-admin" component={Articleadmin} />
          <Route exact path ="/postyourarticle/articleondraft/:id" component={ArticleDraft}/>

          <Route exact path ="/postyourarticle/article/:id" component={Article}/>
          <Route exact path ="/postyourarticle/drafts/:id" component={Delete}/>
          <Route exact path ="/postyourarticle/drafts/share/:id" component={Share}/>
          <Route exact path ="/postyourarticle/query" component={Query}/>
          <Route exact path="/postyourarticle/article" component={Postpage} />
          <Route exact path="/postyourarticle/article" component={Postpage} />
          <Route exact path="/postyourarticle/news-and-update" component={NewsandUpdate} />
          <Route exact path="/postyourarticle/subscriber" component={Subscriber} />
          <Route exact path ="/postyourarticle/drafts/edit/:id" component={Edit}/>



       
      

       <Route exact path="/postyourarticle/login" component={Login} />

      
       
       <Route exact path="/" component={Home} />
       <Route exact path="/other" component={Other} />
       <Route exact path="/contact-us" component={ContactUs} />
       <Route exact path="/coperate-law" component={Coperate} />
       <Route exact path="/economics-and-policy" component={Economics} />
       <Route exact path="/goods-and-service-tax" component={GandSTax} />
       <Route exact path="/Income-tax" component={IncomeTax} />
       <Route exact path="/Indian-constitution" component={IndianC} />
       <Route exact path="/article-page" component={ArticlePage} />
       <Route exact path="/single-article-page/:slug" component={Singlearticle} />


       






       <Route component={Error} />
     </Switch>
     <Footer />
     
     <GotoTop />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            
    </>
  );
}

export default App;
