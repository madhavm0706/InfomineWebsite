import React,{useEffect,useState} from 'react';
import firebase from '../firebase/Firebase';



export default function NewsAndUpdate() {

    const [isBusy,setIsBusy] = useState(false);
    const [news,setNews] = useState([]);

    const getnewsandupdates = async () =>{
        setIsBusy(true);
        const news = await firebase.getnews().catch(err =>{
            console.log(err);
            return err;
        });

        setNews(news);
        setIsBusy(false);

        
    }

    console.log(news);

    useEffect(() =>{
        getnewsandupdates();
    },[]);

    let content;

    const arr = [1,2];

    if(isBusy){
          content =(
              <>
              {arr.map(item =>{
                  return(
                      <>
                    <div className="card__description loading1"></div><br />
                    <div className="card__description loading2"></div><br />
                      </>
                  )
                 
                                     

              })}
            </>
          )
    }else {
        content =(

            <div className="newsInfo">
                 
                

                     {news.map(item =>{

                         return (
                            <div className="row newsInfoContent">
                            <div className="col-1">
                            <i className="fa fa-hand-o-right"></i>
                            </div>
                            <div className="col-11">

                 
                 
                            <p className="newsContent">{item.data.news} <br />
                             Date:- {item.data.date} <a className="newsLink" href={item.data.url}>click Here</a> to read the article</p>
                            </div>
                            </div>
                            
                         )

                     })}

                 
                 
             
             
                 
                 
             
             </div>

        )
    }



    return (
        <>
         <div className="newsBox">
             {content}
             
         </div>
        
        </>
    )
}
