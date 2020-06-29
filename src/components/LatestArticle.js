import React from 'react';
import img from '../images/infomine.jpg';
import NewsAndUpdate from '../pages/NewsAndUpdate';
import Subscribe from '../components/Subscribe';


export default function LatestArticle() {
    return (
        <>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                  <div className="col-12">
                      
                      <h4 className="newsTitle"><span>News & Updates</span></h4>

                          
                      </div>
                      <NewsAndUpdate />

                      <div className="col-12">
                      
                      <h4 className="newsTitle"><span>Do Subscribe </span></h4>

                          
                      </div>
                      <Subscribe />
                      
                      
                  </div>
                  <div className="col-md-6">
                      
                      <div className="col-12">
                      <h4 className="newsTitle"><span>Latest Article</span></h4>

                          
                      </div>
                      <div className="col-12">
                          <div className="latestArticle">
                              <div className="col-12">

                              
                              <div className="row latestcard">
                                  <div className=" col-4">
                                      <div className="latestcardimg">
                                      <img src={img} ></img>

                                      </div>
                                      
                                      
                                  </div>
                                  <div className="col-8">
                                          <p>Re-availing the Input Tax Credit under GST</p>
                                          <p className="latestname"><i class="fas fa-user"></i>Madhav Maheshwari &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>Date</span></p>
                                    </div>
                                  </div>

                                  <div className="row latestcard">
                                  <div className=" col-4">
                                      <div className="latestcardimg">
                                      <img src={img} ></img>

                                      </div>
                                      
                                      
                                  </div>
                                  <div className="col-8">
                                          <p>Re-availing the Input Tax Credit under GST</p>
                                          <p className="latestname"><i class="fas fa-user"></i>Madhav Maheshwari &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>Date</span></p>
                                    </div>
                                  </div>
                                  <div className="row latestcard">
                                  <div className=" col-4">
                                      <div className="latestcardimg">
                                      <img src={img} ></img>

                                      </div>
                                      
                                      
                                  </div>
                                  <div className="col-8">
                                          <p>Re-availing the Input Tax Credit under GST</p>
                                          <p className="latestname"><i class="fas fa-user"></i>Madhav Maheshwari &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>Date</span></p>
                                    </div>
                                  </div>
                                  <div className="row latestcard">
                                  <div className=" col-4">
                                      <div className="latestcardimg">
                                      <img src={img} ></img>

                                      </div>
                                      
                                      
                                  </div>
                                  <div className="col-8">
                                          <p>Re-availing the Input Tax Credit under GST</p>
                                          <p className="latestname"><i class="fas fa-user"></i>Madhav Maheshwari &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>Date</span></p>
                                    </div>
                                  </div>
                                  <div className="row latestcard">
                                  <div className=" col-4">
                                      <div className="latestcardimg">
                                      <img src={img} ></img>

                                      </div>
                                      
                                      
                                  </div>
                                  <div className="col-8">
                                          <p>Re-availing the Input Tax Credit under GST</p>
                                          <p className="latestname"><i class="fas fa-user"></i>Madhav Maheshwari &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>Date</span></p>
                                    </div>
                                  </div>
                                  <div className="row latestcard">
                                  <div className=" col-4">
                                      <div className="latestcardimg">
                                      <img src={img} ></img>

                                      </div>
                                      
                                      
                                  </div>
                                  <div className="col-8">
                                          <p>Re-availing the Input Tax Credit under GST</p>
                                          <p className="latestname"><i class="fas fa-user"></i>Madhav Maheshwari &nbsp;&nbsp;&nbsp;&nbsp; <span className="latestname"><i class="fas fa-calendar"></i>Date</span></p>
                                    </div>
                                  </div>

                              </div>
                              
                              

                          </div>
                      </div>
                      <div className="col-12">
                      <p className="morearticle">Show More Articles....</p>

                          
                      </div>



                  </div>


                   <div className="col-md-6">

                   </div>




              </div>
          </div>
        </>
    )
}
