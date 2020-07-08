import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router} from 'react-router-dom'; 
import {ArticleProvider} from './Context';

import {ArticlesProvider} from './context/Articlecontext';
import {AuthProvider} from './context/authContext';
import {DraftsProvider} from './context/Draftcontext';
import {AdminArticlesProvider} from './context/Adminarticles';

ReactDOM.render(
  <AdminArticlesProvider>
  <DraftsProvider>
  <AuthProvider>
  <ArticleProvider>
  <ArticlesProvider>
  <Router>
    <App />
  </Router>
  </ArticlesProvider>
  </ArticleProvider>
  </AuthProvider>
  </DraftsProvider>
  </AdminArticlesProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
