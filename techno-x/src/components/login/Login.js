import React from 'react';
import "./Login.css"

function Login () {
  return (
  
  <div className='back'><div className="login">
      
            <div className="mb-3">
                <div className="title"><h1>Welcome to Prama</h1> </div>
                
                {/* <div className="sub-title"><br/>Please a bit about you so that we can personalize <br/> your onboarding skills <br/> You are looing for,<br/></div> */}
            </div>
      
      
      
              <form className="form" action="#" method="post" >
                  <div className="col-12">
                      <label for="inputAddress" className="form-label"><h6>Email Id</h6></label>
                      <input type="text" className="form-control" id="name" id="inputAddress"/>
                  </div>
                  <div className="col-12">
                      <label for="inputAddress2" className="form-label"><h6>Password</h6></label>
                      <input type="text" className="form-control" id="name" id="inputAddress"/>
                  </div>
                  <div className="col-12">
                      <label for="inputAddress2" className="form-label"><h6>Phone number</h6></label>
                      <input type="tel" className="form-control" id="name" id="inputAddress"/>
                  </div>
                  <div className='col-12'>
                      <p>Don't have an account!!! <a href="#">Signin</a></p>
                  </div>
                  <div className="d-grid gap-1">
                      <button className="btn btn-primary"  type="submit"><b>Login</b>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameName="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg></button>
                  </div>
              </form>
      </div></div>
);
};

export default Login;
