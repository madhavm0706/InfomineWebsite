import React from 'react'
import { MdError } from "react-icons/md";

export default function Error() {
    return (
        <>
        <div className="error-size">
            <br/>
        <div className="jumbotron">
                <h1><MdError /> Oops! You seem to have enter a wrong URL <MdError/></h1>
                
        </div>
        {/* <h3>Re-enter the URL or Contact-us for any help.</h3> */}
        </div>
        
        
            
        </>
    )
}
