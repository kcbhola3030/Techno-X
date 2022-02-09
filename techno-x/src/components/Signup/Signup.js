import React from 'react';
import "./Signup.css";
import {Link} from "react-router-dom";


export const Signup = () => {
  return (<div className='back'><div className="signup">
      
  <div className="mb-2">
      <div className="title"><h1>Welcome to Prama</h1>  </div>
      
      {/* <div className="sub-title"><br/>Please a bit about you so that we can personalize <br/> your onboarding skills <br/> You are looing for,<br/></div> */}
  </div>



    <form className="form" action="#" method="post" >
        <div className="col-12">
            <label for="inputAddress" className="form-label"><h6>Email Id</h6></label>
            <input type="text" className="form-control" id="name" id="inputAddress"/>
        </div>
        {/* <div className="col-12">
            <label for="inputAddress" className="form-label"><h6>Full Name</h6></label>
            <input type="text" className="form-control" id="name" id="inputAddress"/>
        </div>
        <div className="col-12">
            <label for="inputAddress" className="form-label"><h6>College</h6></label>
            <input type="text" className="form-control" id="name" id="inputAddress"/>
        </div>
        <div className="col-12">
            <label for="inputAddress" className="form-label"><h6>PRN</h6></label>
            <input type="text" className="form-control" id="name" id="inputAddress"/>
        </div> */}
        <div className="col-12">
            <label for="inputAddress2" className="form-label"><h6>Password</h6></label>
            <input type="hexa" className="form-control" id="name" id="inputAddress"/>
        </div>
        {/* <div className="col-12">
            <label for="inputAddress2" className="form-label"><h6>Confirm Password</h6></label>
            <input type="text" className="form-control" id="name" id="inputAddress"/>
        </div>
        <div className="col-12">
            <label for="inputAddress2" className="form-label"><h6>Phone number</h6></label>
            <input type="tel" className="form-control" id="name" id="inputAddress"/>
        </div> */}
        <div className='col-12'>
            <p>Already have account??? <Link to="/login">Login in</Link> </p>
        </div>
        <div className="d-grid gap-2">
            <button className="btn btn-primary"  type="submit"><b>Signup</b>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameName="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg></button>
        </div>
    </form>
</div></div>
);
};
