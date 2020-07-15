import React from 'react';
import Colerdline from './Colerdline';
import { Link } from 'react-router-dom';

export default function Footercontent() {
    return (
        <div className="container">
									<div className="row center ">
										<div className=" col-4">
												<div className="content">
														<h6>Organization</h6><Colerdline color="#cc2127" marginleft="50" marginright="50" />
								  
														<ul className="footer-links">
														  <li><a href="">About Us</a></li>
														  {/* <li><a >Career</a></li> */}
														  {/* <li><a >Term & Conditions</a></li> */}
														</ul>
													  </div>
										</div>
										<div className="col-4">
												<div className="content">
														<h6>Quick Links</h6><Colerdline color="#cc2127" marginleft="50" marginright="50" />
								  
														<ul className="footer-links">
														  {/* <li><Link to="/Income-tax">Income Tax</Link></li> */}
														  <li><Link to="/contact-us" >Contact Us</Link></li>
														  {/* <li><Link to="/Indian-constitution" >Indian Constitution</Link></li> */}
														</ul>
													  </div>
											</div>
											<div className="col-4 ">
													<div className="content">
															<h6>Contact Info</h6><Colerdline color="#cc2127" width="200" marginleft="50" marginright="50" />
									  
															<ul className="footer-links">
															  <li><a ><i className="fas fa-phone"></i> &nbsp; +91-9876543210</a></li>
															  <li><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@infomine.co.in"><i className="fas fa-envelope"></i> &nbsp;contact@infomine.co.in</a></li>
															</ul>
														  </div>
												</div>
									</div>
								</div>
    )
}
