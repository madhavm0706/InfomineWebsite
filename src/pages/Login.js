import React from 'react';
import Coloredline from '../components/Colerdline';

export default function Login() {
    return (
        <div className="container">
            <div className="form-group">
                <br></br>
            <h3 align="center">Login To Post Your Article</h3><Coloredline color="black" /> <br />

            <div className="row">



                    <div className="offset-md-5 col-md-4">
                        <label>Username:-</label>
                        <input type="text" name="articlename" placeholder="Enter Username" required />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-5 col-md-4">
                        <label>Password:-</label>
                        <input type="password" name="password" placeholder="Enter Your Password " required />
                    </div>
                </div>
            </div>
            <div className="row">
                    <div class="offset-md-5 col-md-4 ">
                    <input type="submit" value="Login" className="btn btn-primary" />
                    </div>&nbsp;
                    

                </div>
            <Coloredline color="black" />
           
        </div>
    )
}
