import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>

  
				<div class="main-nav section_margin">
					<div class="container-fluid">
						<div class="container">
							<div class="row">
								<div class="col-12 col-md-12 main_nav_cover" id="nav">							
									<ul id="main-menu">
											<li><Link to="/">Home</Link></li>
	
										<li class="menu-item-has-children"><Link to="/" >Taxation</Link>
											<ul class="sub-menu">
												<li><a href="./incometax.html">Income Tax</a></li>
												<li><a href="./good.html">Goods And Service Tax</a></li>
											</ul>
										</li>
										<li class="menu-item-has-children"><a href="#">Law And Policy</a>
											<ul class="sub-menu">
												<li class="menu-item-has-children"><a href="./indian.html">Indian Constitution</a></li>
													<li class="menu-item-has-children"><a href="./coperatelaw.html">Corporate Law</a></li>
														<li class="menu-item-has-children"><a href="./economics.html">Economics Policies</a>
	
													
												</li>
												
												
											</ul>
										</li>
										<li><a href="./other.html">Other</a></li>
										<li><Link to="/contact-us">Contact Us</Link></li>
										
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>








        </>
    );
}

export default Navbar;