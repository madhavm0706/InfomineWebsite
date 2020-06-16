import React from 'react';
import './App.css';


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
import Head from "./components/Head";
import Footer from './components/Footer';
import Singlearticle from './pages/Singleaerticle';

import GotoTop from './components/GotoTop';

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    
      <TopHead />
      <Head/>
    
     <Switch>
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
