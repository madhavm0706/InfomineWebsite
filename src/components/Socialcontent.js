import React from 'react';
import Social from './Social';

export default function Socialcontent() {
    return (
        <div className="container-fluid">
					<div className="container animate-box">
						<div className="bottom margin-15">
							<div className="row">            
								<Social  title="Facebook" />
                                <Social  title="Linkedin" />
                                <Social  title="Instagram" />
                                <Social  title="Twitter" />
								</div>
								
								
							</div> 
						</div>
					</div>
				
    )
}
