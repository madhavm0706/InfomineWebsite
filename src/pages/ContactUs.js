import React from 'react'

export default function ContactUs() {
    return (
        <div className="container">
            <h3 style={{textAlign:"center"}}>Contact US</h3><br /><br />
            <p>You may write queries, relating to articles published, 
                on any of our social media platforms viz., Facebook, Twitter, Instagram or 
                LinkedIn,  <br /> links of these accounts are readily available on our Home page. 
                You can directly mail your queries at <a style={{color:"red"}} href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@infomine.co.in" target="_blank">contact@infomine.co.in</a></p>

              <p>You may suggest us topics to write on. Such topics shall be 
                  relating to subjects referred to in “About us” section on Home page. <br ></br>
                  Topic suggestions will be entertained only if received on mail and no revert 
                  shall be made for social media suggestions.<br />
                   Social media is open only for queries and discussions.</p>  

               <p>We try to serve you the best..!! Happy reading..!!</p>
               <p>You may reach us by filling below information</p>

               <form>
                <div className="col-md-4">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="enter your name" required />
                        
                    </div>  
                    <div className="col-md-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="enter E-mail id" required />
                        
                    </div>
                    <div className="col-md-4">
                    <label htmlFor="contact">Contact Number</label>
                    <input type="number" name="contact" placeholder="enter your contact number" required />
                        
                    </div>
                    <div className="col-md-4">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="5" placeholder="Type Your Message" ></textarea>
                        
                    </div> 
                    <div className="col-md-4">
                        <input type="submit" value="Submit" className="btn btn-primary"></input>
                    </div>
                </form>    
            
        </div>
    )
}
