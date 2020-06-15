import React, { Component } from 'react';
import {ArticleContext} from '../Context';
import Articledata from '../components/Articledats';

export default class ArticlePage extends Component {

  static contextType=ArticleContext;
  
  render() {
   const {items} = this.context;
   console.log(items);

   
    const data = items.map(item =>{
         return <Articledata key={item.id} articleinfo={item} />
    });
   
    

    return (
        <div class="container">
              <div class="row">
                 
                  {data}
                 
              </div>
        </div>        
    )
  }
}
