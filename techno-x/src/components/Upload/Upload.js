import React from 'react';
import "./Upload.css"
import Navbar from "../Navbar"
function Upload(){
  return (
      <div>
    <Navbar/>
    <div className='back'>
        <div className="upload">
      
    <div className="mb-2">
        <div className="title"><h1>Add a book</h1> </div>
        
        {/* <div className="sub-title"><br/>Please a bit about you so that we can personalize <br/> your onboarding skills <br/> You are looing for,<br/></div> */}
    </div>
   
  
  
      <form className="form" action="#" method="post" >
          <div className="col-12">
              <label for="inputAddress" className="form-label"><h6>Book Name</h6></label>
              <input type="text" className="form-control" id="name" id="inputAddress"/>
          </div>
          <div className="col-12">
              <label for="inputAddress" className="form-label"><h6>Author and edition</h6></label>
              <input type="text" className="form-control" id="name" id="inputAddress"/>
          </div>
        
          <div className="col-12">
              <input type="checkbox" id="giveaway" className='largerCheckbox' name="giveaway" value="Bike"/>
                <label for="giveaway"> GiveAway</label><br/>
                <input type="checkbox" id="lend" className='largerCheckbox' name="lend" value="Car"/>
                <label for="lend"> Lend</label><br/>
                <input type="checkbox" id="exchange"className='largerCheckbox' name="exchange" value="Boat"/>
                <label for="exchange">Exchange</label>
          </div>
          
          <div className="col-12">
              <label for="inputAddress2" className="form-label"><h6>Define Condition</h6></label>
              <input type="text"className="form-control" id="inputAddress"/>
          </div>
          <div className="d-grid gap-2">
              <button className="btn btn-primary"  type="submit"><b>Add Book</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameName="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg></button>
          </div>
      </form>
  </div></div></div>
  );
};
/*Name
Author
Version
CheckBox:
Giveaway
Lend
Exchange*/

export default Upload;
