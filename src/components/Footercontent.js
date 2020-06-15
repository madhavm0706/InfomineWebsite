import React from 'react';
import Colerdline from './Colerdline';

export default function Footercontent() {
    return (
        <div className="container">
									<div className="row center">
										<div className="col-md-4 col-sx-12">
												<div className="content">
														<h6>Organization</h6><Colerdline color="#cc2127" />
								  
														<ul className="footer-links">
														  <li><a href="http://scanfcode.com/about/">About Us</a></li>
														  <li><a href="http://scanfcode.com/contact/">Career</a></li>
														  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Term & Conditions</a></li>
														</ul>
													  </div>
										</div>
										<div className="col-md-4 col-sx-12">
												<div className="content">
														<h6>Quick Links</h6><Colerdline color="#cc2127" />
								  
														<ul className="footer-links">
														  <li><a href="http://scanfcode.com/about/">About Us</a></li>
														  <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
														  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
														</ul>
													  </div>
											</div>
											<div className="col-md-4 col-sx-12">
													<div className="content">
															<h6>Contact Info</h6><Colerdline color="#cc2127" />
									  
															<ul className="footer-links">
															  <li><a href="http://scanfcode.com/about/"><i className="fas fa-phone"></i> &nbsp; +91-9876543210</a></li>
															  <li><a href="http://scanfcode.com/contact/"><i className="fas fa-envelope"></i> &nbsp;contact@infomine.co.in</a></li>
															</ul>
														  </div>
												</div>
									</div>
								</div>
    )
}
