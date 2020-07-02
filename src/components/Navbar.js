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
											<li><Link to="/" >Home</Link></li>
	
										<li class="menu-item-has-children"><a>Taxation</a>
											<ul class="sub-menu">
												<li><Link to="/Income-tax" >Income Tax</Link></li>
												<li><Link to="/goods-and-service-tax" >Goods And Service Tax</Link></li>
											</ul>
										</li>
										<li class="menu-item-has-children"><a>Law And Policy</a>
											<ul class="sub-menu">
												<li class="menu-item-has-children"><Link to="/Indian-constitution" >Indian Constitution</Link></li>
													<li class="menu-item-has-children"><Link to="/coperate-law" >Corporate Law</Link></li>
														<li class="menu-item-has-children"><Link to="/economics-and-policy" >Economics Policies</Link>
	
													
												</li>
												
												
											</ul>
										</li>
										<li><Link to="/other" >Other</Link></li>
										<li><Link to="/contact-us" >Contact Us</Link></li>
										
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