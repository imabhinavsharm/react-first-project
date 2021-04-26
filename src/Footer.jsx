import React from 'react'
import './Nav.css';
import web5 from "../src/images/img-8.jpg";
export const Footer = () => {
    return (
        <div className="container-fluid  ">
            <div className="row">
                <div className="col-12 mx-auto counters container-fluid ">
                    <div className="row">
                        <div className="card mb-3 col-12"style={{backgroundColor:"#B2DFDB"}} >
                            <div className="row g-0">
                                <div className="col-4 container-fluid mx-auto ">
                                    <img src={web5} alt="..." className="col-12 img-foot"  />
                                    <h2 style={{color:" #004D40",textAlign:"center",marginTop:"20px"}}>Follow us </h2>
                                    <div className="follow ">
                                    
                                    <i className="bi bi-github icons"></i>
                                    <i className="bi bi-facebook icons"></i>
                                    <i className="bi bi-twitter icons"></i>
                                    <i className="bi bi-instagram icons"></i>
                                    <i className="bi bi-linkedin icons"></i>
                                    </div>
                                </div>
                                    

                                
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="footer-head">
                                            <ul className="foot-inside">
                                                <li className="foot-heading">Valued Services</li>
                                                        <li>Digital Marketing</li>
                                                        <li>Design Studio</li>
                                                        <li>Blockchain</li>
                                                        <li>Artificial Intelligence</li>
                                                        <li>ERP Solutions</li>
                                                        <li>Data Protection and Privacy</li>
                                                    </ul>
                                            <ul className="foot-inside">
                                                <li className="foot-heading">Expertise</li>
                                                        <li>Services</li>
                                                        <li>Tech talk</li>
                                                        <li>Our work</li>
                                                        
                                                    </ul>
                                            <ul className="foot-inside">
                                                <li className="foot-heading">Resources</li>
                                                        <li>Blog</li>
                                                        <li>Privacy Policy</li>
                                                        <li>Refund Policy</li>
                                                        <li>Term of use</li>
                                                        <li>What's New</li>
                                                        
                                                    </ul>
                                            <ul className="foot-inside">
                                                <li className="foot-heading">Connect With Us</li>
                                                        <li>Contact Us</li>
                                                        <li>Careers</li>
                                                    
                                                        
                                                    </ul>
                                                
                                        </div>
                                        
                                    </div>
                                    </div>
                                    
                                
                            </div>
                            
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
