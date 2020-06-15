import React from "react";

const TopHead = () =>{
    return(
        <div id="page-content-wrapper">
			<div className="container-fluid">
				<div className="container">
					<div className="top_bar margin-15">
						<div className="row">
							<div className="col-md-6 col-sm-12 time">
                                <div id="date">

                                </div>
							</div>
							
							<div class="col-md-6 col-sm-12 social">
								<ul>
									<li><a href="https://www.facebook.com/InfoMineofficial"><i  style={{color: "#3b5998"}} className="fab fa-facebook"></i></a></li>
									<li><a href="https://twitter.com/contactInfoMine"><i  style={{color: "#00acee"}} className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/info.mine"><i  style={{color: "#f09433"}} className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/infomine-0b22431a9"><i  style={{color: "#0e76a8"}} className="fab fa-linkedin"></i></a></li>						
						
								</ul>
								
								
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    );
}

export default TopHead;