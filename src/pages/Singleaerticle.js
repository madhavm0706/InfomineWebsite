import React, { Component } from 'react';
import {ArticleContext} from '../Context';

export default class Singleaerticle extends Component {

    constructor(props) {
        super(props);
        

        this.state = {
            slug: this.props.match.params.slug
        };

        
    }
           static contextType = ArticleContext;
    
    render() {

        const {getarticle} = this.context;
        const article = getarticle(this.state.slug);
        console.log(article);

        if(!article){
            return(
                <div>No such article could found.......</div>
            )
        }

        const {name,publishedBy} = article;

        return(
        <div>{name}<br></br> {publishedBy}</div>
        )
    }
}
