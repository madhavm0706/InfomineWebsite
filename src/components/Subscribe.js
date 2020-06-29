import React from 'react';

export default function Subscribe() {
    return (
        <>
         <div className="newsBox">
             <div className="newsInfo subscribeBox">
                 <div className="row newsInfoContent">
                     <h5>Subscribe to get latest announcement via E-Mail</h5>
                     <form>
                     <input type="email" placeholder="Enter Your Email-Id" required /><br></br><br></br>
                     <input className="btn btn-primary" type="submit" value="SUBSCRIBE" />
                     </form>
             </div>
             </div>
             
         </div>
        
        </>
    )
}
