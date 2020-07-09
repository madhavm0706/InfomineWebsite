import React from 'react';  
import Carousel from 'react-bootstrap/Carousel' 

export default function ImageSlider() {
    return (
     


<div className="slider" id="slider1">
    <Carousel>
        <Carousel.Item style={{'height':"500px"}} >  
            <img alt="Slider" className="sliderimg"  
              
                src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_bodie-11.jpg"}  />  
            <Carousel.Caption>  
                <h3>1</h3>  
            </Carousel.Caption>  
        </Carousel.Item  >
        
        <Carousel.Item style={{'height':"500px"}} >  
            <img alt="Slider" className="sliderimg"  
                
                src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/jungle.jpg"}  />  
            <Carousel.Caption>  
                <h3>2</h3>  
            </Carousel.Caption>  
        </Carousel.Item  >

        <Carousel.Item style={{'height':"500px"}} >  
            <img alt="Slider"   className="sliderimg"
                  
                src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_bodie-11.jpg"}  />  
            <Carousel.Caption>  
                <h3>3</h3>  
            </Carousel.Caption>  
        </Carousel.Item  >

        <Carousel.Item style={{'height':"500px"}} >  
            <img alt="Slider"  className="sliderimg"
                 
                src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_bodie-11.jpg"}  />  
            <Carousel.Caption>  
                <h3>4</h3>  
            </Carousel.Caption>  
        </Carousel.Item  >
        <Carousel.Item style={{'height':"500px"}} >  
            <img alt="Slider"  className="sliderimg"
                  
                src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/30256/1200_bodie-11.jpg"}  />  
            <Carousel.Caption>  
                <h3>5</h3>  
            </Carousel.Caption>  
        </Carousel.Item  >

    </Carousel>
   
</div>





  
    )
}

