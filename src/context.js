import React, { Component } from 'react';
import items from './data';

const ArticleContext = React.createContext();



 class ArticleProvider extends Component {

      state ={
          items
      }



    render() {
        return (
            <>
              <ArticleContext.Provider value={{...this.state}}> 
                  {this.props.children}
                  
                  </ArticleContext.Provider>  
            </>
        )
    }
}

const ArticleConsumer = ArticleContext.Consumer;

export {ArticleConsumer,ArticleContext,ArticleProvider};