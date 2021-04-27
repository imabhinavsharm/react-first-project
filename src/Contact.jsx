import React from 'react'
import web14 from '../src/images/img-14.png';
import web15 from '../src/images/img-15.png';
import web16 from '../src/images/img-16.png';
import web17 from '../src/images/img-17.png';
import web18 from '../src/images/img-18.png';
import './Nav.css';
export const Contact = () => {
    return (
        <>
        <div className="container-fluid nav-bg ">
        <div className="row">
            <div className="col-10 mx-auto div-2">
                <div className="row">
                  
                <div className="heading-2">
                            <h1>Contact us</h1>
                        </div>
                    <div className="col-lg-4 order-1 order-lg-1 img-2 ">
                        <img src={web14} alt="head" className="img-fluid" />

                    </div>
                    <div className="col-md-8 pt-5 pt-lg-0 order-2 order-lg-2">


                    <h3 >
                            Be in the realm of futuristic tech era!<br/>
                            Let’s begin now
                        </h3>
                        <h2 className="heading-2" style={{ color: "teal" }}> "Coming together is a beginning. Keeping together is progress. Working together is success".
- Henry Ford, Founder Ford Motor Company</h2>
                       
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="container-fluid nav-bg ">
        <div className="row">
            <div className="col-8 mx-auto div-2">
                <div className="row">
                <div className="col-md-12 pt-5 pt-lg-0">


<h2 className="heading-2" style={{ color: "teal", textAlign:"center" }}>
Request htmlFor service
    </h2>
   
</div>

        <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contact Details</label>
          <input type="number" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Business Email</label>
          <input type="email" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">  Post your querry here</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
      </div>
      </div>

      <div className="container-fluid  ">
                <div className="row">
                    <div className="col-12 mx-auto counters container-fluid ">
                        <div className="row">
                    <div className="count col-10 mx-auto  ">
                        <div className="parameters">
                        <img src={web15} alt="head" className="img-fluid" style={{width:"50px"}} />
                            <h3> USA</h3>
                            <p className="counter">+1 7412593884</p>
                        </div>
                        <div className="parameters">
                        <img src={web16} alt="head" className="img-fluid" style={{width:"50px"}} />
                            <h3>Spain</h3>
                            <p  className="counter">+34 8569458523</p>
                        </div>
                        
                        <div className="parameters">
                        <img src={web17} alt="head" className="img-fluid" style={{width:"50px"}} />
                            <h3>Norway</h3>
                            <p  className="counter">+47 6984237561</p>
                        </div>
                        <div className="parameters">
                        <img src={web18} alt="head" className="img-fluid" style={{width:"50px"}} />
                            <h3>India</h3>
                            <p className="counter">+91 7351616032</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid nav-bg ">
        <div className="row">
            <div className="col-12 mx-auto div-2">
                <div className="row">
                  
               
                    <div className="col-lg-6 order-1 order-lg-1 img-2 ">
                       
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14194.144088194536!2d77.93959640000001!3d27.2023159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1619432418724!5m2!1sen!2sin"width="600" height="350"style={{margin:"auto"}} ></iframe>
                    </div>
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2">


                    
                        <h2 className="heading-2" style={{ color: "teal" }}> <i class="bi bi-envelope-fill"></i> Email Id:<br/><h4>info@InvictusTech.com</h4><br/><br/><i class="bi bi-geo-alt-fill"></i>Office Addresses
                      <br/>  InvictusTech<br/>
<h4>DG-18-009, Tower B, Emaar Digital Greens, Sector- 61, Gurugram, Haryana 122011 INDIA.</h4></h2>
                       
                    </div>
                </div>
            </div>
        </div>
        </div>



          
                      

           
      </>
    )
}
