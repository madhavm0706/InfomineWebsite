import React, { Component } from 'react';
import items from './data';

const ArticleContext = React.createContext();



 class ArticleProvider extends Component {

      state ={
          items
      }
      

      getarticle = (slug) => {
          let temparticle = [...this.state.items];
          const article = temparticle.find(article => article.slug === slug);
          return article;
      }


    render() {
        return (
            <>
              <ArticleContext.Provider value={{...this.state,getarticle:this.getarticle}}> 
                  {this.props.children}
                  
                  </ArticleContext.Provider>  
            </>
        )
    }
}

const ArticleConsumer = ArticleContext.Consumer;

export {ArticleConsumer,ArticleContext,ArticleProvider};